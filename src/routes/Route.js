/**
 * Created by roshane on 11/14/16.
 */
import React from 'react';
import {Route,IndexRoute,Redirect} from 'react-router';

import Home from './../components/Home';
import About from './../components/About';
import Album from './../components/Album';
import Layout from './../components/Layout';



let routes = (
    <Route>
        <Redirect from="/" to="/home"/>
        <Route name="home" path="/home" component={Layout}>
            <IndexRoute component={Home}/>
            <Route name="about" path="/about" component={About}/>
            <Route name="album" path="/album" component={Album}/>
        </Route>
    </Route>
);

module.exports = routes;
