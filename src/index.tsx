import React from 'react';
import App from './app/layout/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

