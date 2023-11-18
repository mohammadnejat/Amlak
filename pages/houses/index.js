import FilterSearch from '@/components/FilterSearch/FilterSearch'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HeaderSection from '@/components/HeaderSection/HeaderSection'
import InstaFollow from '@/components/InstaFollow/InstaFollow'
import Property from '@/components/Property/Property'
import RoomImage from '@/components/RoomImage'
import React from 'react'

function index() {
    return (
        <>
            <Header />
            <HeaderSection />
            <FilterSearch />
            <Property />
            <InstaFollow />
            <Footer />
        </>
    )
}

export default index