import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { AiOutlineHeart } from "react-icons/ai"
import img1 from "../public/png1.png"
import img2 from "../public/png2.png"
import img3 from "../public/png3.png"
import img4 from "../public/png4.png"
import Link from 'next/link'




function SingleProperty(props) {
    return (
        <>
            <div className='border rounded-[4px] overflow-hidden shadow-md'>
                <div className=' h-[290px] relative w-full text-white'>
                    <img className='w-full h-full' src={props.img} alt="" />
                    <a href="" className='absolute flex items-center top-2 right-6'>
                        <div><CiLocationOn className='text-2xl transition duration-700 hover:rotate-[360deg]' /></div>
                        موقعیت
                    </a>
                    <a href="" className='absolute flex items-center bottom-6 left-6'>
                        <div><AiOutlineHeart className='text-4xl transition duration-700 hover:text-red-600 hover:rotate-[360deg]' /></div>
                    </a>
                </div>
                <div>
                    <div className='flex flex-col py-3 '>
                        <div className=' p-[15px] text-[#09192A] text-lg font-semibold '>
                            <p className='px-[15px] float-right'>ویلا رشت با باغ و تراس زیبا</p>
                        </div>
                        <div className='grid grid-cols-5 border-t'>
                            <div className='flex flex-col items-center'>
                                <p>پارکینگ</p>
                                <div className='flex gap-2'>
                                    <img src={img1.src} className='w-6 h-6' alt="#" />
                                    <span>1</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p>حمام</p>
                                <div className='flex gap-2'>
                                    <img src={img2.src} className='w-6 h-6' alt="#" />
                                    <span>2</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p>تعداد خواب</p>
                                <div className='flex gap-2'>
                                    <img src={img3.src} className='w-6 h-6' alt="#" />
                                    <span>9</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center col-span-2'>
                                <p>متراژ</p>
                                <div className='flex gap-2'>
                                    <img src={img4.src} className='w-6 h-6' alt="#" />
                                    <span className='text-xs'>2561M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-t'>
                        <div className='flex pt-5 justify-evenly'>
                            <div>
                                <Link href={String(props.links)}>
                                    <button className='py-[7px] px-[20px] hover:bg-[#6f42c1] duration-300 transition hover:shadow-2xl rounded bg-[#09192A] text-[#fff]'>جزئیات ملک</button>
                                </Link>
                            </div>
                            <div className='float-left py-2'>
                                <div>
                                    <p className='text-[#8224e3] float-right'>برای فروش</p>
                                </div>
                                <span className='text-xl font-extrabold'>3,045,000 تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProperty