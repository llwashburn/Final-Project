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
      <hr className = "row featurette-divider"/>
      <div className = "container" >
      <div className = "row featurette">
      <div className = "col-md-7" >
      <h2 className = "margin-center featurette-heading"> Fitness </h2>  
      <p className = "lead"> Fitness and muscle training are important assets to one’ s life.Striving and achieving the most our of your body in a physical way reaps energy, confidence, strength and better overall physical health.Adding community to this journey HIT exercises and change of scenery creates an amazing environment to get fit and in shape.Challenging and stretching your body to the uncomfortable breeds results and becomes a lifestyle habit. 
      </p> 
      </div>
      <div className = "col-md-5" >
      <img className = "picture-padding thumbnail featurette-image img-responsive center-block"
      src = "https://cdn8.dissolve.com/p/D1246_54_003/D1246_54_003_0004_600.jpg"
      alt = "Generic placeholder image"/>

      </div>
      </div>
      </div>
      
      
    
      

      
      <div className = "new-background">
      <div className = "container">
      <div className = "row featurette">
<div className = "col-md-7">
  <img className = "picture-padding thumbnail featurette-image img-responsive center-block"
src = "https://www.parentparcel.com/wp-content/uploads/2017/01/groupfitness-banner.jpg"
alt = "Generic placeholder image" />
</div>
      <div className = "col-md-4">
      <h2 className = "margin-center featurette-heading"> Fitness Program </h2>  
      <p className = "lead">There is a fitness program for everyone. Fuel 4 Life Fitness currenlty meets three
      days a week in an outside setting. The programs includes a variety of workouts ranging from Aeorbic, Strength Training, Balance and Flexibilty.
      Contact me through social media links or email if interested in learning more about the fitness program or to schedule </p>  
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