import { build } from "esbuild";

build({
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  format: "esm",
  outExtension: {
    ".js": ".mjs"
  },
  bundle: true
}).catch(() => process.exit(1));
