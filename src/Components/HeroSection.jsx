import React, { useState, useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroVideo from '../assets/hero-video.webm'; // Replace with your actual video path
import BlueBtn from './BlueBtn';
import { Link } from 'react-router-dom';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const HeroSection = () => {
    const width = window.innerWidth;

    const phoneNumber = "916207234759"; // Replace with your phone number
    const message = "Hello! I would like to inquire about your services."; // Replace with your default message

    // Sample client images (replace these with actual client images)
    const clientImages = [
        'https://via.placeholder.com/150?text=Client+1',
        'https://via.placeholder.com/150?text=Client+2',
        'https://via.placeholder.com/150?text=Client+3',
        'https://via.placeholder.com/150?text=Client+4',
        'https://via.placeholder.com/150?text=Client+5',
    ];

    return (
        <section className="relative bg-[#040D43] py-16 overflow-hidden">
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
                            className="h-full w-full relative z-[100] rounded-xl"
                        />
                    </div>

                </div>
            </div>

            {/* Client Carousel */}
            <section className="relative py-16 bg-[#040D43]">
                {/* Bottom-right gradient background */}
                <div
                    className='absolute w-[30rem] lg:h-[35rem] lg:w-[35rem] h-[30rem] top-[-90%] lg:right-[-5%] lg:top-[-100%] right-[-15%] rounded-full z-0'
                    style={{
                        background: 'radial-gradient(circle, rgba(36, 67, 230, 1) 2%, rgba(36, 67, 230, 0) 65%)',
                    }}
                ></div>
                <div className="px-4 mx-auto ">
                    <h2 className="mb-8 text-3xl font-bold text-center text-white md:text-4xl">
                        Our Happy Clients
                    </h2>
                    <Swiper
                        slidesPerView={width / 100}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        className="mySwiper"
                        allowTouchMove={false}
                        speed={3500}
                    >
                        {clientImages.concat(clientImages).map((img, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <img
                                    src={img}
                                    alt={`Client ${index + 1}`}
                                    className="w-[100px] rounded-lg shadow-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </section>
    );
};

export default HeroSection;
