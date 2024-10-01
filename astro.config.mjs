import { defineConfig, passthroughImageService } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  preflight: true,
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  image: { service: passthroughImageService() },
  integrations: [react()],
  outdir: 'styled-system',
});