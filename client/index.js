import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
//eslint-disable-next-line no-unused-vars
import css from './scss/index.scss';

render(
  <Provider store={configureStore()} >
    <App />
  </Provider>,
  document.getElementById('root')
);
