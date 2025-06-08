import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // 👈 Este es el adapter correcto

export default defineConfig({
  adapter: vercel(),
});
