import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://xxjastroblog.netlify.app/rss.xml",
  integrations: [preact()]
});