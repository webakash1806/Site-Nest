import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonial = () => {

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            content: "Great service! Highly recommended.",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Jane Smith",
            content:
                "I had a fantastic experience. The team was professional and friendly.",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Michael Johnson",
            content:
                "Quick and reliable service. Will use again in the future for sure!",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Emily Davis",
            content: "The best experience I have had with any service provider.",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: "David Brown",
            content: "Their attention to detail and customer service is unmatched!",
            image: "https://via.placeholder.com/150",
        },
        // Add more testimonials as needed
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 0.5,
        autoplay: true,
        autoplaySpeed: 5000,
        vertical: true,  // Enable vertical scrolling
        verticalSwiping: true,  // Enable vertical swiping
        pauseOnHover: true,
        arrows: false, // Remove arrows
        rows: 1, // Use only one row for the grid
        slidesPerRow: 3, // 3 columns per row
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesPerRow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                },
            },
        ],
    };

    const TestimonialCard = ({ testimonial }) => {
        const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const rotateX = useTransform(y, [-100, 0, 100], [10, 0, -10]);
        const rotateY = useTransform(x, [-100, 0, 100], [-10, 0, 10]);

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            setCursorPosition({
                x: ((clientX - left) / width) * 100,
                y: ((clientY - top) / height) * 100,
            });
            x.set(((clientX - left) / width - 0.5) * 90);
            y.set(((clientY - top) / height - 0.5) * -90);
        };

        const handleMouseLeave = () => {
            setCursorPosition({ x: 0, y: 0 });
            x.set(0);
            y.set(0);
        };

        return (
            <motion.div
                className="relative flex flex-col items-start w-full p-6 overflow-hidden bg-[#F5F6F7] border border-gray-200 shadow-inner gap-y-6 rounded-xl"
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div
                    className="absolute left-[-10rem] inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle ${Math.min(window.innerWidth, window.innerHeight) / 1.5}px at ${cursorPosition.x}% ${cursorPosition.y}%, #001eff0e, transparent 60%)`,
                        borderRadius: 'inherit',
                    }}
                />
                <div className="relative z-10 flex items-center gap-3">
                    <img
                        alt="profile"
                        className="object-cover w-[50px] h-[50px] rounded-full"
                        src={testimonial?.image}
                        loading="lazy"
                    />
                    <div className="flex flex-col items-start">
                        <p className="font-semibold text-[1.1rem] text-neutral-800">{testimonial?.name}</p>
                    </div>
                </div>
                <p className="font-normal text-gray-700">{testimonial?.content}</p>
            </motion.div>
        );
    };

    return (
        <>
            <div className="relative pt-10 mx-auto w-fit">
                <h1 className='sora-700 text-[#0A165D] text-[2rem]'>
                    What our clients says?
                </h1>
                <p className='text-center text-[1.2rem] sora-500 text-[#2B4DFF]'>
                    Listen by their own words.
                </p>
            </div>
            <div className="relative overflow-hidden flex flex-col h-[100vh] items-center justify-start w-full p-4 pt-10 pb-10 bg-[#fefefe]">
                <Slider {...settings} className="w-full max-w-screen-xl">
                    {testimonials?.concat(testimonials).map((testimonial, index) => (
                        <div
                            key={index}
                            className="!h-fit flex items-center justify-center px-2 py-1" // Add space between cards
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </Slider>
                <div className="absolute bottom-0 left-0 right-0 h-[30rem] z-[100] pointer-events-none bg-gradient-to-t from-white via-[#ffffffa8] to-transparent"></div>
            </div>
        </>
    );
};

export default Testimonial;