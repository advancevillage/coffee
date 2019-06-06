//@author: richard
const gs = require('../service/goodsService');

const Wrapper =  async  (cat_id,page_id) => {
    const params = {};
    params.title    = await gs.TitleProcessor();
    params.navigate = await gs.NavigateProcessor(cat_id,page_id);
    params.goods    = await gs.ListGoodsProcessor(cat_id,page_id);
    return params;
};

module.exports = {
    Wrapper
};
