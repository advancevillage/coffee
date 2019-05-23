/**
 * homeController
 */
const hm = require("../service/homeService");

const Wrapper =  async  () => {
    const params = {};
    params.title = await hm.TitleProcessor();
    params.goods_items = await  hm.ListGoodsProcessor();
    return params;
};

module.exports = {
    Wrapper
};

