/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        colors: {
            transparent: "transparent",
            black: "#000",
            white: "#FFF",
            purple: {
                400: "#5E60CE",
                200: "#8284FA",
            },
            blue: {
                200: "#4EA8DE",
                500: "#1E5F9F",
            },
            gray: {
                100: "#F2F2F2",
                200: "#D9D9D9",
                300: "#808080",
                400: "#333333",
                500: "#262626",
                600: "#1A1A1A",
                700: "#0D0D0D",
            },
            red: {
                200: "#E25858",
            },
        },
        fontSize: {
            xs: 12,
            sm: 14,
            md: 16,
        },
        lineHeight: {
            normal: "14px",
        },
        extend: {},
    },
    plugins: [],
};
