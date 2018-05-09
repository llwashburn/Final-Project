
import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
// import FitnessProgram from "../pages/FitnessProgram";
// import Schedule from "../pages/Schedule";




const Home = () => (
    <div>
      <Navbar/>
      < Hero backgroundImage = "https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" >
        <h1>Welcome to Fuel 4 Life!</h1>
        </Hero>
        <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <h1></h1>
          </Col>
          </Row>
          <Row>
            <Col size="md-12">
       
        </Col>
        </Row>
        </Container>
        <Footer/>
        </div>
       
        
);

export default Home;
        

       
       