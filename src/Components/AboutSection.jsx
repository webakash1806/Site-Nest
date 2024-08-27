import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import about1 from '../assets/about1.avif';
import about2 from '../assets/about2.avif';
import shape1 from '../assets/shape1.svg';
import shape2 from '../assets/shape2.svg';
import { Link } from 'react-router-dom';

const AboutSection = ({ btn }) => {
    // Use the useInView hook to track visibility of the counters
    const { ref: counterRef, inView: counterInView } = useInView({
        triggerOnce: true, // Trigger only once when the element comes into view
        threshold: 0.8, // Element must be 50% in the viewport to trigger
    });

    return (
        <div className='flex bg-[#F5F6F7] flex-col px-[5vw] gap-8 lg:flex-row lg:justify-around items-center justify-center py-28 lg:pb-40'>
            <div className='max-w-[28rem] w-full aspect-w-4 aspect-h-3 relative sm:mb-5 md:mb-0 sm:mr-16 md:mr-0 lg:mr-20'>
                <img src={about1} className='w-full h-full drop-shadow-[-3px_4px_4px_#808080] relative z-[10]' alt="Main visual" />
                <img src={about2} alt="Supplementary image" className='w-[60%] z-[20] h-auto hidden lg:block absolute drop-shadow-[0px_5px_6px_#808080] bottom-[-100px] right-[-100px]' />
                <img src={shape1} alt="Decorative shape 1" className='w-[28%] h-auto hidden lg:block absolute top-[85px] right-[-80px]' />
                <img src={shape2} alt="Decorative shape 2" className='w-[26%] h-auto hidden lg:block absolute bottom-[-92px] right-[140px]' />   </div>
            <div className='max-w-[33rem] md:max-w-[30rem] md:mt-2'>
                <h1 className='sora-600 leading-[3rem] mb-4 text-[2.5rem] text-[#0A165D]'>Innovative Solutions for Your IT Needs.</h1>
                <p className='sora-400 leading-[1.85rem] text-[#535760]'>We offer a full range of IT services, from web development and graphic design to digital marketing, delivering innovative, customized solutions that drive business growth and help you achieve your goals effectively.</p>
                <div className='flex my-12' ref={counterRef}>
                    <div className='w-[50%]'>
                        <p className='sora-600 text-[3.2rem] leading-[3rem] tracking-wide text-[#0A165D]'>
                            {counterInView && <CountUp end={70} duration={2} suffix="+" />}
                        </p>
                        <p className='sora-400 text-[#535760]'>Happy Clients</p>
                    </div>
                    <div className='w-[50%]'>
                        <p className='sora-600 text-[3.2rem] leading-[3rem] tracking-wide text-[#0A165D]'>
                            {counterInView && <CountUp end={50} duration={2} suffix="+" />}
                        </p>
                        <p className='sora-400 text-[#535760]'>Projects delivered</p>
                    </div>
                </div>
                {btn &&
                    <Link to={'/about'}
                        className="relative flex items-center px-8 py-4 overflow-hidden w-fit font-medium transition-all bg-[#2B4DFF] rounded-md group"
                    >
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f29bd] rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f29bd] rounded group-hover:-ml-4 group-hover:-mb-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#0f29bd] rounded-md group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">More about us</span>
                    </Link>}
            </div>
        </div>
    );
}

export default AboutSection;
