Add-Type -AssemblyName System.Drawing

$dir = "H:\GitHub\trieramphitheater\public\gallery"
$quality = 82
$maxDim = 2400
$threshold = 5MB

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)

$files = Get-ChildItem -Path $dir -Filter *.jpg | Where-Object { $_.Length -gt $threshold }
foreach ($f in $files) {
    $img = [System.Drawing.Image]::FromFile($f.FullName)
    $w = $img.Width; $h = $img.Height
    $longest = [Math]::Max($w, $h)
    if ($longest -le $maxDim) { $nw = $w; $nh = $h }
    else {
        $scale = [double]$maxDim / $longest
        $nw = [int]($w * $scale)
        $nh = [int]($h * $scale)
    }
    $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($img, 0, 0, $nw, $nh)
    $g.Dispose(); $img.Dispose()

    $tmp = Join-Path $dir ([System.IO.Path]::GetFileNameWithoutExtension($f.Name) + "_tmp.jpg")
    $bmp.Save($tmp, $encoder, $encParams)
    $bmp.Dispose()

    [System.IO.File]::Delete($f.FullName)
    [System.IO.File]::Move($tmp, $f.FullName)

    $newSize = (Get-Item $f.FullName).Length
    Write-Host "$($f.Name): $([math]::Round($f.Length/1MB,2)) MB -> $([math]::Round($newSize/1MB,2)) MB (${nw}x${nh})"
}
Write-Host "Done."
