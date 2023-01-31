import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import timeReporter from "vite-plugin-time-reporter";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), timeReporter()],
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
