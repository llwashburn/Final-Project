import React from "react";
import {Link} from "react-router-dom";
import "./index.css";


const Navbar = props => (
  
  
       <nav className="navbar navbar-light container-fluid">

       
                  
                  
                  <Link className = "navbar-header"
                    to ="/">Fuel 4 Life </Link>
                
                
                <ul className="nav navbar-nav">
                  <li className={window.location.pathname === "/about" ? "active" : ""}>
                    <Link to="/about">About</Link>
                  </li>

                  <li className={window.location.pathname === "/fitness" ? "active" : ""}>
                    <Link to="/fitness">Fitness</Link>
                  </li>

                  <li className={window.location.pathname === "/health" ? "active" : ""}>
                    <Link to="/health">Health</Link>
                  </li>             

                  <li className={window.location.pathname === "/contact" ? "active" : ""}>
                    <Link to="/contact">Contact</Link>
                  </li>


                  <li className={window.location.pathname === "/testimonal" ? "active" : ""}>
                    <Link to="/testimonial">Client Love</Link>
                  </li>
                
                <li className={window.location.pathname ==="/loginpage" ? "active" : ""}>
                <Link to ="/loginpage">Login</Link>
                </li>

                <br/>

                  
                </ul>
              
          </nav>
    
)

export default Navbar;
