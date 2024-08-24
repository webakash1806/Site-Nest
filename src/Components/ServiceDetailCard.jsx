// src/components/ServiceDetailCard.jsx

import React from 'react';

const ServiceDetailCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-[#040D43] h-[17rem] hover:bg-gradient-to-b hover:from-transparent group hover:via-[#2a4eff63] hover:to-[#2a4eff] shadow-lg rounded-lg p-6 max-w-xs mx-auto hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center">
            {/* Icon */}
            <div className="flex justify-center mb-4 text-2xl bg-[#2A4CFF] w-fit mx-auto group-hover:bg-white group-hover:text-[#2a4eff] text-white p-4 rounded-md transition-all duration-500">
                <Icon />
            </div>

            {/* Title */}
            <h3 className="text-xl sora-500  text-center text-white mb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-100 text-center">
                {description}
            </p>
        </div>
    );
};

export default ServiceDetailCard;
