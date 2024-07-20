import { defineConfig } from 'astro/config';

// tailwind config
import tailwind from "@astrojs/tailwind";
// react config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()]
});