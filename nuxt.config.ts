import { Client } from "@paragraphcms/client";

export default defineNuxtConfig({
  runtimeConfig: {
    paragraphApiKey: process.env.NUXT_PARAGRAPH_API_KEY,
  },
  hooks: {
    async "prerender:routes"(ctx) {
      const apiKey = process.env.NUXT_PARAGRAPH_API_KEY;

      if (!apiKey) {
        return;
      }

      const client = new Client({ apiKey });
      const { data: pages, error } = await client.pages.list({
        requiredSlug: true,
      });

      if (error) {
        throw error;
      }

      for (const page of pages) {
        ctx.routes.add(`/blog/${page.slug}`);
      }
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/blog"],
    },
  },
});
