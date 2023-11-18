import React from 'react'
import SingleProperty from '../SingleProperty'

const PropertysInfo = [
    { id: 1, imgURL: "https://garzak.ir/garzak_them/Real_Estate_etemad/img/rooms/1.jpg", link: '/1' },
    { id: 2, imgURL: "https://garzak.ir/garzak_them/Real_Estate_etemad/img/rooms/2.jpg", link: '/2' },
    { id: 3, imgURL: "https://garzak.ir/garzak_them/Real_Estate_etemad/img/rooms/3.jpg", link: '/3' },
]

function HotelRooms() {
    return (
        <>
            <div className=' w-full mx-auto pt-[140px] pb-[61px]'>
                <div className='w-full  px-[15px]'>
                    <div className='grid items-center justify-center md:w-[85%] w-full gap-8 mx-auto md:grid-cols-3 grid-cols-1 text-center'>
                        {PropertysInfo.map((items) => (
                            <SingleProperty key={items.id} img={items.imgURL} links={items.link}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelRooms