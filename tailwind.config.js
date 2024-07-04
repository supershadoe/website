// @ts-check

import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    daisyui: {
        themes: ["valentine", "halloween"],
        darkTheme: "halloween"
    },
    content: ["./src/**/*.{html,js,svelte}"],
    plugins: [ typography, daisyui]
};
