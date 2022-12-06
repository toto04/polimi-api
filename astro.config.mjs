import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    site: "https://toto04.github.io",
    base: "/polimi-api",
});
