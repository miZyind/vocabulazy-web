// Node Module
import Koa from 'koa';
import { format } from 'url';
import serve from 'koa-static';
import koaLogger from 'koa-logger';
// Lib
import logger from '#lib/logger';
// Middleware
import hmrMiddleware from './middleware/hmr-middleware';
// Config
import config from './config';
// Env
const { isDev, build, name, version, connection } = config;
const { protocol, host, port, path } = connection;
const address = format({ protocol, hostname: host, port, pathname: path });
const printMsg = () => logger.info(`${name} v${version} [Address] ${address} [Mode] ${isDev ? '⚙️' : '🌎'}`);
// Init App
const app = new Koa();

if (isDev) {
  app
    .use(koaLogger())
    .use(hmrMiddleware());
} else {
  app
    .use(serve(build));
}

app
  .use(async (ctx) => ctx.status = 404)
  .listen(port, printMsg);
