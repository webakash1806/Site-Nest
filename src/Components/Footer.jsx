import React from 'react';
import ctaImage from '../assets/footer.png';
import { Link } from 'react-router-dom';
import { MdCall, MdMail } from 'react-icons/md';

const Footer = () => {
    const phoneNumber = "916207234759"; // Replace with your phone number
    const message = "Hello! I would like to start a project."; // Replace with your default message

    return (
        <footer className="relative flex items-center justify-center pt-16 overflow-x-hidden">
            <div className=" absolute top-[3rem] sm:top-[8rem]">
                <div
                    className="bg-cover  bg-no-repeat py-10 pt-16 md:py-20 md:mx-10 mx-4 rounded-[1.4rem] sm:px-20 px-10 h-fit w-fit"
                    style={{ backgroundImage: `url(${ctaImage})` }}
                >
                    <div className="flex flex-wrap items-end gap-4">
                        <div className="text-white max-w-[35rem]">
                            <h2 className="text-4xl md:text-[2.7rem] font-semibold mb-4 sora-500 md:sora-600">Let’s work together</h2>
                            <p className=" sora-400 leading-7 text-[#f1f3fa]">Each demo built with Teba will look different. You can customize anything appearance of your website with only Link few clicks.</p>
                        </div>
                        <Link target='_blank' to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} className='p-3 px-4 bg-white rounded sora-500'>
                            Start a project
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" mx-auto w-full sm:px-28 px-4 mt-[12rem] pt-[13rem] bg-[#040D43]">
                <div className="py-8 ">
                    <div className="flex flex-wrap">
                        <div className="w-full mb-8 lg:w-1/3 md:w-full xl:mb-0">
                            <div className="optech-footer-textarea text-[#fff]">
                                <Link to="/">
                                    <img src={""} alt="Logo" className="mb-4" />
                                </Link>
                                <p className="text-[#e0e4ff] mb-4 sora-300 leading-8 text-[0.9rem] hover:text-white pr-10">
                                    Transform your vision into reality with our expert IT services. From innovative development to tailored solutions, we engineer every project for success, ensuring your goals are achieved with precision and excellence.
                                </p>
                                <div className="">
                                    <ul>
                                        <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white">
                                            <Link to="tel:123" className="flex items-center gap-2">
                                                <MdCall className='text-[1.3rem]' /> +91 6207234759
                                            </Link>
                                        </li>
                                        <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white">

                                            <Link to="mailto:name@email.com" className="flex items-center gap-2">
                                                <MdMail className='text-[1.3rem]' />mthemeus@example.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-8 xl:w-1/6 md:w-1/3 md:mb-0">
                            <div className=" text-[#fff]">
                                <h5 className="sora-500 text-[1.1rem]  ">Quick Links</h5>
                                <div className='flex gap-1'>
                                    <div className='w-[2.5rem] h-[2.8px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='w-[1rem] h-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='size-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>

                                </div>
                                <ul>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/about-us">About Us</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/team">Our Team</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/pricing">Pricing</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/blog">Blogs</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full mb-8 xl:w-1/4 md:w-1/3 md:mb-0">
                            <div className="optech-footer-menu text-[#fff]">
                                <h5 className="sora-500 text-[1.1rem]">Services</h5>
                                <div className='flex gap-1'>
                                    <div className='w-[2.5rem] h-[2.8px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='w-[1rem] h-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='size-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>

                                </div>
                                <ul>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/">UI/UX Design</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/">App Development</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/">Digital Marketing</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/">Web Development</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/">Cyber Security</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/6 md:w-1/3">
                            <div className="optech-footer-menu text-[#fff]">
                                <h5 className="sora-500 text-[1.1rem]">Information</h5>
                                <div className='flex gap-1'>
                                    <div className='w-[2.5rem] h-[2.8px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='w-[1rem] h-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>
                                    <div className='size-[3.5px] bg-white mb-4 mt-2 rounded-full'></div>

                                </div>
                                <ul>
                                    <li className=" sora-300 leading-8 text-[0.9rem] hover:text-white text-[#e0e4ff]"><Link to="/">Working Process</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/">Privacy Policy</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/">Terms &amp; Conditions</Link></li>
                                    <li className="text-[#e0e4ff] sora-300 leading-8 text-[0.9rem] hover:text-white"><Link to="/">Faqs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sora-400 text-[1rem] text-center py-4 text-[#fff]">
                    <p> Copyright © 2024 Site Nest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
