import React from 'react'
import Insta from '../images/Instagram.svg'
import GitHub from '../images/GitHub.svg'

export default function Footer(){
    return (
        <div className="footer">
            <a href="https://www.instagram.com/eshan_dangwal/" target={'_blank'} rel="noreferrer"><img src={Insta} alt=""/></a>
            <a href="https://github.com/Eshan01" target={'_blank'} rel="noreferrer"><img src={GitHub} alt=""/></a>
        </div>
    )
}