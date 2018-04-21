// Config
declare module '*package.json';
declare module '*tsconfig.json';
// Webpack plugin
declare module '*webpack-plugin';
declare module 'webpack-node-externals';
// Other
declare module 'koa-webpack';

type PropsUnion<S = {}, D = {}, O = {}> = {
  State: S;
  Dispatch: D;
  Own?: O;
};

type Subset<P extends PropsUnion> = P['State'] & P['Dispatch'] & P['Own'];
