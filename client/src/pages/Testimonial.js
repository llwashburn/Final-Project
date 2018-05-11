import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { Panel, } from "react-bootstrap";
import "../index.css";



class Testimonial extends React.Component {
  render() {
    return (
    
    <div>
  
        <Navbar />
        < hr className = "row featurette-divider" />
        <div className = "container" >
          <div className = "row featurette" >
         <h2 className = "text-center featurette-heading" >Some Kind Words</h2>
         <div className="testimonial">
         <Panel>

          <Panel.Heading>Good Look at Lifestyle</Panel.Heading>
            <Panel.Body>
                "It’s amazing how working with a trainer has improved my
                attitude towards fitness and clears my mind to think
                creatively. I was someone that used to need to be “tricked
                into” exercise. Elizabeth Ricks has created an exercise
                program that fits my lifestyle (as well as many
                others). Elizabeth has a subtle approach to motivating
                individuals and she adjusts her style to help everyone
                progress at their own pace. She is careful, observant and
                motivating! Elizabeth has created a sense of “community”
                that I personally was seeking even though I didn’t realize
                it. I consider Elizabeth a friend and can say she is a woman
                of morals, character and integrity. She is honest dedicated
                and selfless at times. Elizabeth focuses on future and
                growth and she is supportive, encouraging and full of warmth
                and vitality." -- Sam McCormick
                </Panel.Body>
            
            
            <Panel.Heading>A New Healthier Me</Panel.Heading>
          <Panel.Body>
                "I was introduced to Isagenix years ago and have been so inspired by others success stories 
                that I finally started MY own journey in February of this year. I am thankful for God's timing 
                because I have made some lifelong friends that share the same nutrition and fitness goals. 
                I have lost 10 pounds and 20 total body inches in just two months! I have learned so much 
                about the importance of nutritional cleansing and have definitely noticed the benefits of 
                flooding my body with good nutrition!" -- Cody Daniel
             </Panel.Body>
          
          

          <Panel.Heading>Fuel 4EVER</Panel.Heading>
          <Panel.Body>
            "Fuel4Life and Isagenix has changed my life and my perspective on health for the better.
            Total transformation for me. I've lost inches in my waistline, I have more energy, my bloodpressure and cholestrol is at it's healthy best. 
            Thank you Elizabeth Ricks! I look forward to continuing my journey!"--Suzie Jones
             </Panel.Body>

             <Panel.Heading>Cleaner Health</Panel.Heading>
             <Panel.Body>
                "The IsaBody Challenge is all about the transformation not just the weight loss. I committed to adding nutritional cleansing 
                to my lifestyle and cannot be more pleased with the results. Do it for your health! Join Fuel 4 Life today." 
                --Lori Dixon
             </Panel.Body>
               
      </Panel>
      

</div>
</div>
</div>
</div>


                );
        <div>
        <Footer/>
        </div>
        
   
    
  }
}

export default Testimonial;
