import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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

    return (
        <>
            <div className={`sticky top-0 z-[50] ${isScrolled ? "pb-0 bg-transparent" : "py-4 bg-[#040D43]"}`}>
                <header className={`transition-all overflow-x-hidden duration-300 ease-in-out ${isScrolled ? 'bg-[#02082a]  backdrop-blur-md text-white w-full border-b py-5 border-gray-600 rounded-none' : 'bg-white text-black w-[96%]'} py-4 px-6 rounded-lg mx-auto`}>
                    <nav className="flex justify-between items-center">
                        <div className="text-2xl font-bold">MyLogo</div>
                        <ul className="hidden md:flex space-x-6">
                            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                            <li><Link to="/Services" className="hover:text-blue-500">Services</Link></li>
                            <li><Link to="/About" className="hover:text-blue-500">About</Link></li>
                            <li><Link to="/Contact" className="hover:text-blue-500">Contact</Link></li>
                        </ul>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </header>
            </div>
            <div className={`fixed z-[1000] top-0 right-0 h-full w-64 bg-white text-gray-800 shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className="mt-8 space-y-4 px-4">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to="/Services" className="hover:text-blue-500">Services</Link></li>
                    <li><Link to="/About" className="hover:text-blue-500">About</Link></li>
                    <li><Link to="/Contact" className="hover:text-blue-500">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Header;
