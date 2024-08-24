import React from 'react';
import BreadCrumbs from '../Components/BreadCrumbs';
import digitalMarketingService from '../assets/service4.png'; // Example image for digital marketing service
import { FaCheckCircle } from 'react-icons/fa';
import CTAsection from '../Components/CTAsection';
import ServiceDetailCard from '../Components/ServiceDetailCard';
import { FaChartLine, FaBullhorn, FaSearch, FaEnvelopeOpenText, FaMobileAlt, FaThumbsUp } from 'react-icons/fa';

const DigitalMarketingService = () => {

    const services = [
        { icon: FaChartLine, title: 'SEO Services', description: 'Improve your website’s visibility and ranking on search engines.' },
        { icon: FaBullhorn, title: 'PPC Advertising', description: 'Manage pay-per-click advertising campaigns to drive traffic and conversions.' },
        { icon: FaSearch, title: 'Content Marketing', description: 'Create and distribute valuable content to attract and retain customers.' },
        { icon: FaEnvelopeOpenText, title: 'Email Marketing', description: 'Build and manage targeted email campaigns to boost customer engagement.' },
        { icon: FaMobileAlt, title: 'Mobile Marketing', description: 'Reach your audience through effective mobile marketing strategies.' },
        { icon: FaThumbsUp, title: 'Social Media Marketing', description: 'Grow your brand’s presence and engagement on social media platforms.' },
    ];

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Digital Marketing Services' },
    ];

    return (
        <div>
            <BreadCrumbs headText={"Digital Marketing Services"} items={breadcrumbItems} />
            <section id="about" className="py-10 bg-white lg:mx-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-center">
                        {/* Image Section */}
                        <div className="lg:w-[43%] mb-6 lg:mb-0">
                            <img
                                src={digitalMarketingService}
                                alt="A digital representation of marketing services"
                                className="w-full h-auto max-h-[20rem] lg:max-h-[24rem] object-cover rounded-2xl"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-[44%] pt-4 lg:pt-0 lg:pl-8">
                            <h3 className="text-[1.8rem] sora-700 text-[#040D43] mb-4">
                                Why Digital Marketing Matters?
                            </h3>
                            <ul className="list-none mb-6 sora-500">
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Increases Online Visibility.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Enhances Customer Engagement.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Boosts Conversion Rates.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Provides Measurable Results.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Enhances Brand Awareness.</span>
                                </li>
                            </ul>
                            <p className="text-gray-700 sora-400 leading-[1.65rem]">
                                Transform your business’s digital presence with our expert digital marketing services. Contact us to start your journey towards digital success today!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CTAsection text={"Looking to boost your brand's digital presence with professional marketing strategies? Contact us today to create impactful digital campaigns that drive results and grow your business!"} msg={""} />
            <h1 className='mt-16 mx-auto w-fit sora-700 text-[2.5rem] text-[#040D43]'>What we do?</h1>
            <div className='grid mt-6 grid-cols-1 sm:grid-cols-2 w-fit mx-auto container  md:grid-cols-3 gap-6'>
                {services.map((service, index) => (
                    <ServiceDetailCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>

        </div>
    );
};

export default DigitalMarketingService;
