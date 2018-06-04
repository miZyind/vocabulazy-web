// Type definitions for koa-webpack 5.x
// Project: https://github.com/shellscape/koa-webpack#readme
// Definitions by: Luka Maljic <https://github.com/malj>
//                 Lee Benson <https://github.com/leebenson>
//                 miZyind <https://github.com/miZyind>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'koa-webpack' {
    import { Middleware } from 'koa';
    import { Compiler, Configuration } from 'webpack';
    import * as webpackDevMiddleware from'webpack-dev-middleware';
    import * as webpackHotClient from'webpack-hot-client';

    function koaWebpack(
        options?: Options
    ): Promise<Middleware & CombinedWebpackMiddleware>;

    interface Options {
        compiler?: Compiler;
        config?: Configuration;
        devMiddleware?: webpackDevMiddleware.Options;
        hotClient?: webpackHotClient.Options | boolean;
    }

    interface CombinedWebpackMiddleware {
        devMiddleware: webpackDevMiddleware.WebpackDevMiddleware;
        hotClient: {
            close: () => void;
            options: webpackHotClient.Options;
            server: any;
        };
    }

    export = koaWebpack;
}
