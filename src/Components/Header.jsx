import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaSquarePhone, FaSquarePhoneFlip, FaSquareXTwitter } from "react-icons/fa6";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef();
    const location = useLocation();

    // Debounce function
    const debounce = (func, delay) => {
        let timeout;
        return function (...args) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const toggleMenu = (event) => {
        event.stopPropagation(); // Prevent click event from bubbling up to the window
        setIsOpen(!isOpen);
    };

    // Close menu on click outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleOutsideClick);
        } else {
            window.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    // Handle scroll for sticky header effect with debounce
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Debounced handleScroll function
        const debouncedHandleScroll = debounce(handleScroll, 100);

        window.addEventListener('scroll', debouncedHandleScroll);

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, []);

    // Function to determine if the route is active
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className={`sticky top-0 z-[50] ${isScrolled ? 'pb-0 bg-transparent' : 'py-5 bg-[#040D43]'}`}>
                <header
                    className={`transition-all overflow-x-hidden duration-300 ease-in-out ${isScrolled
                        ? 'bg-[#02082a] backdrop-blur-lg text-white w-full border-b py-3 sm:py-4 md:py-6 border-gray-600 rounded-none'
                        : 'bg-white py-4 md:py-5 text-black w-[96%]'
                        }  px-4 rounded-lg mx-auto`}
                >
                    <nav className="flex items-center justify-between">
                        <div className="text-xl font-bold">MyLogo</div>
                        <ul className="hidden space-x-6 lg:flex sora-500">
                            <li>
                                <Link
                                    to="/"
                                    className={`border-b-2 transition-all duration-300 ${isActive('/') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Services"
                                    className={`border-b-2 transition-all duration-300 ${isActive('/Services') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/web-services"
                                    className={`border-b-2 transition-all duration-300 ${isActive('/services/web-services') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                                >
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/graphic-services"
                                    className={`border-b-2 transition-all duration-300 ${isActive('/services/graphic-services') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                                >
                                    Graphic Design
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/About"
                                    className={`border-b-2 transition-all duration-300 ${isActive('/About') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Contact"
                                    className={`border-b-2 transition-all duration-300 ${isActive('/Contact') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className='text-[1.45rem] flex items-center gap-2'>
                                <Link to={"https://www.instagram.com/binarywisetech/?hl=en"} target='_blank' className=''>
                                    <FaInstagramSquare />
                                </Link>
                                <Link to={""} className=''>
                                    <FaFacebookSquare />
                                </Link>
                                <Link to={""} className=''>
                                    <FaSquareXTwitter />
                                </Link>
                                <Link to={""} className=''></Link>
                            </li>
                        </ul>
                        <div className="lg:hidden">
                            <button aria-label="Menu icon" onClick={toggleMenu} className="">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 21 21"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </header>
            </div>
            {/* Black Overlay */}
            {isOpen && <div className="fixed inset-0 bg-[#00072c] opacity-70 z-[30]" onClick={() => setIsOpen(false)}></div>}
            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`fixed flex flex-col justify-between w-[15rem] transition-all duration-500  right-4 rounded-lg h-auto bg-[#f5f7ff] border-2 border-gray-300 text-gray-800 shadow-lg transform ${isOpen ? 'open-menu z-[100] top-[5.5rem]' : 'close-menu z-[35] top-[3.5rem]'} lg:hidden`}
            >
                <ul className="px-4 mt-8 space-y-4 sora-500">
                    <li>
                        <Link
                            to="/"
                            className={`border-b-2 transition-all duration-300 ${isActive('/') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Services"
                            className={`border-b-2 transition-all duration-300 ${isActive('/Services') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services/web-services"
                            className={`border-b-2 transition-all duration-300 ${isActive('/services/web-services') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Web Development
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services/graphic-services"
                            className={`border-b-2 transition-all duration-300 ${isActive('/services/graphic-services') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Graphic Design
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/About"
                            className={`border-b-2 transition-all duration-300 ${isActive('/About') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Contact"
                            className={`border-b-2 transition-all duration-300 ${isActive('/Contact') ? 'text-[#2B4DFF] border-[#2B4DFF]' : 'border-transparent hover:text-[#2B4DFF] hover:border-[#2B4DFF]'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>

                </ul>
                <div className='text-[1.68rem] w-fit mx-auto mb-6 flex items-center gap-3'>
                    <Link to={"https://www.instagram.com/binarywisetech/?hl=en"} target='_blank' className=''>
                        <FaInstagramSquare />
                    </Link>
                    <Link to={""} className=''>
                        <FaFacebookSquare />
                    </Link>
                    <Link to={""} className=''>
                        <FaSquareXTwitter />
                    </Link>
                    <Link to={"https://wa.me/916207234759"} target='_blank' className=''>
                        <FaWhatsappSquare />
                    </Link>
                    <Link to={"tel:+916207234759"} className=''>
                        <FaSquarePhone />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
