import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs';
import webService from '../assets/webservice.png'
import { FaCheckCircle } from 'react-icons/fa';
import WebsiteDevelopmentCard from '../Components/WebsiteDevelopmentCard';
const WebService = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Website Development Services' },
    ];

    return (
        <div>
            <BreadCrumbs headText={"Website Development"} items={breadcrumbItems} />
            <section id="about" className="py-10 bg-white lg:mx-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-center">
                        {/* Video Section */}
                        <div className="lg:w-[43%] mb-6 lg:mb-0">

                            <img src={webService} alt="A graphic demonstration of coding in laptop"
                                className='w-full h-auto max-h-[20rem] lg:max-h-[24rem] object-cover rounded-2xl' />
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-[44%] pt-4 lg:pt-0 lg:pl-8">
                            <h3 className="text-[1.8rem] sora-700 text-[#040D43] mb-4">
                                Why Is a Website Important?
                            </h3>
                            <ul className="list-none mb-6 sora-500">
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>24/7 Online Presence.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Information Exchange.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Establish Credibility and Build Trust.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Growth Opportunity.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span>Marketing.</span>
                                </li>
                            </ul>
                            <p className="text-gray-700 sora-400 leading-[1.65rem]">
                                Through the website and online presence strategy, you can promote
                                your business online. The website is also important because it
                                helps build the trust of the business. ... A website not only
                                builds trust but also helps to leave a positive impression of a
                                bigger and more successful company.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <WebsiteDevelopmentCard />
        </div>
    )
}

export default WebService
