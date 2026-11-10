import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

// The site is generated at build time; use the deployed assets for prerendered routes.
export default defineCloudflareConfig({ incrementalCache: staticAssetsIncrementalCache });
