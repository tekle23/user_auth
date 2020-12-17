import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import './Nav.css';
import {UserContext} from './UserContext';
function Nav() {
  const [logged,setLogged] = useContext(UserContext);
    return (
       
        <div className="NavContainer">
        <div className="NavLeft">
            
          <h2>Blog</h2> 
          
        </div>
        <div className="NavCenter">
        
        <Link to = "/" exact> Home</Link>
      {logged ? (
        <div className="dashboard">
         <Link to="/dashboard"> <h3>Dashboard</h3> </Link>
          <h3 onClick={()=>setLogged(false)}>logout</h3>
          </div>
      ):(
        <div>
         
         <Link to = "/login">Login</Link>
         <Link to = "/register"> Register </Link>
         </div>
      )}
         
         
          
        
        
         
        </div>        
        </div>       
    )
}

export default Nav
