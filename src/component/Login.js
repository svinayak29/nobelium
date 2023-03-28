import React from "react";
import {Link, NavLink } from "react-router-dom";

export default function Login () {
    return(
        <>
        <input type={Text} placeholder="username"/> <br/>

        <br/>

        <input type={Text}  placeholder = "password" />

        <button>Login</button>

        <p>Don't have an account?</p>
        <NavLink to="/register">Register</NavLink>

        
        </>
    )
}