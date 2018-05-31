// Node module
import koaWebpack from 'koa-webpack';
// Config
import config from '../../../config/webpack/client/webpack.dev';

const hmrMiddleware = () => koaWebpack({
  config,
  dev: {
    logLevel: 'silent',
    publicPath: process.env.APP_PATH
  },
  hot: { logLevel: 'silent' }
});

export default hmrMiddleware;
