const Koa = require('koa')
const router = require('koa-router')();
const app = new Koa();
const controller = require('./src/controller.js')

router.get('/hello/:name', async(ctx, next) => {
    var name = ctx.params.name;
    ctx.body = `<h1>Hello ${name}!</h1>`
});

router.get('/', async(ctx, next) => {
    ctx.body = `<h1>Index</h1>`
});

app.use(controller());

app.listen(3000);

console.log('server run at port 3000');