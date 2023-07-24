import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { peerDependencies } from "./package.json";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" }), dts({ include: "src/**/*" })],
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      formats: ["es", "cjs"],
      fileName: (ext) => `index.${ext}.js`,
    },
    // Do not include the deps and peerDeps in the build
    // output.preserveModules - is for tree shaking
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: { preserveModules: true, exports: "named" },
    },
    target: "esnext",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
