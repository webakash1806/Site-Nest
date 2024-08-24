import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs'
import illustration1 from '../assets/illustration1.svg'
import illustration2 from '../assets/illustration2.svg'
import illustration3 from '../assets/illustration3.svg'
import line from '../assets/line.png'
import ServiceCard from '../Components/ServiceCard'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'
import WebsiteDevelopmentCard from '../Components/WebsiteDevelopmentCard'
import DetailSection from '../Components/DetailSection'
import CTAsection from '../Components/CTAsection'

const ServicePage = () => {

    const data = [
        {
            title: "Ecommerce Setup <br/> Services",
            icon: icon1,
            image: service1,
            link: "/services/ecommerce-services"
        },
        {
            title: "Website Development <br/> Services",
            icon: icon2,
            image: service2,
            link: "/services/web-services"
        }, {
            title: "Graphic Designing <br/> Services",
            icon: icon3,
            image: service3,
            link: "/services/graphic-services"
        }, {
            title: `Digital Marketing <br/> Services`,
            icon: icon4,
            image: service4,
            link: "/services/digital-marketing-services"
        },
    ]
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Services' },
    ];

    return (
        <div className='overflow-x-hidden'>
            <BreadCrumbs headText={"Our Services"} items={breadcrumbItems} />
            <div className="container relative mx-auto mt-10 px-4 py-8">
                {/* Section Title */}
                <div className="text-center flex flex-col items-center justify-center mb-12 mx-auto max-w-[28rem] sora-700">
                    <h2 className="text-3xl text-[#040D43]">Our working process on how to grow your business</h2>
                </div>

                {/* Process Steps */}
                <div className="flex container w-fit lg:justify-around mx-auto lg:gap-20  flex-col  lg:flex-row">
                    {/* Step 1 */}
                    <div className=" px-4 mb-8" data-aos="fade-up" data-aos-duration="600">
                        <div className="flex flex-col items-center ">

                            <div className="w-[15rem] h-[15rem] flex-shrink-0">

                                <img src={illustration1} alt="Initiation & Planning" className="w-full h-full object-contain" />
                            </div>
                            <div className='flex items-center text-center max-w-[20rem] justify-center flex-col'>
                                <span className="text-xl font-bold bg-[#2B4DFF] text-white p-[9.5px] size-12 rounded-full">01</span>
                                <h4 className="text-xl font-semibold mt-2">Initiation & Planning</h4>
                                <p className="mt-2 text-gray-700 sora-400 text-[0.95rem]">We are architects innovation trailblazers of technological advancement</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className=" px-4 mb-8" data-aos="fade-up" data-aos-duration="800">
                        <div className="flex flex-col items-center ">
                            <div className="w-[15rem] h-[15rem] flex-shrink-0">

                                <img src={illustration2} alt="Execution & Development" className="w-full h-full object-contain" />
                            </div>
                            <div className='flex items-center text-center justify-center flex-col max-w-[20rem]'>
                                <span className="text-xl font-bold bg-[#2B4DFF] text-white p-[9.5px] size-12 rounded-full">02</span>

                                <h4 className="text-xl font-semibold mt-2">Execution & Development</h4>
                                <p className="mt-2  text-gray-700 sora-400 text-[0.95rem]">We are architects innovation trailblazers of technological advancement</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className=" px-4 mb-8" data-aos="fade-up" data-aos-duration="1000">
                        <div className="flex flex-col items-center ">

                            <div className="w-[15rem] h-[15rem] flex-shrink-0">
                                <img src={illustration3} alt="Testing & Maintenance" className="w-full h-full object-contain" />
                            </div>
                            <div className='flex items-center text-center max-w-[20rem] justify-center flex-col'>
                                <span className="text-xl font-bold bg-[#2B4DFF] text-white p-[9.5px] size-12 rounded-full">03</span>

                                <h4 className="text-xl font-semibold mt-2">Testing & Maintenance</h4>
                                <p className="mt-2 text-gray-700 sora-400 text-[0.95rem]">We are architects innovation trailblazers of technological advancement</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line Image */}
                <div className="flex absolute w-full items-center top-[24rem] z-[-1] justify-center mt-8">
                    <img src={line} alt="Line" className="w-fit hidden lg:block" />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-20 lg:mt-28 mb-20'>
                <h1 className='sora-700 leading-[3rem] text-center mb-4 text-[2.2rem] md:text-[3rem] md:leading-[3.3rem] max-w-[25rem] sm:max-w-full text-[#0A165D]'>Our <br className='md:hidden' /> awesome services to <br className='hidden sm:block' /> give you success</h1>
                <div className='grid-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
                    {data?.map((dat, ind) => <ServiceCard key={ind} data={dat} />)}
                </div>
            </div>

            <CTAsection
                text="Looking to get a free quotation for our services?
                Contact us today and receive a detailed quotation tailored to your needs!"

            />
            <DetailSection />


            <WebsiteDevelopmentCard />

        </div>
    )
}

export default ServicePage
