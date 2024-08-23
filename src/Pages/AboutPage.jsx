import React from 'react'
import AboutSection from '../Components/AboutSection'
import DetailSection from '../Components/DetailSection'
import BreadCrumbs from '../Components/BreadCrumbs';
import TeamCarousel from '../Components/TeamSection';

const AboutPage = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us' },
    ];

    return (
        <div>
            <BreadCrumbs headText={"About Us"} items={breadcrumbItems} />
            <AboutSection />
            <DetailSection />
            {/* <TeamCarousel /> */}
        </div>
    )
}

export default AboutPage
