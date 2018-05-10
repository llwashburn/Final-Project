import React, {
  Component
} from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";



class Fitness extends Component {
  render() {
    return ( 
      <div>

      
      <Navbar/>



      <hr className = "row featurette-divider" />
      <div className = "container" >
      
      <div className = "row featurette">
      
      <div className = "col-md-7 col-md-push-5" >
      
      <h2 className = "margin-center featurette-heading"> Fitness </h2>  
      <p className = "lead"> Fitness and muscle training are important assets to one’ s life.Striving and achieving the most our of your body in a physical way reaps energy, confidence, strength and better overall physical health.Adding community to this journey HIT exercises and change of scenery creates an amazing environment to get fit and in shape.Challenging and stretching your body to the uncomfortable breeds results and becomes a lifestyle habit. 
      </p> 
      <div className = "col-md-5 col-md-pull-7" >

      
      <img className = "picture-padding thumbnail featurette-image img-responsive center-block"src = "../..img/"alt = "Generic placeholder image"/>

      
      </div>  
      </div>  
      </div> 
      </div>

      
      <div className = "new-background" >
      
      <div className = "container" >
      
      <div className = "row featurette" >
      
      <div className = "col-md-7" >
      
      <h2 className = "margin-center featurette-heading" > Fitness Program </h2>  
      <p className = "lead" > . </p>  
      </div>  
      <div className = "col-md-5" >
      
      <img className = "picture-padding thumbnail featurette-image img-responsive center-block"src = "img/ps4.jpg"
      alt = "Generic placeholder image" />

      
      </div>  
      </div>  
      </div>  
      </div> 
      <Footer/>
      </div>
    );
  }
}

export default Fitness;