import React, { useState } from 'react';
import './HalamanRegister.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function HalamanRegister() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/kbt_stratup', values)
        .then(res => {
            console.log("register success!!");
            // Setelah berhasil registrasi, arahkan ke halaman landing (misalnya '/')
            navigate('/');
        })
        .catch(err => console.log(err));
    };

    return (
        <div className='register-container'>
            <div className='header'>

            <div className='register-back-landing'>
        <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        </div>

                <h2 className='text'>Sign-Up</h2>
                <div className='underline'></div>
            </div>
            <form className='inputs' onSubmit={handleSubmit}>
                <div className='input'>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" placeholder='Enter Name' name='name' className='form-control' onChange={handleChange}/>
                </div>
                <div className='input'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="email" placeholder='Enter Email' name='email' className='form-control' onChange={handleChange}/>
                </div>
                <div className='input'>
                    <FontAwesomeIcon icon={faKey} />
                    <input type="password" placeholder='Enter Password' name='password' className='form-control' onChange={handleChange}/>
                </div>
                <div className='submit-container'>
                    <button type='submit' className='submit'>Sign up</button>
                </div>
                <p className='signup-text'>
                    Already have an account? Login <a href="#login">here</a>
                </p>
            </form>
        </div>
    );
}
