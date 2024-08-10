import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";
import betterImageService from "astro-better-image-service";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://pony.best/",
  integrations: [
    tailwind(),
    icon(),
    betterImageService(),
    playformCompress({
      HTML: true,
      CSS: true,
      JavaScript: true,
      Image: false,
      SVG: false,
    }),
    sitemap(),
  ],
});
