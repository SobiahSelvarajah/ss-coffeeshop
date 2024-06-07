import React from 'react'
import { SlSocialInstagram } from "react-icons/sl"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { FaCoffee } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from "react-icons/fa6";
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer__container">
        <section className="footer__intro">
            <h3 className="footer__logo">
                My Little Valentine
            </h3>
            <h5 className="footerDesc__desc">
                Template easy to use coffeeshop
                <br/>
                website built with Javascript.
            </h5>
            <div className="footer__socials">
                <a 
                    href="https://www.instagram.com/" 
                    className="footer__instagram">
                        <SlSocialInstagram size={22}/>
                </a>
                <a 
                    href="https://www.facebook.com/" 
                    className="footer__facebook">
                        <TiSocialFacebookCircular size={22}/>
                </a>
                <a 
                    href="https://www.twitter.com" 
                    className="footer__twitter">
                        <SlSocialTwitter size={22}/>
                </a>
            </div>
        </section>
        <section className="footer__contact">
            <h3 className="footer__contactHeading">
                Contact Info
            </h3>
            <div className="footer__name">
                <FaCoffee/>
                <h5 className="footer__nameText">
                    My Little Valentine
                </h5>
            </div>
            <div className="footer__phone">
                <FaPhone/>
                <h5 className="footer__phoneNumber">
                    (+44) 123 4567 890
                </h5>
            </div>
            <div className="footer__email">
                <MdEmail/>
                <h5 className="footer__emailText">
                    mlv@example.co.uk
                </h5>
            </div>
            <div className="footer__address">
                <FaLocationDot/>
                <h5 className="footer__addressText">
                    11 Lovers Lane, City, Country
                </h5>
            </div>
        </section>
        <section className="footer__opening">
            <h3 className="footer__openingHeading">
                Opening Times
            </h3>
            <h5 className="footer__openingTimes">
                Mon-Fri: 8AM - 8PM
            </h5>
            <h5 className="footer__openingTimes">
                Sat: 8AM - 4PM
            </h5>
            <h5 className="footer__openingTimes">
                Sun: Closed
            </h5>
        </section>
    </footer>
  )
}

export default Footer