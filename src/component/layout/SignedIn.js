import React from 'react'
import {NavLink } from 'react-router-dom'

const SignedIn=()=>{
    return(
        <>
            <li className="nav-item"><NavLink className="nav-link" to="/createproject">Create Project</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to=""> Log Out</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/dashboard" className="btn btn-danger circle"> MM</NavLink></li>
        </>
    )
}
 

export default SignedIn