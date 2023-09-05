import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Unimport from "unimport/unplugin";

export default defineConfig({
    plugins: [
        solidPlugin(),
        Unimport.vite({
            dts: "./src/unimport.d.ts",
            presets: ["solid-js"],
        }),
    ],
    server: {
        host: true,
        port: 3000,
    },
});
