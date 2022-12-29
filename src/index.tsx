import React from 'react';
import App from './app/layout/App';
import { render } from 'react-dom';
import {  Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';



 export const history = createBrowserHistory();


const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);

