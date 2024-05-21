import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "/@": path.resolve(__dirname, "src"),
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
          dev: {
            logLevel: ["error"],
          },
        },
      }),
      svgr({
        exportAsDefault: true,
      }),
    ],
    server: {
      proxy: {
        "/api": {
          target: "http://124.223.178.41:8001",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""), // 不可以省略rewrite
        },
      },
    },
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
  };
});
