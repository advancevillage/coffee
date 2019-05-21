/**
 * KOAService:  koa 服务层
 */
const KOAService    = require('koa');
const ViewService   = require('koa-views');
const StaticService = require('koa-static');
const MountService  = require('koa-mount');
const PathService   = require('path');
const STATIC_DIR = StaticService(__dirname + "/src/static");

const app = new (KOAService);
const conf = require('./conf');
const routers = require('./src/router');


//配置静态资源加载中间件
app.use(MountService("/static", STATIC_DIR));

//配置服务端模板渲染引擎中间件
app.use(ViewService(PathService.join(__dirname, "./src/view"),{extension: "ejs"}));

//初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(conf.PORT);




