import React, { useEffect, useState } from 'react'
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperJsButtons from "../../components/PopularRooms/SwiperJsButtons";
import img1 from "../../public/png1.png"
import img2 from "../../public/png2.png"
import img3 from "../../public/png3.png"
import img4 from "../../public/png4.png"
import { CiLocationOn } from "react-icons/ci"
import SingleProperty from '../SingleProperty';
import { useParams } from 'next/navigation';


const Property = () => {
    const PropertysInfo = [
        { id: 1, imgURL: "https://garzak.ir/garzak_them/Real_Estate_etemad/img/rooms/1.jpg", link: '/1' },
        { id: 2, imgURL: "https://garzak.ir/garzak_them/Real_Estate_etemad/img/rooms/2.jpg", link: '/2' },
        { id: 3, imgURL: "https://garzak.ir/garzak_them/Real_Estate_etemad/img/rooms/3.jpg", link: '/3' },
    ]

    const ids = useParams()?.id;
    const property = PropertysInfo.find(item => item.id === Number(ids));

    return (
        <div className='w-full px-4 mx-auto mt-20 mb-20 md:mt-0 md:px-0'>
            <div className='flex flex-col w-full mx-auto md:justify-between md:flex-row pt-9 md:px-32 '>
                <div>
                    <h2 className='text-2xl font-semibold'>فروش ویلای 700 متری با بنای 90 متر در شمال</h2>
                    <div className='flex items-center mt-2'>
                        <CiLocationOn className='ml-2 text-2xl' />
                        <p className='flex items-center text-[#ccc] text-xl font-semibold mt-1'>استان گیلان،رشت،خشکبیجار ، روستای جیرکویه</p>
                    </div>
                </div>
                <div className=''>
                    <span className='text-2xl font-semibold'>برای فروش</span>
                    <h2 className='text-3xl font-bold'>259,000,000 تومان</h2>
                </div>
            </div>

            <div className='w-full h-full mx-auto mt-4 md:w-10/12'>
                <div className="relative ">
                    <Swiper
                        loop={true}
                        modules={[Navigation, A11y, Pagination]}
                        className="rounded-[10px] s">
                        <SwiperJsButtons />

                        <SwiperSlide>
                            <img className='w-full h-full' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/single-property/1.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className='w-full h-full' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/single-property/2.jpg" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <div className='mt-12 '>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-12'>
                    <div></div>
                    
                    <div className='shadow-2xl md:col-span-7'>
                        <div className='p-4 border-b '>
                            <div className='flex flex-col-reverse items-center justify-between gap-6 md:gap-0 md:flex-row'>
                                <div className='flex gap-8'>
                                    <div className='flex gap-2'>
                                        <div className='flex flex-col items-center gap-2'>
                                            <span className='text-lg font-semibold '>پارکینگ</span>
                                            <div className='flex items-center'>
                                                <img className='inline h-5 mr-3' src={img4.src} alt="#" />
                                                <span className='mr-2 text-lg font-semibold'>1</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center gap-2'>
                                            <span className='text-lg font-semibold'>حمام</span>
                                            <div className='flex items-center'>
                                                <img className='inline h-5 mr-3' src={img3.src} alt="#" />
                                                <span className='mr-2 text-lg font-semibold'>2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='flex flex-col items-center gap-2'>
                                            <span className='text-lg font-semibold'>تعداد خواب</span>
                                            <div className='flex items-center'>
                                                <img className='inline h-5 mr-3' src={img2.src} alt="#" />
                                                <span className='mr-2 text-lg font-semibold'>9</span>
                                            </div>

                                        </div>
                                        <div className='flex flex-col items-center gap-2'>
                                            <span className='text-lg font-semibold'>متراژ</span>
                                            <div className='flex items-center'>
                                                <img className='inline h-5 mr-3' src={img1.src} alt="#" />
                                                <span className='mr-2 text-lg font-semibold'>700</span> <span className='mr-2 text-lg font-semibold'> متر </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-end w-full gap-2 text-xl font-semibold md:justify-normal md:w-auto'>
                                    <span className='text-[#ccc] ' > کدملک: </span>
                                    <span> 1259 </span>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='mt-8 mb-8 '>
                                <h2 className='text-lg font-semibold'>توضیحات</h2>
                                <p className='text-[#9a928a] font-semibold'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت .</p>
                                <p className='text-[#9a928a] font-semibold'>همچنین در قسمت جزئیات ملک برای لینک ها و متن های بولد استایل هایی رو در نظر گرفتیم که کاملا واضح هست که چه زیبایی رو به قالب اضافه کرده، در واقع شما میتونید وقتی لینکی در توضیحات بدید به صورت خودکار این استایل رو دریافت کنه</p>
                            </div>
                        </div>
                        <div className=''>

                            <h2 className='pr-4 mb-4 text-lg font-semibold'>امکانات ملک</h2>
                            <div className='w-full -ml-16'>
                                <table className='w-full'>
                                    <tbody className=''>
                                        <tr className='table-row p-2'>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3 ' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> پارکینگ </td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> آسانسور</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> دوربین مدار بسته</td>
                                        </tr>
                                        <tr className='table-row   bg-[#F8F8F9]'>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" />  اتاق مشتر</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> سالن بدنسازی</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> اشپزخانه</td>
                                        </tr>
                                        <tr className='table-row '>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> سنگ</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> کاشی</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> چراغهای مخفی</td>
                                        </tr>
                                        <tr className='table-row   bg-[#F8F8F9]'>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> کرکره برقی</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> حمام</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" />مخزن آب</td>
                                        </tr>
                                        <tr className='table-row '>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> حیاط محوطه کاری شده</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/NO.png" alt="" /> اتاق کار</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" />کامپوزیت</td>
                                        </tr>
                                        <tr className='table-row   bg-[#F8F8F9]'>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/NO.png" alt="" /> نورپردازی</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> کاشی/ سرامیک</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> اینترنت پر سرعت</td>
                                        </tr>
                                        <tr className='table-row '>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> درب پارکینگ ریموت دار</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/NO.png" alt="" /> شوتینگ زباله</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> آنتن مرکزی</td>
                                        </tr>
                                        <tr className='table-row   bg-[#F8F8F9]'>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> دزدگیر</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/NO.png" alt="" /> سیستم اطفاء حریق</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> بام سبز</td>
                                        </tr>
                                        <tr className='table-row '>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/NO.png" alt="" /> باربیکیو</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> بیلیارد </td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> سرایداری</td>
                                        </tr>
                                        <tr className='table-row   bg-[#F8F8F9]'>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/NO.png" alt="" /> پینگ پنگ</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> باغ</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> تنیس</td>
                                        </tr>
                                        <tr className='table-row '>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/NO.png" alt="" /> سونا</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" />آلاچیق</td>
                                            <td className='table-cell pt-2 pb-2 pl-6 text-lg font-medium '><img className='inline h-5 mr-3' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/check.png" alt="" /> سالن اجتماعات</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-lg font-semibold'>موقعیت دقیق</h2>
                        </div>
                    </div>
                    <div className='md:col-span-3'>
                        <div className="w-full pt-[30px] pb-[40px] text-center shadow-2xl rounded-md">
                            <img className='mx-auto' src="https://garzak.ir/garzak_them/Real_Estate_etemad/img/single-property/small.png" alt="" />
                            <p className='text-[#ccc] my-2 text-2xl font-semibold'>مشاور فروش</p>
                            <h5 className='mb-2 text-2xl font-semibold'>سینا موسوی</h5>
                            <table className='w-full mb-8'>
                                <tbody><tr className='bg-[#F8F8F9]'>
                                    <td className='text-[#ccc] text-lg font-semibold py-[10px]'>شماره دفتر : <span className='text-[#30304e]'>021-111-1234</span></td>
                                </tr>
                                    <tr>
                                        <td className='text-[#ccc] text-lg font-semibold py-[10px]'>موبایل : <span className='text-[#30304e]'>0912-345-6789</span></td>
                                    </tr>
                                    <tr className='bg-[#F8F8F9]'>
                                        <td className='text-[#ccc] text-lg font-semibold py-[10px]'>فکس : <span className='text-[#30304e]'>021-111-1234</span></td>
                                    </tr>
                                    <tr >
                                        <td className='text-[#ccc] text-lg font-semibold py-[10px]'>واتس اپ : <span className='text-[#30304e]'>0912-345-6789</span></td>
                                    </tr>
                                    <tr className='bg-[#F8F8F9]'>
                                        <td className='text-[#ccc] text-lg font-semibold py-[10px]'>پست الکترونیک : <span className='text-[#30304e]'>sina@homes.com</span></td>
                                    </tr>
                                </tbody></table>
                            <a href="#" className="bg-[#004E60] text-[#fff] px-[20px] py-[7px] rounded-[4px] text-base font-semibold">دیدن تمامی املاک</a>
                        </div>
                        <div className='mt-6'>
                            {property && <SingleProperty key={property?.id} img={property?.imgURL} links={property?.link} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property