import React, { useState } from 'react'
import './HalamanCreate.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function HalamanCreate() {
    const [nama_startup, setNamaStartup] = useState('');
    const [kategori, setKategori] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [foto, setFoto] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('nama_startup', nama_startup);
      formData.append('kategori', kategori);
      formData.append('deskripsi', deskripsi);
      formData.append('foto', foto);
  
      axios.post('http://localhost:8081/create_startup', formData)
        .then(response => {
          console.log(response.data);
          window.location.href = '#dashboard';
        })
        .catch(error => {
          console.error(error);
        });
    };
    return (
      <div>
        <div className='startup'>

        <div className='startup-header'>
            <h2 className='startup-text'>Daftarkan Startup</h2>
            <div className='startup-underline'></div>
            
        </div>
        <form className='startup-inputs' onSubmit={handleSubmit}>
                <div className='startup-input'>
  
                    <input type="text" placeholder='Enter Startup Name' name='nama_startup' className='form-control' onChange={(e) => setNamaStartup(e.target.value)}/>
                </div>
                <div className='startup-input'>
                    <select id="kategori" name="kategori" onChange={(e) => setKategori(e.target.value)}>
                        <option value="Health">Health</option>
                        <option value="Software">Software</option>
                        <option value="Social">Social</option>
                        <option value="Technology">Technology</option>
                    </select>
                </div>
                <div className='description-input'>
                    <textarea placeholder='Enter Startup Description' name='deskripsi' className='form-control' onChange={(e) => setDeskripsi(e.target.value)}>

                    </textarea>
                </div>
                <div className='file-input'>
                    <input type='file' name='foto' onChange={(e) => setFoto(e.target.files[0])}/>
                </div>
                <div className='submit-container'>
                    <button type='submit' className='submit'>Create Startup</button>
                </div>
            </form>
        </div>
      </div>
    );
  }
  
 