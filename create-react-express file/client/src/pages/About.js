import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import { Grid, Col, Row, Image} from "react-bootstrap";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const About = () => (
  
    
    <div>

<Navbar/>
<Grid>
  <Row>
    <Card>
  <Col xs = {6}md = {4}>
  <Image src = "/thumbnail.png"rounded />
  </Col> 
  </Card>
  </Row> 
      <Row>
        <Col size="md-12">
          <h1>Welcome Fueled 4 Life!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Fueled 4 Life is a group of dedicated women that come together
            weekly to foster community, accountability and to engage in a
            great work - out designed
            for all fitness levels.If you are
            seeking encouragement, accountability and a community
            for fitness or nutrition, then Fuel 4 Life is a great place
            for you! 
          </p>
        </Col>
        


      </Row>
    </Grid>
  </div>
);

export default About;
