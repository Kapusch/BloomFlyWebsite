// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bloomandflyapp.com',
  base: process.env.PUBLIC_BASE_PATH || '/',
});
