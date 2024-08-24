import React from 'react';
import BreadCrumbs from '../Components/BreadCrumbs';
import ecommerceService from '../assets/service1.png'; // Example image for e-commerce service
import { FaCheckCircle } from 'react-icons/fa';
import WebsiteDevelopmentCard from '../Components/WebsiteDevelopmentCard';
import CTAsection from '../Components/CTAsection';

const EcommerceService = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'E-Commerce Development Services' },
    ];

    return (
        <div>
            <BreadCrumbs headText={"E-Commerce Development"} items={breadcrumbItems} />
            <section id="about" className="py-10 bg-white lg:mx-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-center">
                        {/* Image Section */}
                        <div className="lg:w-[43%] mb-6 lg:mb-0">
                            <img
                                src={ecommerceService}
                                alt="A graphic demonstration of e-commerce services"
                                className="w-full h-auto max-h-[20rem] lg:max-h-[27rem] object-cover rounded-2xl"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-[44%] pt-4 lg:pt-0 lg:pl-8">
                            <h3 className="text-[1.8rem] sora-700 text-[#040D43] mb-4">
                                Why Is an E-Commerce Website Important?
                            </h3>
                            <ul className="list-none mb-6 sora-500">
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Expanded Customer Reach.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>24/7 Availability for Sales.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Convenient Shopping Experience.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Personalized Customer Interactions.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Cost-Effective Marketing and Promotions.</span>
                                </li>
                            </ul>
                            <p className="text-gray-700 sora-400 leading-[1.65rem]">
                                An e-commerce website is beneficial for businesses that are looking to grow their business online. It gives a boost to the businesses. It benefits customers in the convenience of shopping anytime, anywhere, and allows businesses to provide a personalized shopping experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CTAsection text={"Looking to expand your business online with an e-commerce store? Contact us today to build a user-friendly, revenue-generating e-commerce website tailored to your needs!"} msg={""} />
            <WebsiteDevelopmentCard />
        </div>
    );
};

export default EcommerceService;
