import React from 'react'
import FooterDesc from '../footerDesc/FooterDesc';
import Socials from '../socials/Socials';
import FooterContact from '../footerContact/FooterContact';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer__container">
        <section className="footer__intro">
            <h3 className="footer__logo">
                My Little Valentine
            </h3>
            <FooterDesc/>
            <Socials/>
        </section>
        <FooterContact/>
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