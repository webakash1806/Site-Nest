import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
const ContactSection = () => {
    return (
        <div className='flex bg-[#F5F6F7] flex-col px-[5vw] gap-8 md:flex-row md:justify-around items-center justify-center py-28 my-20 lg:pb-40'>

            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div className="mr-10">
                            <h1 className='sora-600 leading-[3rem] mb-4 text-[2.5rem] text-[#0A165D]'>                                Let’s build an awesome project together
                            </h1>


                            <p className='sora-400 leading-[1.85rem] text-[#535760] mb-8'>
                                Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.
                            </p>
                            <div className="space-y-8">
                                {/* Address Info */}
                                <div className="flex flex-col items-start space-y-3">
                                    <div className='bg-[#0A165D] p-3 rounded-md'>
                                        <FaLocationDot className='text-[1.4rem] text-white' />
                                    </div>

                                    <div>
                                        <h5 className="text-[#0A165D] text-[1.3rem] sora-600">Address</h5>
                                        <p>1791 Yorkshire Circle Kitty<br />Hawk, NC 279499</p>
                                    </div>
                                </div>
                                {/* Contact Info */}
                                <div className="flex items-start space-x-4">
                                    <i className="ri-mail-fill text-3xl text-blue-500"></i>
                                    <div>
                                        <h5 className="font-semibold">Contact</h5>
                                        <a href="mailto:info@mthemeus.com" className="block">info@mthemeus.com</a>
                                        <a href="tel:518-564-3200" className="block">518-564-3200</a>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-8">Office Hours: Mon – Sat: 8:00 AM – 10:00 PM</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="600">
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h3 className="text-2xl font-semibold mb-4">Fill The Contact Form</h3>
                            <p className="mb-6">Feel free to contact with us, we don’t spam your email</p>
                            <form>
                                <div className="flex flex-wrap -mx-2 mb-4">
                                    <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="w-full lg:w-1/2 px-2">
                                        <input
                                            type="number"
                                            placeholder="Phone number"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{ backgroundImage: 'url("/path/to/icon.png")', backgroundRepeat: 'no-repeat', backgroundSize: '20px', backgroundPosition: '97% center' }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        name="textarea"
                                        placeholder="Write your message"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows="5"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        id="optech-main-form-btn"
                                        type="button"
                                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
