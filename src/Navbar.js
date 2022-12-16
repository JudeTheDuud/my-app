import React from 'react'

export default function Navbar(){
    return(
        <nav>
      <div className="nav-wrapper">
        <img className="brand-logo left" alt = 'company logo'/>
        <ul id="nav-mobile" className="middle">
          <li><a href = "#">Home</a></li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">FAQ</a></li>
        </ul>
        <ul className = "right" id = "nav-mobile">
            <li><button>Register</button></li>
            <li><button id = 'login'>Log in</button></li>
        </ul>
      </div>
    </nav>
    )
}