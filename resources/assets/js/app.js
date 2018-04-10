
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
import React, {Component} from 'react';
import LayoutMain from './components/layouts/LayoutMain';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";

injectTapEventPlugin();

class App extends Component {
    constructor (props){
        super(props);
        this.Auth = new AuthService();
    }

    render() {
        if (this.Auth.loggedIn()) {
            return (
                <Router>
                    <div>
                        <div>
                            <LayoutMain>
                            </LayoutMain>
                        </div>
                    </div>
                </Router>
            )
        } else {
            return  <Router><Switch><Route path="/login" component={Login} replace /><Redirect to={"/login"} /></Switch></Router>;
        }
    }
}

ReactDOM.render(<App />,document.getElementById('app'));