import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    daisyui: {
        themes: ["valentine", "halloween"],
        darkTheme: "halloween"
    },
    content: ["./src/**/*.{html,js,svelte}"],
    plugins: [daisyui]
};
