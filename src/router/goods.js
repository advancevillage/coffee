//@author: richard
const RouterService = require('koa-router');
const router = new RouterService();
const g = require('../controller/goodsController');

router
    .get('/', async (ctx, next) => {
        let qs = ctx.query;
        let cat_id  = qs["cat"]  ? qs["cat"]  : 1;
        let page_id = qs["page"] ? qs["page"] : 1;
        let params = await g.Wrapper(cat_id,page_id);
        await ctx.render('goods', {params});
    });

module.exports = router;

