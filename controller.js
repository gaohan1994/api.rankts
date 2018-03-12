import * as fs from 'fs';

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            
        } else if (url.startsWith('POST ')) {

        } else {

        }
    }
};

function addControllers(router) {
    var files = fs.readdirSync(__dirname + '/controllers');
    var js_files = files.filter(f => f.endsWith('.js'));

    for (var f of js_files) {
        console.log(`process controller ${f}`);
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    }
};

export default function(router) {
    // const router = require('koa-router')();
    return addControllers(router);
    // return router.routes();
}

// module.exports = function(dir) {
//     const router = require('koa-router')();
//     addControllers(router);
//     return router.routes();
// };

