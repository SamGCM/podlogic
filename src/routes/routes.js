import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/home'

import Episode1 from '../views/episode1';
import Episode2 from '../views/episode2';
import Episode3 from '../views/episode3';
import Episode4 from '../views/episode4';
import Episode5 from '../views/episode5';
import Episode6 from '../views/episode6';


export default function Routes( ){
    return ( 
        <BrowserRouter>
            
            <Route path='/' exact component={Home}/>
            <Route path='/episode-1' component={Episode1}/>
            <Route path='/episode-2' component={Episode2}/>
            <Route path='/episode-3' component={Episode3}/>
            <Route path='/episode-4' component={Episode4}/>
            <Route path='/episode-5' component={Episode5}/>
            <Route path='/episode-6' component={Episode6}/>
        </BrowserRouter>
    )
}