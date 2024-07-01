import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SpecificStartup.css'

function SpecificStartup()  {
    const [startup, setStartup] = useState(null);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id_startup = params.get('id');
  
    useEffect(() => {
      console.log(`Fetching data for startup with id_startup: ${id_startup}`);
      fetch(`http://localhost:8081/startups/${id_startup}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Fetched data:', data);
          setStartup(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [id_startup]);
  
    if (!startup) {
      return <div>Loading...</div>;
    }

  return (
    <div>
        <div className='specific-startup-container'>
            <div className='images-category'>
            <img src={`http://localhost:8081/uploads/${startup.foto}`} />
            </div>

            <div className='startup-information'>
            <h1>{startup.nama_startup}</h1>
            <h2>Kategori: {startup.kategori}</h2>
            <p>{startup.deskripsi.split('\n').map((line, index) => (
        <span key={index}>{line}<br/></span>
      ))}</p>
            </div>

      </div>
    </div>
  );
};

export default SpecificStartup