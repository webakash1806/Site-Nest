// src/TeamCarousel.js
import React from 'react';
import Slider from 'react-slick';
// src/index.js or src/App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// src/index.js or src/App.js
import service2 from '../assets/service2.webp'
import 'remixicon/fonts/remixicon.css';
const width = window.innerWidth;

const teamMembers = [
    {
        name: 'Barbara Dundas',
        role: 'Digital Marketer',
        image: service2,
        social: {
            linkedin: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
        },
    },
    {
        name: 'Marvin McKinney',
        role: 'CEO & Founder',
        image: service2,
        social: {
            linkedin: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
        },
    },
    {
        name: 'Sophia Rodriguez',
        role: 'Creative Director',
        image: service2,
        social: {
            linkedin: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
        },
    },
    {
        name: 'Marvin McKinney',
        role: 'Lead Developer',
        image: service2,
        social: {
            linkedin: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
        },
    },
    {
        name: 'Alexander Cameron',
        role: 'Product Designer',
        image: service2,
        social: {
            linkedin: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
        },
    },

    // Add more team members as needed
];

const TeamCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 5000,
        loop: true,
        // centerMode: true, // Enables showing parts of adjacent slides
        // centerPadding: "50px",
        slidesToShow: Math.floor(width / 310), // Adjust based on your design

        slidesToScroll: 1,
    };
    return (
        <div className="py-12 overflow-x-hidden ">
            <div className="">
                <div className="text-center max-w-[26rem] mx-auto mb-8">
                    <h2 className='sora-700 leading-[3rem] text-center mb-4 text-[2.2rem] md:text-[3rem] md:leading-[3.3rem]  sm:max-w-full text-[#0A165D]'>Our expert team is always ready to help you</h2>
                </div>
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="">
                            <div className="border group hover:shadow-md border-gray-200 w-[18rem] bg-white rounded-xl overflow-hidden  mx-auto">
                                <div className="relative overflow-hidden ">
                                    <img src={member.image} alt={member.name} className="object-cover w-full h-auto duration-700 translate-transform group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#040D43] via-transparent to-transparent flex  items-end pb-6 justify-center hover:from-[10%] hover:from-[#2B4DFF]  hover:to-transparent transition-all duration-300">

                                        <div className="absolute flex gap-3">
                                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-xl bg-white rounded size-9 group-hover:text-blue-600">
                                                <i className="ri-linkedin-fill"></i>
                                            </a>
                                            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-xl bg-white rounded size-9 group-hover:text-blue-600">
                                                <i className="ri-twitter-fill"></i>
                                            </a>
                                            <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-xl bg-white rounded size-9 group-hover:text-blue-600">
                                                <i className="ri-instagram-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-4 text-center">
                                    <a href="/single-team" className="block">
                                        <h2 className="text-xl font-medium text-gray-800">{member.name}</h2>
                                    </a>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TeamCarousel;
