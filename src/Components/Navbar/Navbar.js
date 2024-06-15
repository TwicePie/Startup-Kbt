import React, { useState } from 'react';
import './Navbar.css';
import Vector from '../Assets/Vector.png';
import hand from '../Assets/hand.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGlobe, faX } from '@fortawesome/free-solid-svg-icons';
import Model from "react-modal";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const handleSignUpClick = () => {
    window.location.href = '/#login';
  };

  return (
    <div className='navbar'>
      <div className="nav">
        <div className="nav-logo">
          <p>CariSta</p>
          <img src={Vector} alt='' width='40px' height='40px'/>
        </div>

        <div className="nav-world">
          <FontAwesomeIcon icon={faGlobe} />
          <p>English</p>
        </div>
        <div className="nav-login">

        <a className="about-link" href='/#dashboard'>
        <button className='homebutton' >Home</button>
        </a>

        <a className="about-link" href='/#about'>
        <button className='aboutbutton' >About Us</button>
        </a>

          <button className='login-button' onClick={handleSignUpClick}>Sign In</button>
          <Model 
            className="model" 
            isOpen={visible} 
            onRequestClose={() => setVisible(false)} 
            style={{
              content: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px",
              }
            }}
          >
            <button className="close-button" onClick={() => setVisible(false)}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <h1>Sign Up</h1>
            <p>Don’t have an account? Sign in <a className="register-link" href='/#register'>here</a></p>
            <input type="text" className="login-input" placeholder="Email" name="email" required /><br /><br />
            <input type="password" className='login-input' placeholder="Password" name="psw" required /><br /><br />
            <button className="button-13" role="button">Sign In</button>
          </Model>
          <a className="register-link" href='/#register'>
            <button className='register-button'>Join Us</button>
          </a>
        </div>
      </div>

      <div className="slogan">
        <h1>Find the right startup,<br /> the right way</h1>
      </div>

      <div className='flex-container'>
      <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

      <div className="jumbotron">
        <img src={hand} alt='' widhth='850' height='850'/>
      </div>

      </div>
    </div>
  );
}
