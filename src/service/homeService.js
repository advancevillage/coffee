/**
 * homeService
 */
const RequestService = require('koa2-request');

const TitleProcessor =  async () => {
    return "乐淘淘";
};

const NavigateProcessor = async () => {
    const options = {
        uri : "http://localhost:13147/",
        method: 'GET',
        qs: {
            cat: '1'
        },
        headers: [
            'content-type: application/json; charset=utf-8'
        ]
    };
    let response =  await  RequestService(options);
    let ret = JSON.parse(response.body);
    return ret.data.navigate
};

const ListGoodsProcessor = async () => {
    return [{title:"文章1"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},
            {title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},
            {title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},
            {title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"}];
};

module.exports = {
    TitleProcessor,
    NavigateProcessor,
    ListGoodsProcessor
};
