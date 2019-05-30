/**
 * 子路由: /
 */
const RouterService = require('koa-router');
const router = new RouterService();
const hc = require('../controller/homeController');

router
    .get('', async (ctx, next) => {
        let qs = ctx.query;
        let cat_id = qs["cat"] ? qs["cat"] : 1;
        let params = await hc.Wrapper(cat_id);
        await ctx.render('home', {params});
    });

module.exports = router;





