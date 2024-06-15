import React from 'react'
import './HalamanAbout.css'
import Profile1 from '../Assets/Profile1.jpeg'
import Profile2 from '../Assets/Profile2.jpeg'
import Profile3 from '../Assets/Profile3.jpeg'
import Profile4 from '../Assets/Profile4.jpeg'


function HalamanAbout() {


    return (
        <div className='about'>
            <section className='team'>
                <div className='aboutcenter'>

   
        <h1>Our Team</h1>

                    
                </div>

                <div className='team-content'>
                    <div className='box'>
                        <img src={Profile1} alt=''/>
                        <h3>Naufal Ghifari Ramadhana</h3>
                        <h5>Front-End Developer</h5>
                    </div>

                    <div className='box'>
                        <img src={Profile2} alt=''/>
                        <h3>Muhammad Eka Nur Aried</h3>
                        <h5>Back-End Developer</h5>
                    </div>

                    <div className='box'>
                        <img src={Profile3} alt=''/>
                        <h3>Yogi Pratama Nusantara</h3>
                        <h5>Marketing Manager</h5>
                    </div>

                    <div className='box'>
                        <img src={Profile4} alt=''/>
                        <h3>Riyo Tri Adinata</h3>
                        <h5>Graphic Designer</h5>
                    </div>
                </div>

            </section>
        </div>
    )
  }

export default HalamanAbout