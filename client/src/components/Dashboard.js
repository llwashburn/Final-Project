import React, {
    Component
} from "react";
import Proptypes from "prop-types";
import { Button} from "react-bootstrap";
import Schedule from "../components/Schedule.js";
import {Link} from 'react-router-dom';
import  Navbar  from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import LiabilityForm from "../components/LiabilityForm.js";
import Payment from "../components/Payment.js";

const Dashboard = ({ secretData, user}) => (
 
    <div>
      <Navbar/>

<div className="container">
	<div className="row"> 
  <div className="col-md-7 ">

<div className="panel panel-default">
  <div className="panel-heading">  <h4 >User Profile</h4></div>
   <div className="panel-body">
       
    <div className="box box-info">
        
            <div className="box-body">
            <div className="col-sm-6">
              <div  align="center"> <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive"/> 
                
                <input id="profile-image-upload" className="hidden" type="file"/>
                <div>click here to change profile image</div>
     
              </div>
              <br/>
            </div>
            <div className="col-sm-4">
       <h4>User Name</h4>
              <span><p>Fitness Client</p></span>            
            </div>
            <div className="clearfix"></div>
           
              
<div className="col-sm-6 col-md-6 tital ">First Name:</div><div className="col-sm-7 col-xs-6 ">user name</div> <i className="fa fa-edit"></i>
     <div className="clearfix"></div>
<div className="bot-border"></div>

< div className = "col-sm-6 col-md-6 tital "> Middle Name: </div><div className="col-sm-7"> incomplete</div><i className ="fa fa-edit"> </i>
  <div className="clearfix"></div>
<div className="bot-border"></div>

< div className = "col-sm-6 col-sm-6 tital "> Last Name: </div><div className="col-sm-7"> incomplete</div > <i className="fa fa-edit"></i>
  <div className="clearfix"></div>
<div className="bot-border"></div>

<div className="col-sm-5 col-md-6 tital ">Date Of Joining:</div><div className="col-sm-7">date account create</div> <i className="fa fa-edit"></i>

  <div className="clearfix"></div>
<div className="bot-border"></div>

< div className = "col-sm-5 col-md-6 tital "> Date Of Birth: </div><div className="col-sm-7">incomplete</div > <i className="fa fa-edit"></i>

  <div className="clearfix"></div>
<div className="bot-border"></div>

<div className="col-sm-5 col-md-6 tital " >Emergency Contact Name:</div><div className="col-sm-7">incomplete</div> <i className="fa fa-edit"></i>

 <div className="clearfix"></div>
<div className="bot-border"></div>

<div className="col-sm-5 col-md-6 tital " >Emergency Contact Number:</div><div className="col-sm-7">incomplete</div> <i className="fa fa-edit"></i>

<div className="clearfix"></div>
<div className="bot-border"></div>

<div className="col-sm-5 col-md-6 tital ">LIABILITY FORM:</div>
<LiabilityForm/>

 <div className="clearfix"></div>
<div className="bot-border"></div>

<div className="col-sm-5 col-md-6 tital">SCHEDULE A CLASS</div>
<Schedule/>

<div className="clearfix"></div>
<div className="bot-border"></div>

<div className="col-sm-5 col-md-6 tital">PAY FOR A CLASS</div>
{/* <Payment/> */}


<div className="clearfix"></div>
<div className="bot-border"></div>


< div className = "bot-border" > </div>
<Link to ={"/logout"}><Button bsStyle="default" active type="submit">LOGOUT</Button></Link>
          
          </div>
        </div>    
    </div> 
    </div>
</div>  
   </div>
    </div>
    <Footer/>
    </div>
);
    


export default Dashboard;
