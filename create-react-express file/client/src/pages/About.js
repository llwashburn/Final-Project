import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import { Grid, Col, Row, Image} from "react-bootstrap";
import Navbar from "../components/Navbar";

const About = () => (
  <div>
    < Navbar/>
    <div className="container">
    <hr className="row featurette-divider"/>
    <div className="row featurette">
    <div className="col-md-7">
    <h3 className="featurette-heading">Welcome to Fuel 4 Life</h3>
    <p className = "lead"> 
    Fueled 4 Life is a group of dedicated women that come together
    weekly to foster community, accountability and to engage in a
    great work - out designed
    for all fitness levels.If you are
    seeking encouragement, accountability and a community
    for fitness or nutrition, then Fuel 4 Life is a great place
    for you! </p>
    </div>
    <div className="col-md-5">
    <img className="featurette-image img-fluid
    mx-auto" alt ="500x500 bio" src="https://images.pexels.com/photos/34669/exercise-weight-woman-sport.jpg?auto=compress&cs=tinysrgb&h=350"data-holder-render="true"/>
    
    
    </div>
    </div>
    </div>
    </div>
    
   


);

export default About;
