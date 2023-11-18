import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaAngleRight } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa"
function SwiperJsButtons() {
    const swiper = useSwiper()
    return (
        <>
            <div className=''>
                <button onClick={() => swiper.slidePrev()} className="absolute z-[99999] inline-block p-1 bg-[#004E60] text-white w-11 h-11 font-semibold text-3xl rounded-full md:-right-5 right-2  top-2/4"><FaAngleRight /></button>
                <button onClick={() => swiper.slideNext()} className="absolute z-50 inline-block p-2 bg-[#004E60] text-white w-11 h-11 rounded-full font-semibold text-3xl md:-left-5  left-2 top-2/4"><FaAngleLeft /></button>
            </div>
        </>
    )
}

export default SwiperJsButtons