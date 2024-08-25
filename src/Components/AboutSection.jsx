import React from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import shape1 from '../assets/shape1.svg'
import shape2 from '../assets/shape2.svg'
import { Link } from 'react-router-dom'
const AboutSection = () => {
    return (
        <div className='flex bg-[#F5F6F7] flex-col px-[5vw] gap-8 md:flex-row md:justify-around items-center justify-center py-28 lg:pb-40'>
            <div className='max-w-[28rem] w-full aspect-w-4 aspect-h-3  relative sm:mb-36 md:mb-0 sm:mr-16 md:mr-0 lg:mr-20'>
                <img src={about1} className='w-full h-full relative z-[10]' alt="About main image" />
                <img src={about2} alt="About short image" className='w-[60%] hidden md:hidden lg:block sm:block z-[11] absolute bottom-[-100px] right-[-100px]' />
                <img src={shape1} alt="Shape 1" className='w-[28%]  hidden md:hidden lg:block sm:block  absolute top-[85px] right-[-80px]' />
                <img src={shape2} alt="Shape 2" className='w-[26%]  hidden md:hidden lg:block sm:block absolute bottom-[-92px] left-[140px]' />
            </div>
            <div className='max-w-[33rem] md:max-w-[30rem] md:mt-2'>
                <h1 className='sora-600 leading-[3rem] mb-4 text-[2.5rem] text-[#0A165D]'>Exclusive technology to provide IT solutions</h1>
                <p className='sora-400 leading-[1.85rem] text-[#535760]'>Leveraging exclusive technology to deliver cutting-edge IT solutions that streamline operations, enhance productivity, and drive digital transformation for businesses across diverse industries and sectors.</p>
                <div className='flex my-12'>
                    <div className='w-[50%]'>
                        <p className='sora-600 text-[3.2rem] leading-[3rem] tracking-wide text-[#0A165D]'>70+</p>
                        <p className='sora-400 text-[#535760]'>Happy Clients</p>
                    </div>
                    <div className='w-[50%]'>
                        <p className='sora-600 text-[3.2rem] leading-[3rem] tracking-wide text-[#0A165D]'>50+</p>
                        <p className='sora-400 text-[#535760]'>Projects delivered</p>
                    </div>
                </div>
                <Link to={'/about'}
                    className="relative flex items-center px-8  py-4 overflow-hidden w-fit font-medium transition-all bg-[#2B4DFF] rounded-md group"
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
                        className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                    >More about us</span
                    >
                </Link>

            </div>
        </div>
    )
}

export default AboutSection
