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
      <div className='absolute bottom-0 w-full bg-white rounded-t-3xl h-auto'>
        <div className='w-full flex justify-center items-center'>
          <div className=' w-20 h-2 mt-2 bg-gold rounded-full'></div>
        </div>
        <div className='flex justify-between items-center py-4 px-3 border-b border-gray-300'>
          <small className='text-lg font-semibold'>Sort by</small>
          <button onClick={() => closeSort(false)}><Plus className='rotate-45' /></button>
        </div>


        <form className="py-5 px-3 flex flex-col gap-5">
          {["Popularity", "Newest Arrivals", "Price: Low to High", "Price: High to Low", "Customer Rating"].map((option) => (
            <label
              key={option}
              className="flex justify-between items-center gap-3 cursor-pointer group"
            >
              <span className="text-gray-900 group-hover:text-black transition">
                {option}
              </span>
              {/* Hidden native radio */}
              <input
                type="radio"
                name="filter"
                value={option}
                className="hidden peer"
              />

              {/* Custom radio */}
              <div className="w-5 h-5  flex items-center justify-center rounded-full border-2 border-gray-400 
                      peer-checked:border-gold peer-checked:bg-gold
                      transition-all duration-200">
                <div className="w-2.5 h-2.5 p-3 bg-white rounded-full scale-0 
                        peer-checked:scale-100 transition-transform duration-200" />
              </div>

              {/* Label text */}

            </label>
          ))}
        </form>
      </div>
    </div>
  )

}

export default Home
