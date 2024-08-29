import React, { useEffect, useRef, useState } from 'react';
import clientImages from '../Hooks/clientsLogo';
import { Autoplay, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional: Add effect CSS

const Client = () => {
    SwiperCore.use([Autoplay, Pagination]);
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const handleScroll = () => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial scroll position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const width = window.innerWidth;

    return (
        <div
            ref={sectionRef}
            className="relative shadow-md w-full mx-auto py-3 pt-6 z-[10] bg-[#F4F6F8]"
        >
            <h2 className="text-[1.7rem] font-bold mb-3 text-center sora-700 text-[#040D43] md:text-4xl">
                Our Happy Clients
            </h2>
            {isInView && (
                <Swiper
                    slidesPerView={width / 130}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    className="mySwiper"
                    speed={4000}
                >
                    {clientImages.concat(clientImages).map((img, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <LazyLoadImage
                                src={img}
                                alt={`Client ${index + 1}`}
                                className="w-[90px] h-[90px] cursor-pointer  duration-300 "
                                effect="blur" // Optional: Use "blur" effect on lazy load
                                placeholderSrc="/path/to/placeholder-image.jpg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default Client;
