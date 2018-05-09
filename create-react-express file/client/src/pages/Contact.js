import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Form from "../components/Form.js";
import {PageHeader} from "react-bootstrap";



class Contact extends Component {

  
  render() {
    return <div>
        <Navbar />
        <div className="container">
          <PageHeader>
            Contact Me
          </PageHeader>
          <div>
            <p>
              If you would like to know more about Fuel 4 Life please send me an message through email or social media.
              I will get back to you as soon as I can.
              Thank you!
            </p>
          </div>
          <div>
            <Form />
          </div>
        </div>
        <Footer />
      </div>;
    }
}

export default Contact;
