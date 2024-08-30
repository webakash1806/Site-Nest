import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquarePhone, FaSquareXTwitter } from 'react-icons/fa6';
import CalendlyButton from './Calendly';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef();
    const location = useLocation();

    // Debounce function
    const debounce = useCallback((func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    }, []);

    const toggleMenu = (event) => {
        event.stopPropagation(); // Prevent click event from bubbling up to the window
        setIsOpen((prev) => !prev);
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
            setIsScrolled(window.scrollY > 50);
        };

        const debouncedHandleScroll = debounce(handleScroll, 50);
        window.addEventListener('scroll', debouncedHandleScroll);

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, [debounce]);

    // Function to determine if the route is active
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className={`sticky top-0 z-[10001] ${isScrolled ? 'pb-0 bg-transparent' : 'py-5 bg-[#040D43]'}`}>
                <header
                    className={`transition-all overflow-x-hidden duration-300 z-[10002] ease-in-out ${isScrolled
                        ? 'bg-[#02082a] backdrop-blur-lg text-white w-full border-b py-3 sm:py-4 md:py-4 border-gray-600 rounded-none'
                        : 'bg-white py-4 md:py-5 lg:py-3 text-black w-[96%] md:w-[97%]'
                        }  px-4 rounded-lg mx-auto`}
                >
                    <nav className="flex items-center justify-between">
                        <div className="text-xl font-bold">MyLogo</div>
                        <ul className="hidden space-x-6 lg:flex lg:items-center sora-500">
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
                            <li>
                                <Link to={'/schedule-meeting'}>
                                    <button className='bg-[#3B5AFF] hover:bg-[#1e44ff]  text-white w-full p-[8px] text-[0.95rem] px-5 rounded-md'>
                                        Book a Meeting
                                    </button>
                                </Link>
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
            {isOpen && <div className="fixed inset-0 bg-[#00072c] opacity-70 z-[10000]" onClick={() => setIsOpen(false)}></div>}
            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`fixed flex flex-col justify-between w-[15rem] transition-all duration-500 right-2  sm:right-4 rounded-lg h-auto bg-[#f5f7ff] border-2 border-gray-300 text-gray-800 shadow-lg   transform ${isOpen ? isScrolled ? 'open-menu z-[10001] top-[3.8rem] sm:top-[4.5rem] md:top-[5.4rem]' : 'open-menu top-[5.8rem] z-[10001] mr-1 sm:mr-0 sm:top-[5.7rem] md:top-[6.2rem]' : 'close-menu top-[3.2rem] sm:top-[3.7rem] z-[35]  border-0'} lg:hidden `}
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
                    <Link className='' to={'/schedule-meeting'} onClick={() => setIsOpen(false)}>
                        <button className='bg-[#3B5AFF] mt-4 hover:bg-[#1e44ff]  text-white w-full p-[9px] tracking-wide text-[0.95rem] rounded-md'>
                            Book a Meeting
                        </button>
                    </Link>
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
