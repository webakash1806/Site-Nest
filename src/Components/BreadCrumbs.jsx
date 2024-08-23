import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md';

const BreadCrumbs = ({ items, headText }) => {
    return (
        <div className='bg-[#040D43] relative flex flex-col items-center justify-center py-10'>
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: `radial-gradient(#fff 1.5px, transparent 1.5px)`,
                    backgroundSize: '30px 30px',
                    opacity: 0.2,
                }}
            ></div>
            <h1 className='text-white sora-600 text-[2.2rem] mb-2'>{headText}</h1>
            <nav className="flex items-center relative z-[10]  justify-center p-1 space-x-2 text-gray-300">
                {items?.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <span className="text-white"><MdKeyboardArrowRight className='text-[1.5rem] mt-[0.2rem]' /></span>}
                        {item.href ? (
                            <Link
                                to={item.href}
                                className="hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="font-semibold text-gray-200">{item.label}</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </div>
    )
}

export default BreadCrumbs
