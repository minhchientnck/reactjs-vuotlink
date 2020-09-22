import React from 'react';
import {
  BrowserRouter, Route,
} from "react-router-dom";
import Login from './compoments/login';
import HomePage from './compoments/homepage';
import App from './App';

const Routers = props => (
  <BrowserRouter>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={HomePage} />
    <App />
  </BrowserRouter>
);

export default Routers;
