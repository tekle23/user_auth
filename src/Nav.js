import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import './Nav.css';
import {UserContext} from './UserContext';
function Nav() {
   
    return (
       
        <div className="NavContainer">
        <div className="NavLeft">
            
          <h2>Blog</h2> 
          
        </div>
        <div className="NavCenter">
        
        <Link to = "/" exact> Home</Link>
      
          <h3>Dashboard</h3> 
         
         
          <div>
         
          <Link to = "/login">Login</Link>
          <Link to = "/register"> Register </Link>
          </div>
        
        
         
        </div>        
        </div>       
    )
}

export default Nav
