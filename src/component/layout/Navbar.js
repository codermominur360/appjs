import React from 'react'
import {BrowserRouter as Router ,Link} from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


const Navber = ()=>{
    return(
        <>
           <nav class="navbar navbar-dark bg-primary">
            <a class="navbar-brand">Navbar</a>
            <ul className="navbar-nav">
                <SignedIn/>
                <SignedOut/>
            </ul>    
            </nav>
        </>
    )
}
export default Navber;