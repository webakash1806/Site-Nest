import React from 'react'
import HeroSection from '../Components/HeroSection'
import ServiceCard from '../Components/ServiceCard'
import AboutSection from '../Components/AboutSection'
import DetailSection from '../Components/DetailSection'
import ProjectCard from '../Components/ProjectCard'
import ContactSection from '../Components/ContactSection'
import TeamCarousel from '../Components/TeamSection'
import WebsiteDevelopmentCard from '../Components/WebsiteDevelopmentCard'

const Home = () => {
    return (
        <div className=''>
            <HeroSection />
            <div className='flex flex-col items-center justify-center mt-20 lg:mt-28 mb-10'>
                <h1 className='sora-700 leading-[3rem] text-center mb-4 text-[2.2rem] md:text-[3rem] md:leading-[3.3rem] max-w-[25rem] sm:max-w-full text-[#0A165D]'>Our <br className='md:hidden' /> awesome services to <br className='hidden sm:block' /> give you success</h1>
                <div className='grid-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
            <WebsiteDevelopmentCard />
            <AboutSection />
            <DetailSection />
            <div className='flex flex-col items-center justify-center mt-20 lg:mt-28 mb-10'>
                <h1 className='sora-700 leading-[3rem] text-center mb-4 text-[2.2rem] md:text-[3rem] md:leading-[3.3rem] max-w-[25rem] sm:max-w-full text-[#0A165D]'>Our <br className='md:hidden' /> Latest Projects </h1>
                <div className='grid-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            {/* <TeamCarousel /> */}
            <ContactSection />
        </div>
    )
}

export default Home
