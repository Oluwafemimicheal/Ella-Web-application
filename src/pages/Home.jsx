import Slider from '@/components/ui/Slider'
import React from 'react'
import ProductListing from './ProductListing'
import SaleProduct from '@/components/ui/SaleProduct'

const Home = () => {
  return (
    <>
      <div className='py-0'>
        <Slider />
      </div>
      <div className='hidden lg:block'>
        <SaleProduct />
      </div>
      <ProductListing />
    </>
  )
}

export default Home
