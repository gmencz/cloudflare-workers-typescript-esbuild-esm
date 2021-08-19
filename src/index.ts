import { isEven } from "./counter";

// In order for the workers runtime to find the class that implements
// our Durable Object namespace, we must export it from the root module.
export { Counter } from "./counter";

export default {
  async fetch(request: Request, env: Env) {
    try {
      let response = await handleRequest(request, env);
      return response;
    } catch (error) {
      return new Response(error.message, { status: 500 });
    }
  }
};

async function handleRequest(request: Request, env: Env) {
  let id = env.COUNTER.idFromName("A");
  let obj = env.COUNTER.get(id);
  let resp = await obj.fetch(request.url);
  let count = parseInt(await resp.text());
  let wasEven = isEven(count) ? "is even" : "is odd";
  return new Response(`${count} ${wasEven}`);
}

interface Env {
  COUNTER: DurableObjectNamespace;
}
