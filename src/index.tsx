import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Switch>
    <Route  exact path="/" component={SignUp} /> 
      <Route path="/home" component={App} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
