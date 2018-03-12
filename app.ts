import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import routes from './controller';

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    let 
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

app.use(bodyParser());

app.use(routes.routes());

app.listen(3000);

console.log('server run at port 3000');