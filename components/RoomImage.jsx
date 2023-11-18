import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { GrWaypoint } from "react-icons/gr"
function RoomImage() {
    return (
        <div className='border rounded-[10px] overflow-hidden shadow-md relative'>
            <div className='pb-5 mb-3 border-b'>
                <div className='pt-5 px-[30px]'>
                    <div className='flex flex-col '>
                        <div className='mb-[10px] flex justify-start'>
                            <h5 className=''>خانه هوشمند بزرگ و مدرن</h5>
                        </div>
                        <div className='flex justify-end gap-2 text-sm'>
                            <a href="#" className='flex gap-2'>
                                <div><GrWaypoint className='text-xl transition duration-700 hover:rotate-[360deg]' /></div>
                                <span>نمایش روی نقشه</span>
                            </a>
                            <a href="#" className='flex gap-2'>
                                <div><CiLocationOn className='text-2xl transition duration-700 hover:rotate-[360deg]' /></div>
                                <span>موقعیت</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-3 border-b'>
                <div className='pb-4 mb-3 mr-5 ml-7 '>
                    <p className='text-[#6f6f89] text-sm font-light'>1100 متر زمین درون شهرک 500 متر بنای شیک و5 سال ساخت 4 خواب 4 سرویس 2 تراس شمالی جنوبی در این ویلا قرار دارد فاصله ویلای شهرک تا کوه وجنگل 2 دقیقه با پلاژ ساحلی فاصله ویلا تا ساحل دریا 2 دقیقه شهرک دارای 40 واحد ویلایی موجود است.</p>
                </div>
            </div>
            <div>
                <div className='mb-4 border-b'>

                    <div className='flex justify-end gap-6 px-10 py-2'>
                        <div className='flex flex-col items-center'>
                            <p className='text-sm'>پارکینگ</p>
                            <div className='flex gap-2'>
                                <img src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/single-property/1.jpg" className='w-6 h-6' alt="#" />
                                <span>1</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-sm'>تعداد خواب</p>

                            <div className='flex gap-2'>
                                <img src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/single-property/1.jpg" className='w-6 h-6' alt="#" />
                                <span>2</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-sm'>حمام</p>
                            <div className='flex gap-2'>
                                <img src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/single-property/1.jpg" className='w-6 h-6' alt="#" />
                                <span>9</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center col-span-2'>
                            <p className='text-sm'>متراژ</p>
                            <div className='flex gap-2'>
                                <img src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/single-property/1.jpg" className='w-6 h-6' alt="#" />
                                <span className='text-xs'>2561M</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-around py-4 md:flex-row'>
                <button className='py-[7px] px-[20px] rounded bg-[#09192A] text-[#fff]'>جزئیات ملک</button>
                <div>
                    <div className=''>
                        <div className='w-full '>
                            <p className='float-right'>برای فروش</p>
                        </div>
                        <div className='inline-block'>
                            <span>  345,000,000 </span><span>تومان </span>
                            <span className='text-white rounded-full bg-[#8224e3] px-3'>بهترین معامله</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomImage