const publicHosts = new Set(['trieramphitheater.com', 'www.trieramphitheater.com']);
export function canonicalRedirect(request) {
  const url = new URL(request.url);
  if (!publicHosts.has(url.hostname)) return null;
  if (url.hostname === 'www.trieramphitheater.com' && url.protocol === 'https:') return null;
  url.protocol = 'https:';
  url.hostname = 'www.trieramphitheater.com';
  url.port = '';
  return Response.redirect(url.toString(), 308);
}
