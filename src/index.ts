import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import Home from "./controllers/home";


const serve_config = {
    port: 3000,
    hostname: '0.0.0.0'
};

const app = new Elysia()
    .use(html())
    .get("/", Home)
    .get("/api/v1/hello-world", () => "<h1>Hello World!</h1>")
    .listen(serve_config);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
