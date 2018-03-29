
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import LayoutMain from './components/layouts/LayoutMain';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import DashBoard from './components/dashboard/DashBoard';
import UserIndex from './components/users/Index';


injectTapEventPlugin();
ReactDOM.render(
    <MuiThemeProvider>
        <LayoutMain>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={DashBoard}/>
                    <Route exact path="/users" component={UserIndex}/>
                </Switch>
            </BrowserRouter>
        </LayoutMain>
    </MuiThemeProvider>,
    document.getElementById('app')
);
