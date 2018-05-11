import React, {
  Component
} from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Form from "../components/Form.js";



class Contact extends Component {
  render() {
    return ( 
      <div>
      <Navbar />
      <hr className = "row featurette-divider"/>
      <div className = "container"id ="contactbackground">
      <div className = "row featurette contact" >
      <h2 className = "featurette-heading"> Contact </h2> 
      <p className = "lead" > If you would like to know more about Fuel 4 Life please send me an message through email or social media.
      <br/>
      I will get back to you as soon as I can.
      <br/>
      <br/>
      Thank you!
      <br/>
      <br/>
      <div id="signature">Elizabeth</div>
</p>
      
  

      </div>
     
      
    
      <Form/> 
      
      
      </div> 
      <Footer/>
      
      </div>
    );
    }
  }

  export default Contact;