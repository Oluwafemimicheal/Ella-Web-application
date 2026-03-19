import Navbar from '@/components/ui/Navbar'
import Slider from '@/components/ui/Slider'
import React from 'react'
import ProductListing from './ProductListing'
import { HeroDisplayCard } from '@/components/ui/HeroDisplayCard'
import Footer from '@/components/ui/Footer'
import SaleProduct from '@/components/ui/SaleProduct'

const Home = () => {
  return (
    <>
      <header className='relative bg-white z-99 shadow-sm'>
        <Navbar />
      </header>
      <main>
        {/* <Slider/> */}
        <div className='py-0'>
          <Slider/>
        </div>
        <SaleProduct/>
        <ProductListing />
      </main>
      <footer>
        <Footer/>
      </footer>

    </>
  )
}

export default Home
