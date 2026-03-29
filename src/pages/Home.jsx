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
      <div className='py-0'>
        <Slider />
      </div>
      <SaleProduct />
      <ProductListing />
    </>
  )
}

export default Home
