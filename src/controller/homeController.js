/**
 * homeController
 */
const hm = require("../service/homeService");

const Wrapper =  async  (cat_id) => {
    const params = {};
    params.title = await hm.TitleProcessor();
    params.navigate = await hm.NavigateProcessor(cat_id);
    params.goods_items = await  hm.ListGoodsProcessor();
    return params;
};

module.exports = {
    Wrapper
};

