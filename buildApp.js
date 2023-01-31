import { build } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export const buildApp = () => {
  build({
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};

buildApp()
