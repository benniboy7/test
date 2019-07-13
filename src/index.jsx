import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

window.APP_TITLE = document.title;

const container = document.createElement('div');
document.body.appendChild(container);

function renderApp(Component) {
  render(
`<div>test</div>`
  );
}

document.addEventListener('DOMContentLoaded', () => renderApp(App));

if (module.hot) {
  module.hot.accept('./components/App', () => renderApp(require('./components/App').default));
}
