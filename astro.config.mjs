// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
            paraglideVitePlugin({
                project: "./project.inlang",
                outdir: "./src/i18n",
            }),
        ],
    },

    integrations: [react()],
});
