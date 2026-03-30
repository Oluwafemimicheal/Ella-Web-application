import React from 'react'

const ProductSection = ({ sectionTitle ="Today's Top Deals"}) => {
  return (
    <div className='w-full flex flex-col gap-3 p-3 h-60 bg-gold shadow-lg rounded-md'>
      <h1 className='font-bold text-lg text-white'>{sectionTitle}</h1>
      <div className='bg-white w-full h-full rounded-md'>

      </div>
    </div>
  )
}

export default ProductSection
