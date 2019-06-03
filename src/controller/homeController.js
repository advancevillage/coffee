/**
 * homeController
 */
const hm = require("../service/homeService");

const Wrapper =  async  (cat_id,page_id) => {
    const params = {};
    params.title    = await hm.TitleProcessor();
    params.navigate = await hm.NavigateProcessor(cat_id,page_id);
    params.goods    = await hm.ListGoodsProcessor(cat_id,page_id);
    return params;
};

module.exports = {
    Wrapper
};

