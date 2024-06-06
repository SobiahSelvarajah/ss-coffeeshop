import React from 'react'
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
            <div className="footerAddress__container">
                <FaLocationDot/>
                <h5 className="footerAddress__text">
                    11 Lovers Lane, City, Country
                </h5>
            </div>
        </section>
        <section className="footerOpening__container">
            <h3 className="footerOpening__heading">
                Opening Times
            </h3>
            <h5 className="footerOpening__times">
                Mon-Fri: 8AM - 8PM
            </h5>
            <h5 className="footerOpening__times">
                Sat: 8AM - 4PM
            </h5>
            <h5 className="footerOpening__times">
                Sun: Closed
            </h5>
        </section>
    </footer>
  )
}

export default Footer