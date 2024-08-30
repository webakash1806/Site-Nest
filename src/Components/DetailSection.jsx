import React from 'react';
import detail1 from '../assets/detail1.avif';
import detail2 from '../assets/detail2.avif';
import shape1 from '../assets/shape1.svg';
import shape2 from '../assets/shape2.svg';
import icon1 from '../assets/icon5.svg';
import icon10 from '../assets/icon10.svg';
import icon3 from '../assets/icon6.svg';
import 'aos/dist/aos.css';

const DetailSection = () => {
    return (
        <div className='flex bg-[#F5F6F7] flex-col px-[5vw] gap-8 lg:flex-row-reverse lg:justify-around items-center py-28 my-20 lg:pb-40'>
            <div className='max-w-[28rem] w-full aspect-w-4 aspect-h-3 relative sm:mb-10 md:mb-0 sm:ml-16 md:ml-0 lg:ml-20' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="500">
                <img src={detail1} className='w-full h-full drop-shadow-[-3px_4px_4px_#808080] relative z-[10]' alt="Main visual" />
                <img src={detail2} alt="Supplementary image" className='w-[60%] z-[20] h-auto hidden lg:block absolute drop-shadow-[0px_5px_5px_#808080] bottom-[-100px] left-[-100px]' />
                <img src={shape1} alt="Decorative shape 1" className='w-[28%] h-auto hidden lg:block absolute top-[85px] left-[-80px]' />
                <img src={shape2} alt="Decorative shape 2" className='w-[26%] h-auto hidden lg:block absolute bottom-[-92px] right-[140px]' />
            </div>
            <div className='max-w-[33rem] md:max-w-[32rem]'>
                <h1 className='sora-600 leading-[3rem] mb-4 text-[2.5rem] text-[#0A165D]' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="900">
                    Tailored IT Solutions for Your Business
                </h1>

                <div className='flex items-start gap-3 mt-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                    <div className='bg-[#EEF1FF] p-4 rounded-md'>
                        <img src={icon10} alt="Quality Solutions Icon" className='w-[4.5rem] h-auto' />
                    </div>
                    <div>
                        <h2 className='text-[1.35rem] text-[#0A165E] sora-600 mb-3'>Quality Business Solutions</h2>
                        <p className='sora-400 leading-6 text-[#535760]'>
                            Providing high-quality IT solutions to improve business performance, drive growth, and achieve goals efficiently.
                        </p>
                    </div>
                </div>
                <div className='flex items-start gap-3 my-10' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1200">
                    <div className='bg-[#EEF1FF] p-4 rounded-md'>
                        <img src={icon1} alt="Expert Teams Icon" className='w-[4.5rem] h-auto' />
                    </div>
                    <div>
                        <h2 className='text-[1.35rem] text-[#0A165E] sora-600 mb-3'>Expert Teams</h2>
                        <p className='sora-400 leading-6 text-[#535760]'>
                            Our expert teams deliver innovative solutions that drive success and exceed expectations through collaboration.
                        </p>
                    </div>
                </div>
                <div className='flex items-start gap-3' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
                    <div className='bg-[#EEF1FF] p-4 rounded-md'>
                        <img src={icon3} alt="Urgent Support Icon" className='w-[4rem] h-auto' />
                    </div>
                    <div>
                        <h2 className='text-[1.35rem] text-[#0A165E] sora-600 mb-3'>Prompt Client Support</h2>
                        <p className='sora-400 leading-6 text-[#535760]'>
                            Offering prompt support to resolve issues swiftly and ensure uninterrupted business operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailSection;
