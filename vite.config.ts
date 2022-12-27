import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const paths = [
  "assets",
  "hooks",
  "components",
  "contexts",
  "providers",
  "utils",
  "pages",
  "routes",
  "styles",
];

/**
 * Resolve alias pathing resulting in '@path: root/path' kind.
 */
const resolveAliases = (paths: string[]): { [alias: string]: string } =>
  paths.reduce(
    (acc, path) => ({
      ...acc,
      [`@${path}`]: resolve(__dirname, `src/${path}`),
    }),
    {}
  );

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      ...resolveAliases(paths),
    },
  },
  css: {
    modules: { localsConvention: "camelCaseOnly" },
  },
  plugins: [react()],
});
