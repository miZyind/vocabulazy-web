// Node module
import React from 'react';
import { render } from 'react-dom';
// Style
import '@styles/index.css';
import 'semantic-ui-css/semantic.min.css';
// Container
import App from '@containers/app';
// Env
const name = process.env.APP_NAME!;
const version = process.env.APP_VERSION!;

render(<App />, document.getElementById('root'));
