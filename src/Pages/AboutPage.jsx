import React from 'react';
import AboutSection from '../Components/AboutSection';
import DetailSection from '../Components/DetailSection';
import BreadCrumbs from '../Components/BreadCrumbs';
import TeamCarousel from '../Components/TeamSection';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import shape1 from '../assets/shape1.svg';
import shape2 from '../assets/shape2.svg';
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
            <div className='flex bg-[#F5F6F7] flex-col px-[5vw] gap-8 md:flex-row md:justify-around items-center justify-center py-28 lg:pb-40'>
                <div className='max-w-[28rem] w-full aspect-w-4 aspect-h-3 relative sm:mb-36 md:mb-0 sm:mr-16 md:mr-0 lg:mr-20'>
                    <img src={about1} className='w-full h-full relative z-[10]' alt="About main image" />
                    <img src={about2} alt="About short image" className='w-[60%] hidden md:hidden lg:block sm:block z-[11] absolute bottom-[-100px] right-[-100px]' />
                    <img src={shape1} alt="Shape 1" className='w-[28%] hidden md:hidden lg:block sm:block absolute top-[85px] right-[-80px]' />
                    <img src={shape2} alt="Shape 2" className='w-[26%] hidden md:hidden lg:block sm:block absolute bottom-[-92px] left-[140px]' />
                </div>
                <div className='max-w-[33rem] md:max-w-[30rem] md:mt-2'>
                    <h1 className='sora-600 leading-[3rem] mb-4 text-[2.5rem] text-[#0A165D]'>Exclusive technology to provide IT solutions</h1>
                    <p className='sora-400 leading-[1.85rem] text-[#535760]'>
                        Leveraging exclusive technology to deliver cutting-edge IT solutions that streamline operations, enhance productivity, and drive digital transformation for businesses across diverse industries and sectors.
                    </p>
                    <div className='flex my-12'>
                        <div className='w-[50%]'>
                            <p className='sora-600 text-[3.2rem] leading-[3rem] tracking-wide text-[#0A165D]'>70+</p>
                            <p className='sora-400 text-[#535760]'>Happy Clients</p>
                        </div>
                        <div className='w-[50%]'>
                            <p className='sora-600 text-[3.2rem] leading-[3rem] tracking-wide text-[#0A165D]'>50+</p>
                            <p className='sora-400 text-[#535760]'>Projects delivered</p>
                        </div>
                    </div>
                </div>
            </div>

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
