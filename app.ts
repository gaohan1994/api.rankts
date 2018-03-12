import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import routes from "./controller";

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    const start = new Date().getTime();
    await next();
    const execTime = new Date().getTime() - start;
    ctx.response.set("X-Response-Time", `${execTime}ms`);
});

app.use(bodyParser());

app.use(routes.routes());

app.listen(3000);

console.log("server run at port 3000");