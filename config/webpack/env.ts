// Version
import packageInfo from '../../package.json';
// TSConfig
import tsconfig from '../../tsconfig.json';

const env = {
  appName: 'VocabuLazy',
  appVersion: packageInfo.version,
  appProtocol: 'http',
  appHost: 'localhost',
  appPort: 3500,
  appPath: '/',
  tsCompilerOptions: tsconfig.compilerOptions
};

export default env;
