import React from "react";
import './Register.css'
export default function Register () {

    function Done () {
        alert('Successfully Registered')
    }
    return(
        <div className="container"> 
            
            <input type={Text} placeholder="Email" /> <br/>
        <br/>
        <input type={Text} placeholder="username" />  <br/>
        <br/>
 
        <input type={Text} placeholder="password" />  
        <button className="button" onClick={Done}>Register</button>
        
        </div>
        
       
        
    )
}