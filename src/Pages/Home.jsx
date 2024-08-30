import React, { lazy, useEffect } from 'react'
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
import WorkingProcess from '../Components/WorkingProcess'
import { Autoplay, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroVideo from '../assets/hero-video.webm'; // Replace with your actual video path
import BlueBtn from '../Components/BlueBtn';
import { Link } from 'react-router-dom';
import clientImages from '../Hooks/clientsLogo'
import Client from '../Components/client'
import Testimonial from '../Components/Testimonial'

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);


const Home = () => {
    const width = window.innerWidth;

    const phoneNumber = "916207234759"; // Replace with your phone number
    const message = "Hello! I would like to inquire about your services."; // Replace with your default message

    // Sample client images (replace these with actual client images)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [])

    const data = [
        {
            title: "Ecommerce Setup <br/> Services",
            icon: icon1,
            image: service1,
            link: "/services/e-commerce-services"
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
            link: "/services/digital-marketing-services"
        },
    ]

    return (
        <div className=''>


            <section className="relative bg-[#040D43] py-8 pb-0 overflow-hidden">
                {/* Background Dot Pattern */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: `radial-gradient(#fff 1.5px, transparent 1.5px)`,
                        backgroundSize: '30px 30px',
                        opacity: 0.2,
                    }}
                ></div>

                <div className="relative justify-center z-10 sm:w-[80%] w-[99%] lg:w-[95%] px-4 mx-auto text-center flex flex-col items-center">
                    <div className='relative lg:flex-row lg:justify-between min-h-[66vh] mb-4 z-[100] flex items-center justify-center flex-col'>
                        <h1 className="text-white text-[1.8rem] sm:text-[2.5rem] sora-600 md:text-[3rem] lg:text-[3.8rem] lg:text-start mb-4 leading-[2.8rem] sm:leading-[3.2rem] md:leading-[4.5rem] lg:leading-[5.7rem]">
                            Your Vision,
                            <br /> Our Development,
                            <br />
                            Engineered for Success
                        </h1>
                        <div className='flex flex-col lg:items-start mb-8 lg:w-[35%] mt-2 md:mt-0 items-center justify-center'>
                            <p className="text-white leading-[1.8rem] lg:text-start sora-400 text-[0.95rem] sm:text-[1rem] lg:text-[1.1rem] mb-8 tracking-wide">
                                We design and develop visually stunning and highly functional websites, along with captivating graphics, to elevate your brand's presence, engage your audience, and drive measurable success across all digital platforms.
                            </p>
                            <div className="flex space-x-4">
                                <BlueBtn to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} text={"Talk with us"} />
                                <Link to='/services' className="px-6 font-semibold text-blue-700 transition py-[1rem] bg-white rounded-md">
                                    Our Services
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='relative w-full lg:w-[65%] h-auto lg:mt-6'>
                        {/* Top-left gradient background */}
                        <div
                            className='absolute w-[30rem] lg:size-[35rem] h-[30rem] top-[-65%] lg:left-[-30%] lg:top-[-50%] left-[-40%] rounded-full z-0'
                            style={{
                                background: 'radial-gradient(circle, rgba(36, 67, 230, 1) 2%, rgba(36, 67, 230, 0) 65%)',
                            }}
                        ></div>

                        <div className="relative w-full h-full overflow-hidden rounded-xl">
                            {/* Bluish overlay */}
                            <div className="absolute inset-0 bg-[#040D43] opacity-10 z-[101]"></div>
                            {/* Replace the image with a video */}
                            <video
                                src={heroVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                aria-label='Video representation of main website'
                                className="h-full w-full relative z-[100] rounded-xl"
                            />
                        </div>

                    </div>
                </div>

                {/* Client Carousel */}
                <section className="relative py-12 pb-0 bg-[#040D43]">
                    {/* Bottom-right gradient background */}
                    <div
                        className='absolute w-[30rem] lg:h-[35rem] lg:w-[35rem] h-[30rem] top-[-90%] lg:right-[-5%] lg:top-[-100%] right-[-15%] rounded-full z-0'
                        style={{
                            background: 'radial-gradient(circle, rgba(36, 67, 230, 1) 2%, rgba(36, 67, 230, 0) 65%)',
                        }}
                    ></div>

                </section>
            </section>
            <Client />
            <div className='flex flex-col items-center justify-center mt-12 mb-10 lg:mt-24'>
                <h1 className='sora-700 leading-[3rem] text-center mb-4 text-[2.2rem] md:text-[3rem] md:leading-[3.3rem] max-w-[25rem] sm:max-w-full text-[#0A165D]'>Our <br className='md:hidden' /> awesome services to <br className='hidden sm:block' /> give you success</h1>
                <div className='grid gap-8 mt-4 grid-1 sm:grid-cols-2 lg:grid-cols-4'>
                    {data?.map((dat, ind) => <ServiceCard key={ind} data={dat} />)}
                </div>
            </div>
            <WebsiteDevelopmentCard />
            <AboutSection btn={true} />
            <WorkingProcess />
            <DetailSection />
            <Testimonial />
            {/* <div className='flex flex-col items-center justify-center mt-20 mb-10 sm:px-10 lg:mt-28'>
                <h1 className='sora-700 leading-[3rem] text-center mb-4 text-[2.2rem] md:text-[3rem] md:leading-[3.3rem] max-w-[25rem] sm:max-w-full text-[#0A165D]'>Our <br className='md:hidden' /> Latest Projects </h1>
                <div className='grid gap-8 mt-4 grid-1 sm:grid-cols-2 lg:grid-cols-4'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div> */}
            {/* <TeamCarousel /> */}
            <ContactSection />
        </div>
    )
}

export default Home
