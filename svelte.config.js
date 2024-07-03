import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.svx'],
    preprocess: [sveltekit(), mdsvex()],
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
