import React from 'react'
import './Navbar.css'
import Vector from '../Assets/Vector.png'
import hand from '../Assets/hand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Model from "react-modal"
import { useState } from 'react'



export default function Navbar() {

  const [visible, setvisible]= useState(false)
  return (
    <div className='navbar'>
      <div className="nav">
      <div className="nav-logo">
        <p>GrowHatch</p>
            <img src={Vector} alt=''/>
        </div>
        <ul className='nav-menu'>
            <li><a href='/#dashboard'>Home</a></li>
            <li><a href='/#category'>Category</a></li>
            <li><a href='/#aboutus'>About</a></li>

        </ul>
        <div className="nav-world">
        <FontAwesomeIcon icon={faGlobe} />
            <p>English</p>
            </div>
            <div className="nav-login">
            <button onClick={()=>setvisible(true)}>Sign Up</button>
            <Model className="model" isOpen={visible} onRequestClose={()=>setvisible(false)} style={{
              content:{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px",

              }
            }}>
              <button className="close-button"onClick={()=>setvisible(false)}><FontAwesomeIcon icon={faX} /></button>
              <h1>Sign Up</h1>
              <p>Don’t have account ? sign in <a className="register-link" href='/#register'>here</a></p>

              <input type="text" className="login-input"placeholder="Email" name="email" required></input><br></br>
              <br></br>
              <input type="password" className='login-input' placeholder="Password" name="psw" required></input><br></br>

              <button class="button-13" role="button">Sign In</button>
            </Model>
            <a className="register-link" href='/#register'>
            <button className='register' >Join Us</button>
            </a>
            
        </div>
      </div>

      <div className="slogan">
      <h1>Find the right startup
        investors,<br></br> the right way</h1>
      </div>
      
      <div className="jumbotron">

   <div class="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" className="searchButton">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
     </button>
   </div>

   <img src={hand} alt=''/>
      </div>

    </div>
  )
}
