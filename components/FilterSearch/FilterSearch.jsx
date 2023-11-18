import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BsSearch } from "react-icons/bs"

function FilterSearch() {
    const [city, setCity] = React.useState('');
    const [Buld, setBuld] = React.useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };
    const handleChangeBuld = (event) => {
        5
        setBuld(event.target.value);
    };
    return (
        <>
            <div className='relative w-full -mt-[57px] z-40 '>
                <div className=' px-[15px] xl:w-full relative mx-auto lg:w-[60%]'>
                    <div className='bg-white shadow-xl xl:grid lg:flex lg:flex-col xl:grid-cols-12 rounded-t-[60px] xl:rounded-s-full xl:rounded-e-full '>
                        <div className='py-[6px] pr-[40px] col-span-2'>
                            <p className='mb-5 text-lg font-extrabold'>موقعیت</p>
                            <div dir='rtl' >
                                <FormControl variant="standard" sx={{ m: 0, textAlign: 'right', minWidth: 120 }} dir="rtl">
                                    <Select
                                        value={city}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            رشت
                                        </MenuItem>
                                        <MenuItem dir="rtl" value={10}>مشهد</MenuItem>
                                        <MenuItem dir="rtl" value={20}>اصفهان</MenuItem>
                                        <MenuItem dir="rtl" value={30}>انزلی</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>
                        </div>
                        <div className='py-[6px] px-[23px] col-span-2 border-r'>
                            <p className='mb-5 text-lg font-extrabold'>نوع ملک</p>
                            <div dir='rtl' >
                                <FormControl variant="standard" sx={{ m: 0, textAlign: 'right', minWidth: 120 }} dir="rtl">
                                    <Select
                                        value={Buld}
                                        onChange={handleChangeBuld}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            خانه
                                        </MenuItem>
                                        <MenuItem dir="rtl" value={20}>زمین</MenuItem>
                                        <MenuItem dir="rtl" value={30}>آپارتمان</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>
                        </div>
                        <div className='py-[6px] px-[23px] col-span-3 border-r'>
                            <p className='mb-5 text-lg font-extrabold'>حداکثر قیمت</p>
                            <input type="text" placeholder="مثال:100،000،0000" required className='w-full h-[30px] bg-[#F6F6F6] border-none py-[17px] outline-none text-[#8f8f8f]' />
                        </div>
                        <div className='flex flex-col col-span-4 p-2 pb-8 md:flex-row md:p-0'>
                            <div className='py-[6px] px-[23px]  border-r'>
                                <p className='mb-5 text-lg font-extrabold'>اتاق</p>
                                <div className='flex gap-2'>
                                    <div className='bg-[#004E60] cursor-pointer w-[30px] text-center rounded-full py-[3px] px-[10px] text-[#fff] hover:bg-[#6f42c1] duration-300 transition'>1</div>
                                    <div className='bg-[#004E60] cursor-pointer w-[30px] text-center rounded-full py-[3px] px-[10px] text-[#fff] hover:bg-[#6f42c1] duration-300 transition'>2</div>
                                    <div className='bg-[#004E60] cursor-pointer w-[30px] text-center rounded-full py-[3px] px-[10px] text-[#fff] hover:bg-[#6f42c1] duration-300 transition'>3</div>
                                    <div className='bg-[#004E60] cursor-pointer w-[30px] text-center rounded-full py-[3px] text-[#fff] hover:bg-[#6f42c1] duration-300 transition'>4+</div>
                                </div>
                            </div>
                            <div className='py-[6px] px-[23px] border-r'>
                                <p className='mb-5 text-lg font-extrabold'>حمام</p>
                                <div className='flex gap-2'>
                                    <div className='bg-[#004E60] cursor-pointer w-[30px] text-center rounded-full py-[3px] px-[10px] text-[#fff] hover:bg-[#6f42c1] duration-300 transition'>1</div>
                                    <div className='bg-[#004E60] cursor-pointer w-[30px] text-center rounded-full py-[3px] px-[10px] text-[#fff] hover:bg-[#6f42c1] duration-300 transition'>2</div>
                                    <div className='bg-[#004E60] cursor-pointer w-[30px] text-center rounded-full py-[3px] px-[10px] text-[#fff] hover:bg-[#6f42c1] duration-300 transition'>3</div>
                                    <div className='bg-[#004E60] cursor-pointer w-[30px] text-center rounded-full py-[3px] text-[#fff] hover:bg-[#6f42c1] duration-300 transition'>4+</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 '>
                            <div className='bg-[#004E60] cursor-pointer   w-full lg:py-0 lg:mt-0 py-8  h-full  xl:rounded-e-full lg:w-full xl:w-[60%] float-left'>
                                <div className='flex flex-col items-center justify-center w-full h-full text-xl text-white lg:py-8 font-extralight'>
                                    <BsSearch className='font-extrabold cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterSearch