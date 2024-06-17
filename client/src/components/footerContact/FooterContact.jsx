import React from 'react'
import { FaCoffee } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from "react-icons/fa6";
import './FooterContact.scss'

const FooterContact = () => {
  return (
    <section className="footerContact__container">
        <h3 className="footerContact__heading">
            Contact Info
        </h3>
        <div className="footerContact__name">
            <FaCoffee/>
            <h5 className="footerContact__nameText">
                My Little Valentine
            </h5>
        </div>
        <div className="footerContact__phone">
            <FaPhone/>
            <h5 className="footerContact__phoneNumber">
                (+44) 123 4567 890
            </h5>
        </div>
        <div className="footerContact__email">
            <MdEmail/>
            <h5 className="footerContact__emailText">
                mlv@example.co.uk
            </h5>
        </div>
        <div className="footerContact__address">
            <FaLocationDot/>
            <h5 className="footerContact__addressText">
                11 Lovers Lane, City, Country
            </h5>
        </div>
    </section>
  )
}

export default FooterContact