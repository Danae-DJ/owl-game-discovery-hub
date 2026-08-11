import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    publicDir: "../public",

    build: {
        outDir: "../dist",

        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                game: resolve(__dirname, "src/game/index.html"),
            },
        },
    },

    server: {
        port: 5991,
        open: true,

        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
            },
        },
    },
});