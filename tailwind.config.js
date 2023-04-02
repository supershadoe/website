import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    daisyui: {
        themes: ["valentine", "dracula"],
        darkTheme: "dracula"
    },
    content: ["./src/**/*.{html,js,svelte}"],
    plugins: [daisyui]
};
