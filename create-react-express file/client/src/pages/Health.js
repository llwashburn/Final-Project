import React, {Component} from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";



class Health extends Component {
  render() {
    return ( 
      <div>
      
      <Navbar/>

      < hr className = "row featurette-divider"/>
      <div className = "new-background" >
      <div className = "container" >
      <div className = "row featurette" >
      <div className = "col-sm-7" >
      <h2 className = "margin-center featurette-heading"> Health </h2> 
      <p className = "lead">Balanced health is a beautiful marriage between physical fitness and nutrition.  Our body’s need both to have optimal health and well being,  With Nutrition being 80%of the health journey it is critical that one hydrates with ample water and Fuels the body with nutrients that is going to wake the body up and ignite good health. Creating a lifestyle that fuels the body and releases endorphins by exercising, combined with motivation and perseverance  will only produce positive results.</p> 
      </div> 
      <div className = "col-md-5" >
      <img className = "picture-padding thumbnail featurette-image img-responsive center-block"
      src = "https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&h=350"
      alt = "Generic placeholder image" />
      
      </div> 
      </div> 
      </div> 
      </div>

      
      <div className = "container">
      <div className = "row featurette">
      < div className = "col-sm-7" >
      < img className = "picture-padding thumbnail margin-center featurette-image img-responsive center-block"
      src = "http://www.isagenixhealth.net/wp-content/uploads/2016/08/DFShakeSpread640x400.jpg"
      alt = "Generic placeholder image" />
      </div>
      
       < div className = "col-md-4" >
      <h2 className = "margin-center featurette-heading">Isagenix</h2>
      <p className = "lead"> I am proud supporter of Isagenix products.......Lorem Ipsum is
        simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry 's standard dummy text ever
      since the 1500 s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book.It has survived
        not only five</p>
        </div>
       

 <div className = "col-sm-4 col-sm-push-1">
      <img className = "featurette-image img-responsive"
      src = "https://www.directsellingnews.com/wp-content/uploads/2018/03/2018-03-15a_News-1024x640.jpg"
      alt = "Generic placeholder image" />
      </div>
      </div> 
      </div> 
     
      


      <Footer/>
      </div>
    );
  }
}

export default Health;