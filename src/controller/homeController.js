/**
 * homeController
 */
const hm = require("../service/homeService");

const result =  () => {
    let params = {};
    params.title = hm.Title();
    params.goods_items = hm.GoodsItems();
    return params;
};

module.exports = {
    result
};

