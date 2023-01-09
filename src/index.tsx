import React from 'react';
import App from './app/layout/App';
import { render } from 'react-dom';
import {  Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import { StoreProvider } from './app/context/StoreContext';
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';
// import { configureStore } from './app/store/configureStore';


//Old Method
//  const store = configureStore();
//console.log(store.getState());

 export const history = createBrowserHistory();


const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <Router history={history}>
      {/* <StoreProvider> */}
        <Provider store={store}>
        <App />
        </Provider>
      {/* </StoreProvider> */}
    </Router>
  </React.StrictMode>,
  rootElement
);

