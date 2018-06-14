import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import routes from "./src/router/index";
import * as mongoose from "mongoose";
import config from "./src/config/db";
import { Context } from "koa";
import * as cors from "koa2-cors";

const app = new Koa();

app.use(cors());

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

app.listen(1234);

console.log("server run at port 1234");

export default app;