import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./App.css";

import{PrivateRoute, PropsRoute, LoggedOutRoute} from "./components/Routes";


import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Fitness from "./pages/Fitness.js";
import Health from "./pages/Health.js";
import Contact from "./pages/Contact.js";
import Testimonal from "./pages/Testimonial.js";

import LoginPage from './pages/LoginPage.js';
import LogoutFunction from './pages/LogoutFunction.js';
import SignUpPage from './pages/SignupPage.js';
import DashboardPage from './pages/DashboardPage.js';


import Auth from './utils/Auth';


class App extends Component {

state = {
  authenticated: false
}


componentDidMount() {
  //check if the user is logged in on refresh
  this.toggleAuthenticateStatus()
}


toggleAuthenticateStatus = () => {
  this.setState({authenticated: Auth.isUserAuthenticated()})
}

  render() {
    return <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/fitness" component={Fitness} />
          <Route path="/health" component={Health} />
          <Route path="/contact" component={Contact} />
          <Route path="/testimonial" component={Testimonal} />
          {/* <Route path="/loginpage" component={LoginPage}/> */}
          {/* <Route path="/signup" component={SignUpPage}/> */}

{/* <PropsRoute exactpath="/"component={ProfilePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/> */}
<PrivateRoute path="/dashboard" component={DashboardPage}/>
<LoggedOutRoute path="/loginpage" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
<LoggedOutRoute path="/signup" component={SignUpPage}/>
<Route path="/logout" component={LogoutFunction}/>

        </div>
      </Router>;
  }
}

export default App;




