/**
 * Created by roshane on 11/14/16.
 */
import React from 'react';
import {Route,IndexRoute,Redirect} from 'react-router';

import Layout from './../components/Layout';
import About from './../components/About';
import Application from './../main/Application';
import Home from './../components/Home';

let routes = (
    <Route>
        <Redirect from="/" to="/home"/>
        <Route name="home" path="/home" component={Layout}>
            <IndexRoute component={Home}/>
            <Route name="about" path="/about" component={About}/>
        </Route>
    </Route>
);

module.exports = routes;
