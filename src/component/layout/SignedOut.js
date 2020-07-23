import React from 'react'
import {NavLink } from 'react-router-dom'

const SignedOut=()=>{
    return(
        <>
            <li className="nav-item"><NavLink className="nav-link" to="/signin"> SignIn</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/signup"> SignUp</NavLink></li>
        </>
    )
}

export default SignedOut;