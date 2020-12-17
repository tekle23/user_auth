import React, { useContext, useState } from 'react'
import { Redirect, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import './Login.css'
import { UserContext } from './UserContext'
function Login() {
    const [user, setUser] = useContext(UserContext);
    const [logged,setLogged] = useContext(UserContext);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) =>{
        e.preventDefault();
       setLogged(true);
        return (
            <Route
                path =
            {
                    logged ? (
                       
                             "/dashboard" 
                        
                    ) : (
                            "/login"
                        )
                }
                
            />
        )
           console.log('success');
       
    }
    return (
        <div className="Login">
        {logged ? (
        <Dashboard />
       ) : (
         <h3>Not Logged</h3>
       ) }
        <h2>Login</h2>
            
            <form className="form">
           
                <input value={userName} type="text" placeholder="User Name" onChange={(e)=>setUserName(e.target.value)} />             
                <input value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>              
               
                <button type="submit" onClick={login}>Login</button>
            </form>
        </div>
    )
}

export default Login
