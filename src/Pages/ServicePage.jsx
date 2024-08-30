import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs'

import ServiceCard from '../Components/ServiceCard'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.webp'
import WebsiteDevelopmentCard from '../Components/WebsiteDevelopmentCard'
import DetailSection from '../Components/DetailSection'
import CTAsection from '../Components/CTAsection'
import WorkingProcess from '../Components/WorkingProcess'

const ServicePage = () => {
    const phoneNumber = "916207234759"; // Replace with your phone number
    const message = "Hello! I would like to start a project.";
    const data = [
        {
            title: "Ecommerce Setup <br/> Services",
            icon: icon1,
            image: service1,
            link: "/services/e-commerce-services",

        },
        {
            title: "Website Development <br/> Services",
            icon: icon2,
            image: service2,
            link: "/services/web-services",
        }, {
            title: "Graphic Designing <br/> Services",
            icon: icon3,
            image: service3,
            link: "/services/graphic-services",
        }, {
            title: `Digital Marketing <br/> Services`,
            icon: icon4,
            image: service4,
            link: "/services/digital-marketing-services",
        },
    ]
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Services' },
    ];

    return (
        <div className='overflow-x-hidden'>
            <BreadCrumbs headText={"Our Services"} items={breadcrumbItems} />

            <div className='flex flex-col items-center justify-center mt-20 mb-20 lg:mt-28'>
                <h1 className='sora-700 leading-[3rem] text-center mb-4 text-[2.2rem] md:text-[3rem] md:leading-[3.3rem] max-w-[25rem] sm:max-w-full text-[#0A165D]'>Our <br className='md:hidden' /> awesome services to <br className='hidden sm:block' /> give you success</h1>
                <div className='grid gap-8 mt-4 grid-1 sm:grid-cols-2 lg:grid-cols-4'>
                    {data?.map((dat, ind) => <ServiceCard key={ind} data={dat} />)}
                </div>
            </div>
            <WorkingProcess />

            <CTAsection
                text="Looking to get a free quotation for our services?
                Contact us today and receive a detailed quotation tailored to your needs!"
                msg={"Contact us"}
                to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            />
            <DetailSection />


            <WebsiteDevelopmentCard />

        </div>
    )
}

export default ServicePage
