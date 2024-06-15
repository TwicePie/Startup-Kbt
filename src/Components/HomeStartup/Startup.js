import React from 'react'
import './Startup.css'
import startup1 from '../Assets/startup1.png'

function Startup() {
  return (
    <div>
      <div className='startup-container'>
 

      <div class="home-card">
      <a target='/health' href='/startup/reparin'>
          <img src={startup1} alt=''/>
        </a>
        <div class="home-container">
          <h2><b>Reparin</b></h2>
          <p>Category: Software</p>
          </div>
        </div>



      </div>

    </div>
  )
}
export default Startup;
