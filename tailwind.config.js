import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    daisyui: {
        themes: ["cmyk", "business"],
        darkTheme: "business"
    },
    content: ["./src/**/*.{html,js,svelte}"],
    plugins: [daisyui]
};
