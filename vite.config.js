import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    clearScreen: false,
    plugins: [ sveltekit() ],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
