import React from 'react'
import FooterDesc from '../footerDesc/FooterDesc';
import Socials from '../socials/Socials';
import FooterContact from '../footerContact/FooterContact';
import FooterOpening from '../footerOpening/FooterOpening';
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
        <FooterOpening/>
    </footer>
  )
}

export default Footer