import React, { useEffect, useState } from 'react'
import './Startup.css'
import { Link } from 'react-router-dom';

function Startup() {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/startups')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div className='startup-container'>
        

        {data.map((d, i) => (
        <div className="home-card" key={i}>
          <Link to={`/halamanstartup?id=${d.id_startup}`}>
              <img src={`http://localhost:8081/uploads/${d.foto}`} alt={d.nama_startup} />
            </Link>

          <div className="home-container">
            <h2>{d.nama_startup}</h2>
            <p>Kategori: {d.kategori}</p>

          </div>
        </div>
      ))}


      </div>

      

    </div>
  )
}
export default Startup;
