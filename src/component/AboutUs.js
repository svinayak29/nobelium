import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs () {
    const navigate = useNavigate()

    function clicked() {


       
        navigate('/login')
       
    }

    function registered () {
        navigate ('/register')
    }



    return(
        <>
        
        <h1>About Us</h1>
       
        <button onClick={clicked}>Login</button>
        <button onClick={registered}>Register</button>

        <img src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSqKuVvlbxGMi9XNOucHAgBFfpmzDGPVVl8_uxIMndHB08AZpWrPvLS9p60YtYNKwPUUuvYi6hA9D8k_fs"/>
        
        <p>Hrithik Roshan</p>
        <p>Location : India</p>



          

        </>
    )
}