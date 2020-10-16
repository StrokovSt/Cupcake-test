require("@babel/polyfill");
import React from "react"
import {render} from "react-dom"
import {Provider} from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from "./js/redux/rootReducer.js"
import App from "./js/App.js"

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
 });

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById("root"))