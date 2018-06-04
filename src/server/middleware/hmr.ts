// Node module
import { Middleware } from 'koa';
import koaWebpack from 'koa-webpack';
// Config
import config from '../../../config/webpack/client/webpack.dev';

let middleware: Middleware;

const hmrMiddleware = (): Middleware => {
  return async (ctx, next) => {
    if (!middleware) {
      middleware = await koaWebpack({
        config,
        devMiddleware: {
          logLevel: 'silent',
          publicPath: process.env.APP_PATH!
        },
        hotClient: { logLevel: 'silent' }
      });
    }
    return middleware(ctx, next);
  };
};

export default hmrMiddleware;
