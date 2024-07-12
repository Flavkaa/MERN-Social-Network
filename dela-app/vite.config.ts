import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import alias from "@rollup/plugin-alias";
import path, { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.API_URL": JSON.stringify(env.API_URL),
    },

    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "src/shared"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@widgets": path.resolve(__dirname, "src/widgets"),
        "@processes": path.resolve(__dirname, "src/processes"),
        "@app": path.resolve(__dirname, "src/app"),
      },
    },
    plugins: [react(), alias()],
  };
});
