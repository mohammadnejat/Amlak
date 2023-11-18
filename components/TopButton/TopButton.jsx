import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"
function TopButton() {
    const [Yy, setYy] = useState("")
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setYy(prev => "TopBtn")
        } else {
            setYy(perv => "dBtn")
        }
    }

    return (
        <>
            <div onClick={() => window.scrollTo(500, 0)} className={`w-12  h-12 rounded-full z-[9999] text-white bg-[#333333] fixed bottom-8 left-8 cursor-pointer  ${Yy}`}>
                <div className='flex items-center justify-center w-full h-full'>
                    <AiOutlineArrowUp className='text-3xl font-extrabold' />
                </div>
            </div>
        </>
    )
}

export default TopButton