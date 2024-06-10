import React from 'react'
import './HalamanRegister.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



export default function HalamanRegister() {


    const navigate = useNavigate();
  return (
    <div>
        <div className='register-container'>
        <div className='header'>

        <div className='register-back-landing'>
        <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        </div>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>

        <div className='inputs'>
            <div className='input'>
            <FontAwesomeIcon icon={faUser} />
                <input type='text' placeholder='Name'/>
            </div>

            <div className='input'>
            <FontAwesomeIcon icon={faEnvelope} />
                <input type='email' placeholder='Email'/>
            </div>

            <div className='input'>
            <FontAwesomeIcon icon={faKey} />
                <input type='password' placeholder='Password'/>
            </div>
        </div>

        <div className='submit-container'>
            <button className='submit'>Sign Up</button>
            
        </div>
        </div>
    </div>
  )
}

