/**
 * 主路由模块
 */
const RouterService = require('koa-router');
const main_router = new RouterService();
const home_router = require('./home');

main_router
    .use('/', home_router.routes(), home_router.allowedMethods());

module.exports = main_router;
