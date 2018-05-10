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

                  {/* <li>
                    <a href="https://www.facebook.com/groups/1700296396901242/" className="fa fa-facebook" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/befueled4life/" className="fa fa-instagram" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/isagenix" className="fa fa-pinterest" aria-hidden="true"></a>
                  </li> */}
                </ul>
              
          </nav>
    
)

export default Navbar;
