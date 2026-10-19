import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      // When you run "npm run dev", borrow the live status from the real site
      // so the project cards work on your PC too. Only affects dev, not the build.
      proxy: {
        "/api/status": { target: "https://kasperpackford.ca", changeOrigin: true },
      },
    },
  },
});
