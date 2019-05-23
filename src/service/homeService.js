/**
 * homeService
 */
const RequestService = require('koa2-request');

const TitleProcessor =  async () => {
    const options = {
        uri : "http://localhost:13147/",
        method: 'GET',
        headers: [
            'content-type: application/json; charset=utf-8'
        ]
    };
    let response =  await  RequestService(options);
    let title = JSON.parse(response.body);
    return title.data;
};

const ListGoodsProcessor = async () => {
    return [{title:"文章1"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},
            {title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},
            {title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},
            {title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"}];
};

module.exports = {
    TitleProcessor,
    ListGoodsProcessor
};
