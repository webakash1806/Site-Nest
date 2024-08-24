import React from 'react';
import { Link } from 'react-router-dom'

const ServiceCard = ({ data }) => {
    return (
        <Link to={data?.link} className="relative bg-white rounded-[1rem] shadow-lg overflow-hidden max-w-[18rem]  group  hover:shadow-xl">
            <img src={data?.image} alt="Service" className="w-full translate-transform duration-700 group-hover:scale-[1.15] h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040D43] via-transparent to-transparent flex items-end justify-center hover:from-[10%] hover:from-[#2B4DFF]  hover:to-transparent transition-all duration-300">
                <div className="text-center mb-7 text-white relative z-10">
                    <div className="mb-10 bg-[#2B4DFF] p-4 mx-auto w-fit rounded-lg" >
                        <img src={data?.icon} alt="Icon" className="w-8 h-auto mx-auto transition-colors duration-300 group-hover:text-[#2B4DFF]"
                            style={{ color: 'currentColor' }} />

                    </div>
                    <a href="/single-service" tabIndex="0" className="text-[1.4rem] sora-600 leading-tight">
                        <h5 dangerouslySetInnerHTML={{ __html: data?.title }} />
                    </a>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;
