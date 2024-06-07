import React from 'react'
import { SlSocialInstagram } from "react-icons/sl"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import './Socials.scss'

const Socials = () => {
  return (
    <div className="socials__container">
        <a 
            href="https://www.instagram.com/" 
            className="socials__instagram">
                <SlSocialInstagram size={22}/>
        </a>
        <a 
            href="https://www.facebook.com/" 
            className="socials__facebook">
                <TiSocialFacebookCircular size={22}/>
        </a>
        <a 
            href="https://www.twitter.com" 
            className="socials__twitter">
                <SlSocialTwitter size={22}/>
        </a>
    </div>
  )
}

export default Socials