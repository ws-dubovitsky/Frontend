import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import reducers from "./reducers";
// const store = createStore(reducers, applyMiddleware(thunk));

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
