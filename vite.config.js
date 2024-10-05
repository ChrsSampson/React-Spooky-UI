import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        outDir: "dist",
        lib: {
            name: "react-spooky-ui",
            entry: "src/npm-exports.ts",
            filename: "spooky-ui",
        },
        rollupOptions: {
            external: ["react"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
    server: {
        port: 4000,
        open: "demo.html",
    },
    plugin: [react()],
});
