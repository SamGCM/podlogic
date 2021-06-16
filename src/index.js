import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './stylesheet/main.css'

import Episode1 from './views/episode1';
import Episode2 from './views/episode2';
import Episode3 from './views/episode3';
import Episode4 from './views/episode4';
import Episode5 from './views/episode5';
import Episode6 from './views/episode6';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/episode-1' component={Episode1}/>
      <Route path='/episode-2' component={Episode2}/>
      <Route path='/episode-3' component={Episode3}/>
      <Route path='/episode-4' component={Episode4}/>
      <Route path='/episode-5' component={Episode5}/>
      <Route path='/episode-6' component={Episode6}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
