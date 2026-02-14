import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.eloylozano.es',
  base: '/', 
  output: 'server',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) =>
        page === 'https://www.eloylozano.es/' ||
        page === 'https://www.eloylozano.es/photography/me' ||
        page === 'https://www.eloylozano.es/web/atelier' ||
        page === 'https://www.eloylozano.es/web/saviaclub' ||
        page === 'https://www.eloylozano.es/web/axesteel' ||
        page === 'https://www.eloylozano.es/web/gastronomia'
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 10240,
    },
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});