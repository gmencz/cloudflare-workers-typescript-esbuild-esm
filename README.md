# Cloudflare Workers Typescript esbuild ESM template

A Cloudflare Workers template for using:

- TypeScript
- Esbuild
- Durable Objects
- Jest
- Workers ESM syntax
- Wrangler

Worker code is in `src/`. The Durable Object Counter class is in `src/counter.ts`, and the eyeball script is in index.ts.

Esbuild is configured to output a bundled ES Module to dist/index.mjs.

There's an example unit test in `src/index.test.ts`, which will run as part of wrangler build. To run tests on their own use npm test.

On your first publish, you must use `wrangler publish --new-class Counter` to allow the Counter class to implement Durable Objects.
