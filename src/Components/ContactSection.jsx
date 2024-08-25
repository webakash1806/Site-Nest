import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import BlueBtn from './BlueBtn';

const ContactSection = () => {
    return (
        <div className='flex bg-[#F5F6F7] flex-col px-[4vw] gap-8 md:flex-row md:justify-around items-center justify-center py-28 lg:pb-40'>


            {/* Left Column */}
            <div className="max-w-[34rem] px-2 md:max-w-[35rem] flex items-center">
                <div className="mr-10">
                    <h1 className='sora-600 leading-[3rem] mb-4 text-[2.5rem] text-[#0A165D]'>                                Let’s build an awesome project together
                    </h1>


                    <p className='sora-400 leading-[1.85rem] text-[#535760] mb-8'>
                        Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.
                    </p>
                    <div className="flex flex-col justify-between sm:flex-row">
                        {/* Address Info */}
                        <div className="flex flex-col items-start space-y-3">
                            <div className='bg-[#0A165D] p-3 rounded-md'>
                                <FaLocationDot className='text-[1.4rem] text-white' />
                            </div>

                            <div>
                                <h2 className="text-[#0A165D] text-[1.3rem] sora-600">Address</h2>
                                <p className='sora-400 text-[1rem] text-[#535760] mt-2'>Naranpur, Bhojubeer<br />Varanasi, Uttar Pradesh <br /> 221003</p>
                            </div>
                        </div>
                        {/* Contact Info */}
                        <div className="flex flex-col items-start space-y-3">
                            <div className='bg-[#0A165D] p-3 rounded-md'>
                                <FaLocationDot className='text-[1.4rem] text-white' />
                            </div>
                            <div className='sora-400 text-[1rem] text-[#535760] space-y-1'>
                                <h2 className="text-[#0A165D] text-[1.3rem] sora-600 mb-2">Contact</h2>
                                <a href="mailto:info@mthemeus.com" className="block">info@domain.com</a>
                                <a href="tel:518-564-3200" className="block"></a>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-[#0A165D] sora-500 text-[1.1rem]">Office Hours: 24/7</p>
                </div>
            </div>

            {/* Right Column */}
            <div className="max-w-[34rem] sm:p-12 p-6 bg-white shadow-sm rounded-xl  md:max-w-[31rem] mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="600">
                <h3 className="text-2xl text-[#0A165D] sora-600 mb-4">Fill The Contact Form</h3>
                <p className="mb-6 sora-400 text-[#535760]">Feel free to contact with us, we don’t spam your email</p>
                <form>
                    <div className="flex flex-wrap mb-4 -mx-2">
                        <div className="w-full px-2 mb-4 lg:w-1/2 lg:mb-0">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                            />
                        </div>
                        <div className="w-full px-2 lg:w-1/2">
                            <input
                                type="number"
                                placeholder="Phone number"
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"

                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="textarea"
                            placeholder="Write your message"
                            className="w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                            rows="5"
                        ></textarea>
                    </div>
                    <button
                        className="relative mt-6 flex items-center px-8  py-3 w-full text-center overflow-hidden font-medium transition-all bg-[#2B4DFF] rounded-md group"
                    >
                        <span
                            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f29bd] rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f29bd] rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#0f29bd] rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                            className="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                        >Contact Us</span
                        >
                    </button>
                </form>
            </div>

        </div >
    );
};

export default ContactSection;
