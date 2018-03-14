import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import routes from "./src/router/index";
import * as mongoose from "mongoose";
import config from "./src/config/db";
import { Context } from "koa";

const app = new Koa();

mongoose.connect(config.DB.mongo.uri);

// app.use(async (ctx: Context, next: any): Promise<void> => {
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     const start = new Date().getTime();
//     await next();
//     const execTime = new Date().getTime() - start;
//     ctx.response.set("X-Response-Time", `${execTime}ms`);
// });

app.use(bodyParser());

app
    .use(routes.routes())
    .use(routes.allowedMethods());

app.listen(3000);

console.log("server run at port 3000");

export default app;