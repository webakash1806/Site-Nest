import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef();
    const location = useLocation();

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

    // Handle scroll for sticky header effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to determine if the route is active
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className={`sticky top-0 z-[50] ${isScrolled ? 'pb-0 bg-transparent' : 'py-4 bg-[#040D43]'}`}>
                <header
                    className={`transition-all overflow-x-hidden duration-300 ease-in-out ${isScrolled
                        ? 'bg-[#02082a] backdrop-blur-md text-white w-full border-b py-5 border-gray-600 rounded-none'
                        : 'bg-white text-black w-[96%]'
                        } py-4 px-6 rounded-lg mx-auto`}
                >
                    <nav className="flex justify-between items-center">
                        <div className="text-2xl font-bold">MyLogo</div>
                        <ul className="hidden md:flex space-x-6 sora-500">
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
                        </ul>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="focus:outline-none">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
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
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-[30]" onClick={() => setIsOpen(false)}></div>}
            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`fixed  w-[15rem] transition-all duration-500 top-[5.5rem] right-4 rounded-lg h-auto bg-[#f5f7ff] border-2 border-gray-300 text-gray-800 shadow-lg transform ${isOpen ? 'open-menu z-[100]' : 'close-menu z-[35]'} md:hidden`}
            >
                <ul className="mt-8 space-y-4 px-4 sora-500">
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
            </div>
        </>
    );
};

export default Header;
