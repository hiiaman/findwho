import React, {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import UserIndex from "../users";
import DashBoard from "../dashboard/DashBoard";
import NotFound from "../errors/NotFound";
import { Switch, HashRouter as Router, Route } from "react-router-dom";

class LayoutMain extends  Component {
  render(){
      return (
          <div >
            <Router>
                <div>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={DashBoard} />
                            <Route path="/users" component={UserIndex} />
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
          </div>
      )
  }
}
export default LayoutMain;