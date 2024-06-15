import React, { useState } from 'react';
import './HalamanLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function HalamanLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email, password})
        .then(res => {
            if(res.data === "Login Success") {
                // Jika login berhasil, arahkan ke #dashboard
                window.location.href = '#dashboard';
            } else {
                console.log("Login gagal");
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='login-container'>
            <div className='header'>

            <div className='login-back-landing'>
            <button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            </div>

                <h2 className='text'>Login</h2>
                <div className='underline'></div>
            </div>
            <form className='inputs' onSubmit={handleSubmit}>
                <div className='input'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="email" placeholder='Enter Email' name='email' className='form-control' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='input'>
                    <FontAwesomeIcon icon={faKey} />
                    <input type="password" placeholder='Enter Password' name='password' className='form-control' onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='submit-container'>
                    <button type='submit' className='submit'>Login</button>
                </div>
                <p className='signup-text'>
                    Doesn't have account? Sign up <a href="#register">here</a>
                </p>
            </form>
        </div>
    );
}
