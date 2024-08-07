// @ts-check

import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.svx'],
    preprocess: [vitePreprocess(), mdsvex()],
    kit: {
        adapter: adapter({
            routes: {
                include: ["/*"],
                exclude: ["<all>"]
            }
        }),
        csp: {
            mode: 'auto'
        }
    }
};

export default config;
