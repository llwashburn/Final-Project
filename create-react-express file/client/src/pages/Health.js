import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import {Thumbnail } from "react-bootstrap";
import { Grid } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

class Health extends Component {
  render() {
    return <div>
        <Navbar />

        {/* <Jumbotron title="" subtitle="" /> */}
        <div className="container">
          <h2>Health</h2>
          <p>
            Balanced health is a beautiful marriage between physical fitness
            and nutrition. Our body’s need both to have optimal health and
            well being, With Nutrition being 80%of the health journey it is
            critical that one hydrates with ample water and Fuels the body
            with nutrients that is going to wake the body up and ignite good
            health. Creating a lifestyle that fuels the body and releases
            endorphins by exercising, combined with motivation and
            perseverance will only produce positive results.
          </p>
          <p>
            I am proud supporter of Isagenix products....... Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived
            not only five
          </p>
        </div>
        <div className="container">
          <Grid />
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="image 1" src="/thumbnail.png" />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="image 2" src="/thumbnail.png" />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="image 3" src="/thumbnail.png" />
            </Col>
          </Row>
        </div>

        <Footer />
      </div>;
  }
}

export default Health;
