/**
 * 子路由: /
 */
const RouterService = require('koa-router');
const home_router = new RouterService();
const hc = require('../controller/homeController');

home_router
    .get('', async (ctx) => {
        let params = await hc.result();
        await ctx.render('home', {params});
    });

module.exports = home_router;





