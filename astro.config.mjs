// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        server: {
            proxy: {
                "/api": {
                    target: "https://jackshaus.com.au",
                    changeOrigin: true,
                    secure: true
                }
            }
        }
    }
});
