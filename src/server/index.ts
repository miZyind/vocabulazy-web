// Node Module
import Koa from 'koa';
import url from 'url';
import path from 'path';
import serve from 'koa-static';
import logger from 'koa-logger';
// Lib
import pino from '#lib/logger';
// Middleware
import hmrMiddleware from './middleware/hmr-middleware';
// Env
const isDev = process.env.NODE_ENV === 'development';
const appName = process.env.APP_NAME;
const appVersion = process.env.APP_VERSION;
const appDist = process.env.APP_DIST;
const protocol = process.env.APP_PROTOCOL;
const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT;
const pathname = process.env.APP_PATH;
const address = url.format({ protocol, hostname, port, pathname });

const app = new Koa();

if (isDev) {
  app
    .use(logger())
    .use(hmrMiddleware());
} else {
  app
    .use(serve(appDist!));
}

app
  .use(async (ctx) => { ctx.redirect('/'); })
  .listen(port, () => pino.info(`${appName} v${appVersion} [Address] ${address} [Mode] ${isDev ? '⚙️' : '🌎'}`));
