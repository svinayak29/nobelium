import React from "react";
import { Link ,NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function SignUp () {
    const navigate = useNavigate()

    function handleSignUp() {
       
        alert("You have Registered!! now can Login")
        navigate('/home')
    } 

    return(
        <>
        
        <h2>This is SignUp page</h2>
        <input/>
        <input/>
        <button onClick={handleSignUp}>SignUp</button>
        <h3>Already Registered</h3>
        <NavLink  to="/login">Login With Link Tag</NavLink>
       



        </>
    )
}