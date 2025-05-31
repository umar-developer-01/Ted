"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const items = ['TED-Ed', "Psychology", "Leadership", "Education", "AI", "Sleep", "Mental Health", "Business", "Motivation", "Communication", "Personal Growth", "Sports", "Health", "Language"];

const Discover = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    // Wait until refs are assigned
    useEffect(() => {
        setIsReady(true);
    }, []);

    return (
        <div className="bg-black flex items-center px-62 py-8">
            {/* Title */}
            <div className="text-4xl text-white mr-22">
                Discover
            </div>
     
                {/* Left Arrow */}
                <button ref={prevRef} className="text-white text-3xl mr-8 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>

                {/* Swiper */}
                <div className="flex gap-10 w-[1000px]">
                    {isReady && (
                        <Swiper
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            slidesPerView="auto"
                            spaceBetween={45}
                        >
                            {items.map((item, index) => (
                                <SwiperSlide key={index} className="!w-auto">
                                    <div className="bg-[#494949] text-white px-4 py-3 text-xl rounded-md">
                                        {item}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                {/* Right Arrow */}
                <button ref={nextRef} className="text-white text-3xl ml-8 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
        

            {/* See All */}
            <div className="text-white text-2xl underline underline-offset-1 ml-22">
                See all
            </div>
        </div>
    );
};

export default Discover;
