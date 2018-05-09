import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { Grid, ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";
import "../index.css";



class Testimonial extends React.Component {
  render() {
    return (
    
    <div>
        <Navbar />
        <Grid/>
          <PageHeader>
            <h2>Client Love</h2>
          </PageHeader>
          
       
          <ListGroup>

          <ListGroupItem>
              <h4>Good Look at lifestyle</h4>
            <h4 className="testimonial pb-3 md-4 font-italic border-bottom">
            </h4>
              <p>
                It’s amazing how working with a trainer has improved my
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
                and vitality. -- Sam M.
              </p>
            </ListGroupItem>
            
            
            
            <ListGroupItem>
          <div className="row">
            <h4 className=" testimonial pb-3 md-4 font-italic border-bottom">
              A New Woman
            </h4>
              <p>
                "I was introduced to Isagenix years ago and have been so inspired by others success stories 
                that I finally started MY own journey in February of this year. I am thankful for God's timing 
                because I have made some lifelong friends that share the same nutrition and fitness goals. 
                I have lost 10 pounds and 20 total body inches in just two months! I have learned so much 
                about the importance of nutritional cleansing and have definitely noticed the benefits of 
                flooding my body with good nutrition!" - Cody Daniel
              </p>
          </div>
          </ListGroupItem>
          
          

          <ListGroupItem>
          <div className="row">
            <h3 className="testimonial pb-3 md-4 font-italic border-bottom">
              Testimonal 3
            </h3>
              <p>
                It’s amazing how working with a trainer has improved my
                attitude towards fitness and clears my mind to think
                creatively. I was someone that used to need to be “tricked
                into” exercise. Elizabeth Ricks has created an exercise
                program class that fits my lifestyle (as well as many
                others). Elizabeth has a subtle approach to motivating
              </p>
              </div>
               
               
              </ListGroupItem>
            </ListGroup>
            
       
      
        <Footer/>
        
       
      </div>
    );
  }
}

export default Testimonial;
