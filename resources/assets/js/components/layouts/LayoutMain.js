import React, {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import UserIndex from "../users/Index";
import DashBoard from "../dashboard/DashBoard";
import NotFound from "../errors/NotFound";
import { Switch, Route, Redirect } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AuthService from "../auth/AuthService";

class LayoutMain extends  Component {
    constructor(){
        super();
        this.Auth = new AuthService();
    }

  render(){
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={DashBoard} />
                            <Route path="/users" component={UserIndex} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        )
  }
}
export default LayoutMain;