import React from 'react';
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
    const width = window.innerWidth;

    return (
        <div className="relative shadow-md w-full mx-auto mt-2 z-[10] bg-[#F4F6F8]">

            <Swiper
                slidesPerView={width / 120}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                className="mySwiper"
                speed={500}
            >
                {clientImages.concat(clientImages).map((img, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <LazyLoadImage
                            src={img}
                            alt={`Client ${index + 1}`}
                            className="w-[90px] cursor-pointer"
                            effect="blur" // Optional: Use "blur" effect on lazy load
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Client;
