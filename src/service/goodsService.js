//@author: richard
const RequestService = require('koa2-request');

const TitleProcessor =  async () => {
    return "乐淘淘";
};

const NavigateProcessor = async (cat_id,page_id) => {
    const options = {
        uri : "http://localhost:13147/",
        method: 'GET',
        qs: {
            cat: cat_id,
            page: page_id
        },
        headers: [
            'content-type: application/json; charset=utf-8'
        ]
    };
    let response =  await  RequestService(options);
    let ret = JSON.parse(response.body);
    return ret.data.navigate
};

const ListGoodsProcessor = async (cat_id,page_id) => {
    const options = {
        uri : "http://localhost:13147/goods/",
        method: 'GET',
        qs: {
            cat: cat_id,
            page: page_id
        },
        headers: [
            'content-type: application/json; charset=utf-8'
        ]
    };
    let response =  await  RequestService(options);
    let ret = JSON.parse(response.body);
    return ret.data
};

module.exports = {
    TitleProcessor,
    NavigateProcessor,
    ListGoodsProcessor
};
