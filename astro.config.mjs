import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    adapter: cloudflare(),
    site: "https://shadoe.dev",
    vite: {
        plugins: [tailwindcss()]
    }
});
