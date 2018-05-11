import React, {Component} from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js"

class About extends Component {
  render() {
    return (
    <div>
    <Navbar/>
       <hr className = "row featurette-divider"/>
    <div className="container">
    <div className="row featurette">
    <div className="col-md-7">
    <h3 className="featurette-heading">Welcome to Fuel 4 Life!</h3>
    <p className = "lead"> 
    Fuel 4 Life is a group of dedicated women that come together
    weekly to foster community, accountability and to engage in a
    great work - out designed
    for all fitness levels.If you are
    seeking encouragement, accountability and a community
    for fitness or nutrition, then Fuel 4 Life is a great place
    for you! </p>

    <p className="lead">
        My goal is to educate, support and empower everyone I work with!I will provide all the motivation and information you need to create a wellness plan that works
        for your lifestyle.

        I am committed to helping people realize their own potential and achieve vibrant health! I take an integrative approach to wellness, with a comprehensive focus on nutrition, emotional balance, natural ways to relieve stress, and customized programs to support optimal health and well - being.

        Contact me today to schedule your COMPLIMENTARY CONSULTATION and
        let's get started! During this 30 minute phone session, I will answer all your questions and we will discuss how I can best support your goals.
<br/>
<br/>
         Elizabeth Ricks is a certified Fitness Coach, she graduated from Winthrop University with a B.S. in Physical Education.
         Ricks is the founder of Fuel 4 Life, formly known as PE4Moms, a trained nutritional consultant with Isagenix and the coordinator
         for LiveStrong Coastal Georgia.
    </p>
    </div>
    <div className="col-md-5">
    < img className = "featurette-image img-fluid mx-auto"
    alt = "500x500 bio"
    src = "https://s3.amazonaws.com/highfitness-media-library/wp-content/uploads/2016/07/29011354/Leslie-headshot-resize-e1499373479728-1.jpg"
    data-holder-render = "true" />
    </div>
    
   
    </div>
    </div>
    
    
<Footer/>
</div>
   
    );
  }
}

export default About;
