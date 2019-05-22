/**
 * homeController
 */
const hm = require("../service/homeService");

const result =  async  () => {
    const params = {};
    params.title = await hm.Title();
    params.goods_items = await  hm.GoodsItems();
    return params;
};

module.exports = {
    result
};

