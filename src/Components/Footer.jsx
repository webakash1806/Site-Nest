import React from 'react';
import ctaImage from '../assets/footer.png';
import { Link } from 'react-router-dom';
import { MdCall, MdMail } from 'react-icons/md';
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
    const phoneNumber = "916207234759"; // Replace with your phone number
    const message = "Hello! I would like to start a project."; // Replace with your default message

    return (
        <footer className="relative flex items-center justify-center pt-16 overflow-x-hidden">
            <div className=" absolute top-[3rem] sm:top-[8rem]">
                <div
                    className="bg-cover  bg-no-repeat py-10 pt-16 md:py-10 lg:py-20 md:mx-10 mx-4 rounded-[1.4rem] sm:px-20 px-10 h-fit w-fit"
                    style={{ backgroundImage: `url(${ctaImage})` }}
                >
                    <div className="flex flex-wrap items-end gap-4">
                        <div className="text-white max-w-[35rem]">
                            <h2 className="text-[2rem] md:text-[2.7rem] font-semibold mb-4 sora-500 md:sora-600">Have Any Query?</h2>
                            <p className="sora-400 leading-7 text-[#f1f3fa]">
                                Transform your vision with our expert IT services. Reach out to us for tailored solutions and let’s achieve success together.
                            </p>
                        </div>
                        <Link target='_blank' to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} className='p-3 px-4 bg-white rounded sora-500'>
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" mx-auto w-full sm:px-28 px-4 mt-[12rem] pt-[13rem] bg-[#040D43]">
                <div className="py-8 ">
                    <div className="flex flex-wrap items-center justify-around">
                        <div className="w-full mb-8 lg:w-1/3 md:w-full xl:mb-0">
                            <div className="optech-footer-textarea text-[#fff]">
                                <Link to="/">
                                    <img src={""} alt="Logo" className="mb-4" />
                                </Link>
                                <p className="text-[#e0e4ff] mb-4 sora-300 leading-8 text-[0.9rem] hover:text-white pr-10">
                                    Transform your vision with our expert IT services, delivering innovative solutions to achieve your goals with precision and excellence.
                                </p>
                                <div className="">
                                    <ul>
                                        <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white">
                                            <Link to="tel:6207234759" className="flex items-center gap-2">
                                                <MdCall className='text-[1.3rem]' /> +91 6207234759
                                            </Link>
                                        </li>
                                        <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white">

                                            <Link to="mailto:name@email.com" className="flex items-center gap-2">
                                                <MdMail className='text-[1.3rem]' />contact@domain.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mb-8 xl:w-1/4 md:w-1/3 md:mb-0">
                            <div className="optech-footer-menu text-[#fff]">
                                <h2 className="sora-500 text-[1.1rem]">Services</h2>
                                <div className='flex gap-1'>
                                    <div className='w-[2.5rem] h-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='w-[1rem] h-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='size-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>

                                </div>
                                <ul>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/services/web-services">Website Development</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/services/e-commerce-services">E-commerce Website</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/services/graphic-services">UI/UX Design</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/services/graphic-services">Graphic Design</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/services/digital-marketing-services">Digital Marketing</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/6 md:w-1/3">
                            <div className="optech-footer-menu text-[#fff]">
                                <h2 className="sora-500 text-[1.1rem]">Quick Links</h2>
                                <div className='flex gap-1'>
                                    <div className='w-[2.5rem] h-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='w-[1rem] h-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='size-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>

                                </div>
                                <ul>
                                    <li className=" sora-300 leading-8 text-[0.9rem] hover:text-white text-[#e0e4ff]"><Link to="/about">About us</Link></li>
                                    <li className=" sora-300 leading-8 text-[0.9rem] hover:text-white text-[#e0e4ff]"><Link to="/contact">Contact us</Link></li>

                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/">Terms &amp; Conditions</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/FAQ">Faqs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sora-400 flex items-center justify-center gap-1 text-[1rem] py-4 text-[#fff]">
                    <FaRegCopyright className='text-[1.2rem] mb-[2.5px]' />
                    <p> 2024 Binary Wise Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
