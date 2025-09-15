import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        sveltekit(),
        tailwindcss(),
        paraglideVitePlugin({
            project: "./project.inlang",
            outdir: "./src/lib/i18n",
            strategy: ["url", "cookie", "baseLocale"],
        }),
    ],
});
