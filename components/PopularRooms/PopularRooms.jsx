
import React from 'react';
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Room from "../Room";
import SwiperJsButtons from "./SwiperJsButtons";

function PopularRooms() {

    return (
        <>
            <div className='image-bg pt-[195px] pb-[150px]'>
                <div className='mx-auto px-[15px] w-full'>
                    <div className='max-w-[1140px] mx-auto  '>
                        <div className='grid grid-cols-1 md:grid-cols-2 '>
                            <div className="relative">
                                <Swiper
                                    loop={true}
                                    modules={[Navigation, A11y, Pagination]}
                                    className="rounded-[10px] s">
                                    <SwiperJsButtons />

                                    <SwiperSlide>
                                        <Room />
                                    </SwiperSlide>

                                    <SwiperSlide
                                    ><Room />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Room />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularRooms