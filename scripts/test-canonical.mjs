import assert from 'node:assert/strict';
import { canonicalRedirect } from '../canonical-redirect.mjs';
let cases = 0;
for (const host of ['trieramphitheater.com', 'www.trieramphitheater.com']) {
  for (const scheme of ['http', 'https']) {
    for (const path of ['/', '/umgebung/porta-nigra/?relay=19&check=path', '/gallery/trier-amphitheater-17.jpg?keep=1']) {
      const result = canonicalRedirect(new Request(`${scheme}://${host}${path}`));
      if (host === 'www.trieramphitheater.com' && scheme === 'https') assert.equal(result, null);
      else { assert.equal(result.status, 308); assert.equal(result.headers.get('location'), `https://www.trieramphitheater.com${path}`); }
      cases++;
    }
  }
}
assert.equal(canonicalRedirect(new Request('http://localhost:3019/')), null);
console.log(`${cases + 1} canonical request cases passed`);
