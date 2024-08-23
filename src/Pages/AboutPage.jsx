import React from 'react'
import AboutSection from '../Components/AboutSection'
import DetailSection from '../Components/DetailSection'
import BreadCrumbs from '../Components/BreadCrumbs';

const AboutPage = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us' },
    ];

    return (
        <div>
            <BreadCrumbs headText={"Contact Us"} items={breadcrumbItems} />
            <AboutSection />
            <DetailSection />
        </div>
    )
}

export default AboutPage
