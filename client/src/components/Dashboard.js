import React from "react";
import Proptypes from "prop-types";
import {   ButtonToolbar, Modal, Button, Form, FormControl} from "react-bootstrap";
import Schedule from "../components/Schedule.js";
import LogoutFunction from "../pages/LogoutFunction.js";
import {Link} from 'react-router-dom';



const Dashboard = ({ secretData, user}) => (

  
    <div className ="container">
<div className="w3-col l8 s12">
  <div className="w3-card-4 w3-margin w3-white">
    <div className="w3-container">
      <h3><b>CLIENT PAGE</b></h3>
      <h5>Welcome to your page!<span class="w3-opacity">Today's Date</span></h5>
    </div>

    <div className="w3-container">
    <i class="fa fa-edit"></i>
      <p>Please complete the following fields to update your profile</p>
      <div className="w3-row">
        <div className="w3-col m8 s12">
          <p><button className="w3-button w3-padding-large w3-white w3-border"><b></b></button></p>
        </div>
        <div className="w3-col m4 w3-hide-small">
          <p><span className="w3-padding-large w3-right"><b></b> <span class="w3-tag"></span></span></p>
        </div>
      </div>
    </div>
  </div>





  < div className = "w3-card-4 w3-margin w3-white" >
 <i class="fa fa-calendar-o" ></i>
    <div className="w3-container">
      <h3><b>FITNESS CLASS SIGNUP</b></h3>
      <h5>Signup for a class Here <span class="w3-opacity"></span></h5>
    </div>
<Schedule/>
    <div class="w3-container">
      <p></p>
      <div className="w3-row">
        <div className="w3-col m8 s12">
          <p><button class="w3-button w3-padding-large w3-white w3-border"><b></b></button></p>
        </div>
        <div className="w3-col m4 w3-hide-small">
          <p><span className="w3-padding-large w3-right"><b> </b> <span class="w3-badge"></span></span></p>
        </div>
      </div>
    </div>
  </div>


   <div className="w3-card-4 w3-margin w3-white">
<i class="fa fa-money"></i>
    <div className="w3-container">
      <h3><b>PAY FOR A CLASS HERE</b></h3>
      <h5>Pay for a class Here <span class="w3-opacity"></span></h5>
    </div>

    <div class="w3-container">
      <p></p>
      <div className="w3-row">
        <div className="w3-col m8 s12">
          <p><button class="w3-button w3-padding-large w3-white w3-border"><b></b></button></p>
        </div>
        <div className="w3-col m4 w3-hide-small">
          <p><span className="w3-padding-large w3-right"><b></b> <span class="w3-badge"></span></span></p>
        </div>
      </div>
    </div>
  </div> 

     
        <Button href = "https://venmo.com/Leslie-Washburn-3">PAY HERE</Button>
          <Link to ={"/logout"}><Button bsStyle="default" active type="submit">LOGOUT</Button></Link>
      

  </div>
    </div>
);
    Dashboard.Proptypes= {
        secretData: Proptypes.string.isRequired
};


export default Dashboard;
