const Koa = require('koa')
// const 
const bodyParser = require('koa-bodyparser')

const app = new Koa();

app.use(bodyParser())

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
})

app.listen(3000);

console.log('server at port 3000')