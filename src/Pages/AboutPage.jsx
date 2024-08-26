import React from 'react';
import AboutSection from '../Components/AboutSection';
import DetailSection from '../Components/DetailSection';
import BreadCrumbs from '../Components/BreadCrumbs';

import WorkingProcess from '../Components/WorkingProcess';

const AboutPage = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us' },
    ];

    return (
        <div>
            {/* Breadcrumbs */}
            <BreadCrumbs headText={"About Us"} items={breadcrumbItems} />

            {/* About Us Section */}
            <AboutSection />

            {/* Mission Section */}
            <div className='bg-white px-[5vw] py-16 text-center'>
                <h2 className='sora-600 text-[2rem] text-[#0A165D] mb-6'>Our Mission</h2>
                <p className='sora-400 leading-[1.8rem] text-[#535760] max-w-[45rem] mx-auto'>
                    Our mission is to empower businesses by providing innovative digital solutions that enhance operational efficiency, improve user engagement, and drive sustainable growth. We are dedicated to delivering excellence through every project we undertake.
                </p>
            </div>

            {/* Vision Section */}
            <div className='bg-[#F5F6F7] px-[5vw] py-16 text-center'>
                <h2 className='sora-600 text-[2rem] text-[#0A165D] mb-6'>Our Vision</h2>
                <p className='sora-400 leading-[1.8rem] text-[#535760] max-w-[45rem] mx-auto'>
                    Our vision is to be a global leader in digital transformation, consistently pushing the boundaries of technology to deliver unparalleled solutions that enable our clients to achieve their full potential in the digital era.
                </p>
            </div>

            {/* Values Section */}
            <div className='bg-white px-[5vw] py-16 text-center'>
                <h2 className='sora-600 text-[2rem] text-[#0A165D] mb-6'>Our Values</h2>
                <div className='flex flex-col gap-8 md:flex-row md:justify-around'>
                    <div className='max-w-[20rem] mx-auto'>
                        <h3 className='sora-600 text-[1.5rem] text-[#0A165D] mb-4'>Innovation</h3>
                        <p className='sora-400 leading-[1.8rem] text-[#535760]'>
                            We foster a culture of innovation, constantly exploring new ideas and technologies to deliver solutions that are ahead of the curve.
                        </p>
                    </div>
                    <div className='max-w-[20rem] mx-auto'>
                        <h3 className='sora-600 text-[1.5rem] text-[#0A165D] mb-4'>Integrity</h3>
                        <p className='sora-400 leading-[1.8rem] text-[#535760]'>
                            We uphold the highest standards of integrity in all our actions, ensuring transparency, accountability, and ethical conduct.
                        </p>
                    </div>
                    <div className='max-w-[20rem] mx-auto'>
                        <h3 className='sora-600 text-[1.5rem] text-[#0A165D] mb-4'>Customer-Centric</h3>
                        <p className='sora-400 leading-[1.8rem] text-[#535760]'>
                            We prioritize our clients' needs, delivering tailored solutions that meet their unique requirements and exceed their expectations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            {/* <div className='bg-[#F5F6F7] px-[5vw] py-16 text-center'>
                <h2 className='sora-600 text-[2rem] text-[#0A165D] mb-8'>Meet Our Team</h2>
                <TeamCarousel />
            </div> */}

            {/* Detail Section */}
            <div className='bg-[#F5F6F7]'>
                <DetailSection />
            </div>
            <WorkingProcess />
        </div>
    );
}

export default AboutPage;
