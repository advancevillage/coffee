/**
 * homeService
 */
const request = require('koa2-request');

const Title =  async () => {
    let response =  await  request('http://localhost:13147/');
    let title = JSON.parse(response.body);
    return title.data;
};

const GoodsItems = () => {
    return [{title:"文章1"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},
            {title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},
            {title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},
            {title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"},{title:"文章2"}];
};

module.exports = {
    Title,
    GoodsItems
};
