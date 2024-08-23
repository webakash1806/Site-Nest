import React from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import shape1 from '../assets/shape1.svg'
import shape2 from '../assets/shape2.svg'
import icon1 from '../assets/icon1.svg'
import icon10 from '../assets/icon10.svg'
import icon3 from '../assets/icon3.svg'
const DetailSection = () => {
    return (
        <div className='flex flex-col px-[5vw] gap-8 md:flex-row-reverse md:justify-around items-center justify-center py-28 my-20 lg:pb-40'>
            <div className='max-w-[28rem] relative sm:mb-36 md:mb-0 sm:ml-16 md:ml-0 lg:ml-20'>
                <img src={about1} className='w-full relative z-[10]' alt="" />
                <img src={about2} alt="" className='w-[60%] hidden md:hidden lg:block sm:block z-[11] absolute bottom-[-100px] left-[-100px]' />
                <img src={shape1} alt="" className='w-[28%] hidden md:hidden lg:block sm:block  absolute top-[85px] left-[-80px]' />
                <img src={shape2} alt="" className='w-[26%] hidden md:hidden lg:block sm:block absolute bottom-[-92px] right-[140px]' />
            </div>
            <div className='max-w-[33rem] md:max-w-[32rem] md:mt-2'>
                <h1 className='sora-600 leading-[3rem] mb-4 text-[2.5rem] text-[#0A165D]'>Providing IT solutions & services for startups</h1>

                <div className='flex mt-8 gap-3 items-start justify-center'>
                    <div className='bg-[#EEF1FF] mt-1 w-fit p-4 rounded-md'>
                        <img src={icon10} alt="" className='w-[4.5rem]' />
                    </div>
                    <div>
                        <h1 className='text-[1.35rem] text-[#0A165E] sora-600 mb-3'>Quality Solution for Business</h1>
                        <p className='sora-400 leading-6 text-[#535760]'>Each demo built with Teba will look different. customize almost anything in the appearance of your</p>

                    </div>
                </div>
                <div className='flex gap-3 my-10 items-start justify-center'>
                    <div className='bg-[#EEF1FF] mt-1 w-fit p-4 rounded-md'>
                        <img src={icon1} alt="" className='w-[4.5rem]' />
                    </div>
                    <div>
                        <h1 className='text-[1.35rem] text-[#0A165E] sora-600 mb-3'>Amazing Expert Teams</h1>
                        <p className='sora-400 leading-6 text-[#535760]'>Each demo built with Teba will look different. customize almost anything in the appearance of your</p>

                    </div>
                </div>
                <div className='flex gap-3 items-start justify-center'>
                    <div className='bg-[#EEF1FF] mt-1 w-fit p-4 rounded-md'>
                        <img src={icon3} alt="" className='w-[4.5rem]' />
                    </div>
                    <div>
                        <h1 className='text-[1.35rem] text-[#0A165E] sora-600 mb-3'>Urgent Support For Clients</h1>
                        <p className='sora-400 leading-6 text-[#535760]'>Each demo built with Teba will look different. customize almost anything in the appearance of your</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailSection
