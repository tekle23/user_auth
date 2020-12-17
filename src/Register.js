import React from 'react'
import './Register.css'
function Register() {
    const Register = (e) =>{
        e.preventDefault();
    }
    return (
        <div className="Register">
        <h3>Register</h3>
             <form className="form">
           
           <input name="name" type="text" placeholder="User Name" />
         
          
           <input name="password" type="password" placeholder="Password"/>
           
           <select name="role" >
            <option value="">select user role</option>
            <option value="admin">admin</option>
            <option value="writer">writer</option>
            <option value="editor">editor</option>
           </select>
         
          
           <button onClik={Register}>Register</button>
       </form>
        </div>
    )
}

export default Register
