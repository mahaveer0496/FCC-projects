import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.scss';
import App from './components/App';
import store from './redux/reducer';

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'),
);
