import React, { useContext, useState } from 'react'
import './Login.css'
import { UserContext } from './UserContext'
function Login() {
    const [user, setUser] = useContext(UserContext);
    const [logged,setLogged] = useContext(UserContext);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) =>{
        e.preventDefault();
       if(userName===user.username){
           console.log('success');
       }else{
           console.log('error');
       }
    }
    return (
        <div className="Login">
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
