import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import homePage from './homePage';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const app = document.getElementById('root')

const Routes = () => {
  return (
      <div></div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/homepage" component={homePage} />

      </Switch>
    </Router>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
