import React from 'react'

function LastNewsSection() {
    return (
        <section className='bg-[#30304e] pt-[80px] pb-[94px] text-[#fff] '>
            <div className='text-center'>
                <div className='flex justify-center mb-[25px] w-full'>
                    <img src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/message.png" alt="#" />
                </div>
                <h4 className='text-2xl font-medium mb-[35px]'>برای دریافت آخرین تخفیفات ملک
                    <br />
                    به خبر نامه ما پیوندید
                </h4>
                <form>
                    <input placeholder='پست الکترونیک' className='w-72 md:mb-0 mb-6 h-[51px] rounded-[4px] ml-5 text-[#ccc] inline-block py-[18px] pl-5 pr-[10px] focus:outline-none overflow-visible' type="text" />
                    <button className='bg-[#09192A] border-none py-4 px-9 rounded cursor-pointer'>مشترک شوید!</button>
                </form>
            </div>
        </section>
    )
}

export default LastNewsSection