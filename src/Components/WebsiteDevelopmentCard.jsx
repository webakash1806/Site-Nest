import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import { FaCheck, } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';


const packages = [
    {
        title: "Lite Package",
        subtitle: "Basic Website",
        description: "Everything you need to create your website.",
        features: [
            { text: "Free 1 Year Hosting", included: false },
            { text: "Free 1 Business Email", included: false },
            { text: "Free SSL Certificate", included: false },
            { text: "Free 1 Domain Name", included: false },
            { text: "Social Icon Integration", included: true },
            { text: "Fully Responsive Website", included: true },
            { text: "Search Console Integration", included: false },
            { text: "Google Maps Integration", included: true },
            { text: "Mail SMTP Setup", included: true },
            { text: "Call Icon Integration", included: true },
            { text: "Admin Dashboard", included: false },
            { text: "WhatsApp Icon Integration", included: true },
            { text: "Free 2 Month Maintenance", included: true },
        ],
    },
    {
        title: "Basic Package",
        subtitle: "Basic Website + Hosting",
        description: "Everything you need to create your website.",
        features: [
            { text: "Free 1 Year Hosting", included: true },
            { text: "Free 1 Business Email", included: true },
            { text: "Free SSL Certificate", included: true },
            { text: "Free 1 Domain Name", included: false },
            { text: "Social Icon Integration", included: true },
            { text: "Fully Responsive Website", included: true },
            { text: "Search Console Integration", included: false },
            { text: "Google Maps Integration", included: true },
            { text: "Mail SMTP Setup", included: true },
            { text: "Call Icon Integration", included: true },
            { text: "Admin Dashboard", included: false },
            { text: "WhatsApp Icon Integration", included: true },
            { text: "Free 2 Month Maintenance", included: true },
        ],
    },
    {
        title: "Most Popular Package",
        subtitle: "Ecommerce Website",
        description: "Everything you need to create your website.",
        features: [
            { text: "Free 1 Year Hosting", included: true },
            { text: "Free 1 Business Email", included: true },
            { text: "Free SSL Certificate", included: true },
            { text: "Free 1 Domain Name", included: false },
            { text: "Social Icon Integration", included: true },
            { text: "Fully Responsive Website", included: true },
            { text: "Search Console Integration", included: true },
            { text: "Google Maps Integration", included: true },
            { text: "Mail SMTP Setup", included: true },
            { text: "Call Icon Integration", included: true },
            { text: "Admin Dashboard", included: true },
            { text: "WhatsApp Icon Integration", included: true },
            { text: "Free 6 Month Maintenance", included: true },
        ],
    },
    {
        title: "Complete Package",
        subtitle: "Custom Website",
        description: "Everything you need to create your website.",
        features: [
            { text: "Free 1 Year Hosting", included: true },
            { text: "Free 1 Business Email", included: true },
            { text: "Free SSL Certificate", included: true },
            { text: "Free 1 Domain Name", included: true },
            { text: "Social Icon Integration", included: true },
            { text: "Fully Responsive Website", included: true },
            { text: "Search Console Integration", included: true },
            { text: "Google Maps Integration", included: true },
            { text: "Mail SMTP Setup", included: true },
            { text: "Call Icon Integration", included: true },
            { text: "Admin Dashboard", included: true },
            { text: "WhatsApp Icon Integration", included: true },
            { text: "Free 12 Month Maintenance", included: true },
        ],
    },
];



const WebsiteDevelopmentCard = () => {
    return (
        <div className='flex overflow-x-hidden px-12 items-center w-full justify-center mx-auto lg:px-28'>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={18}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                breakpoints={{
                    700: { slidesPerView: 2 },
                    // : { slidesPerView: 2 },
                    1180: { slidesPerView: 3 },
                    1460: { slidesPerView: 4 },
                }}
                pagination={{ clickable: true }}
                loop
            >
                {packages.map((pkg, index) => (
                    <SwiperSlide key={index}>
                        <div className="min-w-[18.3rem] max-w-[18.3rem] md:max-w-full mx-auto p-6 rounded-lg shadow-lg border-2 bg-[#f6f8ff] mb-10 pb-0">
                            <div className="bg-[#2B4DFF] text-white text-xs px-4 py-1 rounded-full inline-block mb-2">
                                {pkg.title}
                            </div>
                            <h2 className="text-xl  h-[3.5rem] font-bold mb-2 text-[#0A165D] sora-700">{pkg.subtitle}</h2>
                            <p className="text-gray-700 mb-4">{pkg.description}</p>
                            {/* Button */}
                            <button className="relative flex items-center w-full py-3 overflow-hidden font-medium transition-all bg-[#2B4DFF] rounded-md group">
                                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f29bd] rounded group-hover:-mr-4 group-hover:-mt-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#F6F8FF]"></span>
                                </span>
                                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f29bd] rounded group-hover:-ml-4 group-hover:-mb-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#0f29bd] rounded-md group-hover:translate-x-0"></span>
                                <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                                    Contact now
                                </span>
                            </button>
                            {/* Features */}
                            <div className="border-t border-gray-200 my-4"></div>
                            <ul className="mb-4">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex border-b border-dashed items-center pb-1 mb-2 border-[#0A165D]">
                                        {feature.included ? (
                                            <FaCheck className="text-green-500 mr-2 text-[0.9rem]" />
                                        ) : (
                                            <FaXmark className="text-red-500 mr-2 text-[0.9rem]" />
                                        )}
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default WebsiteDevelopmentCard;
