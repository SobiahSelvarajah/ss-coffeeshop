import React from 'react'
import { FaCoffee } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from "react-icons/fa6";

const FooterContact = () => {
  return (
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
  )
}

export default FooterContact