import openNextWorker from './.open-next/worker.js';
import { canonicalRedirect } from './canonical-redirect.mjs';
export * from './.open-next/worker.js';
export default {
  async fetch(request, env, ctx) {
    const redirect = canonicalRedirect(request);
    if (redirect) return redirect;
    return openNextWorker.fetch(request, env, ctx);
  },
};
