import React from 'react'
import { BiLogoPinterest } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineTwitter } from "react-icons/ai"
import { BsDribbble } from "react-icons/bs"
import { BsBehance } from "react-icons/bs"
import { BsClock } from "react-icons/bs"
import { BiChevronRightCircle } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { AiOutlineMail } from "react-icons/ai"
import { BsPhone } from "react-icons/bs"
function Footer() {
    return (
        <section className='bg-[#333333] text-[#fff]'>
            <div className='flex flex-col w-full mb-10 md:flex-row'>
                <img className='w-full transition duration-500 md:w-1/5 grayscale hover:grayscale-0 hover:scale-110 hover:z-50' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/room-pic/1.jpg" alt="#" />
                <img className='w-full transition duration-500 md:w-1/5 grayscale hover:grayscale-0 hover:scale-110 hover:z-50' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/room-pic/2.jpg" alt="#" />
                <img className='w-full transition duration-500 md:w-1/5 grayscale hover:grayscale-0 hover:scale-110 hover:z-50' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/room-pic/3.jpg" alt="#" />
                <img className='w-full transition duration-500 md:w-1/5 grayscale hover:grayscale-0 hover:scale-110 hover:z-50' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/room-pic/4.jpg" alt="#" />
                <img className='w-full transition duration-500 md:w-1/5 grayscale hover:grayscale-0 hover:scale-110 hover:z-50' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/room-pic/5.jpg" alt="#" />
            </div>
            <div className='pb-[60px] w-full'>
                <img className='mx-auto' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/only-logo.png" alt="#" />
            </div>
            <div className='mx-auto '>
                <div className='grid md:grid-cols-3 grid-cols-1 pb-[37px]'>
                    <div>
                        <h5 className='mb-4 text-xl font-bold'>درباره ما</h5>
                        <p className='mb-[33px]'>به پشتوانه سال ها تجربه و فعالیت در حوزه ساخت و ساز شهرک های ویلایی و با اعتباری که موفق به کسب آن در طی سالیان شده است</p>
                        <div className='flex justify-around text-[#fff]'>
                            <a className='p-2 transition duration-300 hover:bg-[#09192A] rounded-full' href="">
                                <BiLogoPinterest className='cursor-pointer ' />
                            </a>
                            <a className='p-2 transition duration-300 hover:bg-[#09192A] rounded-full' href="">
                                <BiLogoFacebook className='cursor-pointer ' />
                            </a>
                            <a className='p-2 transition duration-300 hover:bg-[#09192A] rounded-full' href="">
                                <AiOutlineTwitter className='cursor-pointer ' />
                            </a>
                            <a className='p-2 transition duration-300 hover:bg-[#09192A] rounded-full' href="">
                                <BsDribbble className='cursor-pointer ' />
                            </a>
                            <a className='p-2 transition duration-300 hover:bg-[#09192A] rounded-full' href="">
                                <BsBehance className='cursor-pointer ' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5 className='mb-4 text-xl font-bold'>آخرین مطالب بلاگ</h5>
                        <div className='flex'>
                            <div className='ml-[30px] mb-[27px]'>
                                <img className='rounded-md' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/footer-blog-1.jpg" alt="#" />
                            </div>
                            <div>
                                <h6 className='mb-[8px]'>چطور در استان گیلان ویلا بخریم؟</h6>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <BsClock className='text-xl transition duration-700 hover:rotate-[360deg]' />
                                        <span className='text-[#004E60] text-xs font-semibold'>27 مهر سال 98</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <BiChevronRightCircle className='text-2xl transition duration-700 hover:rotate-[360deg]' />
                                        <span className='text-[#004E60] text-xs font-semibold hover:text-black duration-300 transition cursor-pointer'> مطالعه بیشتر</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <div className='ml-[30px] mb-[27px]'>
                                    <img className='rounded-md' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/footer-blog-2.jpg" alt="#" />
                                </div>
                                <div>
                                    <h6 className='mb-[8px]'>چطور در استان گیلان ویلا بخریم؟</h6>
                                    <div className='flex gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <BsClock className='text-xl transition duration-700 hover:rotate-[360deg]' />
                                            <span className='text-[#004E60] text-xs font-semibold '>27 مهر سال 98</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <BiChevronRightCircle className='text-2xl transition duration-700 hover:rotate-[360deg]' />
                                            <span className='text-[#004E60] text-xs font-semibold hover:text-black duration-300 transition cursor-pointer'> مطالعه بیشتر</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h5 className='mb-4 text-xl font-bold'>تماس با ما</h5>
                        <div>
                            <ul className='mb-[18px]'>
                                <li className='flex mb-[6px]'>
                                    <CiLocationOn className='text-2xl transition duration-700 hover:rotate-[360deg]' />
                                    <span className='text-[#ccc] mr-[35px]'>استان گیلان - رشت - خشکبیجار</span>
                                </li>
                                <li className='flex mb-[6px]'>
                                    <AiOutlineMail className='text-xl transition duration-700 hover:rotate-[360deg]' />
                                    <span className='text-[#ccc] mr-[35px]'>myvilla@home.com</span>
                                </li>
                                <li className='flex mb-[6px]'>
                                    <BsPhone className='text-xl transition duration-700 hover:rotate-[360deg]' />
                                    <span className='text-[#ccc] mr-[35px]'>09111111111</span>
                                </li>
                            </ul>
                            <div className='text-[#ccc]'>
                                <p>شنبه تا پنج شنبه 9 الی 21</p>
                                <p>جمعه 9 الی 13</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-5 text-center'>
                    <span> کپی رایت ©2023 تمامی حقوق محفوظ </span>
                    <span>به وسیله </span>
                    <span className='text-blue-500'>2Fast4U</span>
                </div>
            </div>
        </section>
    )
}

export default Footer