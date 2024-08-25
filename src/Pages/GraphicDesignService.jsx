import React from 'react';
import BreadCrumbs from '../Components/BreadCrumbs';
import graphicDesignService from '../assets/service3.png'; // Example image for graphic design service
import { FaCheckCircle } from 'react-icons/fa';
import CTAsection from '../Components/CTAsection';
import ServiceDetailCard from '../Components/ServiceDetailCard';
import { FaPaintBrush, FaFileAlt, FaAd, FaFileImage, FaPalette, FaBusinessTime, FaPenFancy } from 'react-icons/fa';

const GraphicDesignService = () => {
    const phoneNumber = "916207234759"; // Replace with your phone number
    const message = "Hello! I would like to start a graphic design project."; // 

    const services = [
        { icon: FaPaintBrush, title: 'Logo Design', description: 'Craft unique and memorable logos to establish your brand identity.' },
        { icon: FaFileAlt, title: 'Poster Design', description: 'Create eye-catching posters for events, promotions, and advertisements.' },
        { icon: FaAd, title: 'Hoarding Design', description: 'Design impactful hoardings to capture attention and convey your message.' },
        { icon: FaFileImage, title: 'Banner Design', description: 'Design banners for online and offline marketing needs.' },

        { icon: FaBusinessTime, title: 'Visiting Card Design', description: 'Design professional visiting cards that make a lasting impression.' },
        { icon: FaPenFancy, title: 'Stationary Design', description: 'Design elegant stationery to reinforce your brand identity.' },
    ];

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Graphic Design Services' },
    ];

    return (
        <div>
            <BreadCrumbs headText={"Graphic Design Services"} items={breadcrumbItems} />
            <section id="about" className="py-10 bg-white lg:mx-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col justify-center lg:flex-row lg:items-center">
                        {/* Image Section */}
                        <div className="lg:w-[43%] mb-6 lg:mb-0">
                            <img
                                src={graphicDesignService}
                                alt="A graphic demonstration of graphic design services"
                                className="w-full h-auto max-h-[20rem] lg:max-h-[24rem] object-cover rounded-2xl"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-[44%] pt-4 lg:pt-0 lg:pl-8">
                            <h3 className="text-[1.8rem] sora-700 text-[#040D43] mb-4">
                                Why Is Graphic Design Important?
                            </h3>
                            <ul className="mb-6 list-none sora-500">
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="mr-2 text-green-500" />
                                    <span>Enhances Visual Communication.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="mr-2 text-green-500" />
                                    <span>Builds Brand Identity.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="mr-2 text-green-500" />
                                    <span>Increases Engagement and Conversions.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="mr-2 text-green-500" />
                                    <span>Creates a Professional Image.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FaCheckCircle className="mr-2 text-green-500" />
                                    <span>Improves User Experience.</span>
                                </li>
                            </ul>
                            <p className="text-gray-700 sora-400 leading-[1.65rem]">
                                Elevate your brand's visual appeal with our expert graphic design services. Contact us to start your project today!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CTAsection text={"Looking to enhance your brand's visual impact with professional graphic design? Contact us today to create captivating designs that elevate your brand and attract more customers!"} msg={"Contact us"} to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} />
            <h1 className='mt-16 mx-auto w-fit sora-700 text-[2.5rem] text-[#040D43]'>What we do?</h1>
            <div className='container grid grid-cols-1 gap-6 mx-auto mt-6 sm:grid-cols-2 w-fit md:grid-cols-3'>
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

export default GraphicDesignService;
