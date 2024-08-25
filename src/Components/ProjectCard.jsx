import React from 'react';
import icon from '../assets/icon2.svg';
import service from '../assets/service2.png';

const ProjectCard = () => {
    return (
        <div className="relative bg-white rounded-[1rem] shadow-lg overflow-hidden max-w-[18rem]  group  hover:shadow-xl">
            <img src={service} alt="Service" className="w-full translate-transform duration-700 group-hover:scale-[1.15] h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040D43] via-transparent to-transparent flex items-end justify-center hover:from-[10%] hover:from-[#2B4DFF]  hover:to-transparent transition-all duration-300">
                <div className="relative z-10 text-center text-white mb-7">
                    <a href="/single-service" tabIndex="0" className="text-[1.4rem] sora-600 leading-tight">
                        <h2>Sasco Creation</h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
