import React from 'react'
import Profile from '../images/profile-img.JPG'
import Mail from '../images/mail.jpg'
import LinkedIn from '../images/linkedin.png'

export default function Info(){
    return (
        <div className="info-div">
            <img src={Profile} alt="Profile"/>
            <h1 className="name">Eshan C. Dangwal</h1>
            <h3 className="occ">Frontend Developer</h3>
            <a href="/" className="web">eshan.website</a>
            <div className="profile-buttons">
                <a href="mailto:eshandangwal9991@gmail.com" className="Email" target={'_blank'} rel="noreferrer">
                    <img src={Mail} alt=""/>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/eshan-c-dangwal-526626151/" className="LinkedIn" target={'_blank'} rel="noreferrer">
                    <img src={LinkedIn} alt=""/>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}