import React from 'react'
import './Footer.css'
import Vector from '../Assets/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div>
        <div className="foot">
            <div className="foot-logo">
            <p>CariSta</p>
            <img src={Vector} alt='' width='40px' height='40px'/>
            </div>

            <div className="brand-link">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faGlobe} />
            <p>English</p>
            </div>

        </div>
    </div>
  )
}
