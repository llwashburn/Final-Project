
import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";




const Home = () => (
    <div>
      <Navbar/>
      < Hero backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxh4FlTPS1yQ5i6wrwWlnSc2VzOhaK5Q4ggQIl1q0M4pdZokteg" >
        {/* <h1 id="welcome">Fuel 4 Life!</h1>
        <h2 id="welcome">Start your journey</h2>
       */}
        </Hero>
        <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
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
        

       
       