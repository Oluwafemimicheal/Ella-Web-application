import Slider from '@/components/ui/Slider'
import React, { useState } from 'react'
import ProductListing from './ProductListing'
import SaleProduct from '@/components/ui/SaleProduct'
import { IoSwapVerticalOutline } from 'react-icons/io5'
import { Plus } from 'lucide-react'

const Home = () => {
  const [filter, setFilter] = useState(false)
  return (
    <>
      <div className='py-0'>
        <Slider />
      </div>
      <div className='hidden lg:block'>
        <SaleProduct />
      </div>
      <ProductListing />

      {/* Filter Button */}
      <div className='w-full fixed bottom-5 flex justify-center items-center z-99'>
        {
          filter ? <SortAndFilterUI closeSort={setFilter} /> : <button onClick={() => setFilter(true)} className='w-max flex py-2 px-4 text-white bg-black/90 rounded-3xl'>Sort by <span className='flex items-center px-2'><IoSwapVerticalOutline size={25} /></span> Filter </button>
        }

      </div>
    </>
  )
}


// Sort and Filter UI
export const SortAndFilterUI = ({ closeSort }) => {
  return (
    <div className='fixed w-full h-screen bg-black/50 drop-shadow-md z-99 top-0 overflow-hidden'>
      <div className='absolute bottom-0 w-full bg-white rounded-t-3xl h-[40%]'>
        <div className='flex justify-between items-center py-5 px-3 border-b border-gray-300'>
          <small className='text-lg'>Sort by</small>
          <button onClick={() => closeSort(false)}><Plus className='rotate-45' /></button>
        </div>

        <ul className='flex flex-col gap-y-5 px-3 mt-10'>
          <li>Popularity</li>
          <li>Newest Arrivals</li>
          <li>Price: Low to High</li>
          <li>Price: High to Low</li>
          <li>Customer Rating</li>
        </ul>
      </div>
    </div>
  )

}

export default Home
