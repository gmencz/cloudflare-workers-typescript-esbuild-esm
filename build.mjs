import { build } from "esbuild";

build({
  bundle: true,
  format: "esm",
  mainFields: ["browser", "module", "main"],
  platform: "neutral",
  target: "es2020",
  entryPoints: ["./src/index.ts"],
  outfile: "./dist/worker.mjs",
  sourcemap: false,
  charset: "utf8",
  minify: process.env.NODE_ENV === "production" ? true : false
}).catch(err => {
  console.error(err.stack);
  process.exitCode = 1;
});
