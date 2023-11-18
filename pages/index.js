import TopButton from '@/components/TopButton/TopButton'
import Fetchers from '../components/Fetchers/Fetchers'
import FilterSearch from '../components/FilterSearch/FilterSearch'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HeaderSection from '../components/HeaderSection/HeaderSection'
import HotelRooms from '../components/HotelRooms/HotelRooms'
import InstaFollow from '../components/InstaFollow/InstaFollow'
import LastNewsSection from '../components/LastNewsSection/LastNewsSection'
import PopularRooms from '../components/PopularRooms/PopularRooms'
function App() {
  return (
    <>
      <TopButton />
      <Header />
      <HeaderSection />
      <FilterSearch />
      <HotelRooms />
      <PopularRooms />
      <LastNewsSection />
      <Fetchers />
      <InstaFollow />
      <Footer />
    </>
  );
}

export default App
