/**
 * 子路由: /
 */
const RouterService = require('koa-router');
const router = new RouterService();
const hc = require('../controller/homeController');

router
    .get('', async (ctx, next) => {
        let params = await hc.Wrapper();
        await ctx.render('home', {params});
    });

module.exports = router;





