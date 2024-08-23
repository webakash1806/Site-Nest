import React from 'react'
import ContactSection from '../Components/ContactSection'
import { Link } from 'react-router-dom';
import BreadCrumbs from '../Components/BreadCrumbs';
const ContactPage = () => {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Contact Us' },
    ];

    return (
        <div>
            <BreadCrumbs headText={"Contact Us"} items={breadcrumbItems} />
            <ContactSection />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7211.158118865743!2d82.9656194892169!3d25.351902510446408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dcac102de6d%3A0x380acc80bc9a6f1f!2sBhojuveer%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1724419781258!5m2!1sen!2sin" height="400" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
        </div>
    )
}

export default ContactPage
