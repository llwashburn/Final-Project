import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import {Carousel} from "react-bootstrap";
// import Schedule from "./Schedule.js";
// import Payment from "./Payment.js";
// import Footer from "../components/Footer.js";
import FitnessProgram from "./FitnessProgram.js"



class Fitness extends Component {
    render() {
    return <div>
        <Navbar />
        <div className="container">
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="./images/group1.jpg" />
              <Carousel.Caption>
                <h3>Group 1</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="../components/..images/group2.jpg" />
              <Carousel.Caption>
                <h3>Group 2</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/images/blackwhite.jpg" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <h2>Fitness</h2>
          <p>
            Fitness and muscle training are important assets to one’s life.
            Striving and achieving the most our of your body in a physical
            way reaps energy, confidence, strength and better overall
            physical health. Adding community to this journey HIT exercises
            and change of scenery creates an amazing environment to get fit
            and in shape. Challenging and stretching your body to the
            uncomfortable breeds results and becomes a lifestyle habit.
          </p>

<div>
<FitnessProgram/>
</div>
</div>
<Footer/>
</div>

    }
  }




         
export default Fitness;
