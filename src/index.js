import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './stylesheet/main.css'

import Episode from './views/episode';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/episode/:id' component={Episode}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
