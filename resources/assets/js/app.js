
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
import React from 'react';
import LayoutMain from './components/layouts/LayoutMain';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <LayoutMain>
        </LayoutMain>
    </MuiThemeProvider>,
    document.getElementById('app')
);