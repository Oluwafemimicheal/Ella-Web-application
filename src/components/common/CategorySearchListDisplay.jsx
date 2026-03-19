import React from 'react'

const CategorySearchListDisplay = ({ items }) => {
  return (
    <>

      {!items.length <= 0 &&
        <ul className='p-3 bg-white'>
          {
            items?.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul> 
      }

    </>
  )
}

export default CategorySearchListDisplay
