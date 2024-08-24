import React from 'react'
import HeroSection from '../Components/HeroSection'
import ServiceCard from '../Components/ServiceCard'
import AboutSection from '../Components/AboutSection'
import DetailSection from '../Components/DetailSection'
import ProjectCard from '../Components/ProjectCard'
import ContactSection from '../Components/ContactSection'
import TeamCarousel from '../Components/TeamSection'
import WebsiteDevelopmentCard from '../Components/WebsiteDevelopmentCard'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'

const Home = () => {

    const data = [
        {
            title: "Ecommerce Setup <br/> Services",
            icon: icon1,
            image: service1,
            link: "/services/ecommerce-services"
        },
        {
            title: "Website Development <br/> Services",
            icon: icon2,
            image: service2,
            link: "/services/web-services"
        }, {
            title: "Graphic Designing <br/> Services",
            icon: icon3,
            image: service3,
            link: "/services/graphic-services"
        }, {
            title: `Digital Marketing <br/> Services`,
            icon: icon4,
            image: service4,
            link: "/"
        },
    ]

    return (
        <div className=''>
            <HeroSection />
            <div className='flex flex-col items-center justify-center mt-20 lg:mt-28 mb-10'>
                <h1 className='sora-700 leading-[3rem] text-center mb-4 text-[2.2rem] md:text-[3rem] md:leading-[3.3rem] max-w-[25rem] sm:max-w-full text-[#0A165D]'>Our <br className='md:hidden' /> awesome services to <br className='hidden sm:block' /> give you success</h1>
                <div className='grid-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
                    {data?.map((dat, ind) => <ServiceCard key={ind} data={dat} />)}
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
