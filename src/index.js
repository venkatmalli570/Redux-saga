import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";
import history from './history';
import { Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga  from "./sagas/saga";

import { routerMiddleware } from 'react-router-redux';

const  sagaMiddleware  =  createSagaMiddleware();
const  routersMiddleware  =  routerMiddleware(history);
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  

  const store = createStore(
    reducer,
  composeSetup(applyMiddleware(sagaMiddleware,routersMiddleware)),
  )

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
  document.getElementById("root")
);
