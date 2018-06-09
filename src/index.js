/*
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("basic-vertical-example")
);
registerServiceWorker();
*/

//GET RID OF react-router-redux AND USE WITHROUTER HOC AS SHOWN IN redux-integration
//https://reacttraining.com/react-router/web/guides/redux-integration
//https://github.com/reactjs/redux/blob/master/docs/advanced/UsageWithReactRouter.md
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
import store, { history } from './store';
import App from './containers/app';
//import registerServiceWorker from './registerServiceWorker';

import './index.css';
//https://redux.js.org/basics/usage-with-react
//https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
const target = document.querySelector('#root');
//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  target
);

//registerServiceWorker();
/*
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  target
)
*/
