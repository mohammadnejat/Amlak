import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import Logo from "../../public/logo.png"
import { LuMenuSquare } from "react-icons/lu"
function Header() {

    const [isToggle, setIsToggle] = useState(false)

    let ClickAnime = () => {
        if (!isToggle) {
            setIsToggle(true)
        }
        else {
            setIsToggle(false)
        }
    }

    return (
        <>
            <header className=' pt-2 md:p-[10px] absolute right-0 left-0 z-50'>
                <div className='flex xl:flex-row lg:flex-col items-center justify-start md:justify-between md:px-[15px] mx-auto'>
                    <div className='float-left xl:w-auto lg:w-full'>
                        <img src={Logo.src} alt="" />
                    </div>
                    <div className='hidden md:flex'>
                        <ul className='flex '>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">خانه</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">جست و جو</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">درباره ما</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">لیست املاک</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">جزئیات ملک</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">بلاگ</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">جزئیات بلاگ</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">تماس با ما</Link>
                            </li>
                        </ul>
                        <div className='flex ml-[55px] gap-2 text-[#fff] items-center'>
                            <div><AiOutlineInstagram className='w-8 h-8 cursor-pointer animation-pulse' /></div>
                            <div><AiOutlineWhatsApp className='cursor-pointer w-7 h-7' /></div>
                        </div>
                    </div>
                    <div className='cursor-pointer md:hidden ' onClick={ClickAnime}>
                        <div className='text-white '>
                            <LuMenuSquare className='p-1 text-5xl text-cyan-700 bg-slate-600 rounded-2xl' />
                        </div>
                    </div>
                </div>
                <div className={`w-11/12 mx-auto mt-2 bg-black md:hidden  ${isToggle ? "animates" : "active"}`}>
                    <div className='p-4'>
                        <ul className='flex flex-col gap-3 '>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">خانه</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">جست و جو</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">درباره ما</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">لیست املاک</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">جزئیات ملک</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">بلاگ</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">جزئیات بلاگ</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[#A3A9AA] transition duration-300 py-1 px-[5px] ml-9 font-medium text-base text-[#fff]' href="#">تماس با ما</Link>
                            </li>
                        </ul>
                        <div className='flex ml-[55px] gap-2 md:mt-0 mt-2 text-[#fff] items-center'>
                            <div><AiOutlineInstagram className='w-8 h-8 animation-pulse' /></div>
                            <div><AiOutlineWhatsApp className='w-7 h-7' /></div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header