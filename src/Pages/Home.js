import React from 'react'
import HomeNavbar from '../Components/HomeNavbar/HomeNavbar'
import HomeCategory  from '../Components/HomeCategory/HomeCategory'
import Startup from '../Components/HomeStartup/Startup'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <HomeNavbar/>
        <HomeCategory/>
        <Startup/>
        <Footer/>
    </div>
  )
}

export default Home;
