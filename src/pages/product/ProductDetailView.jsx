import { Btn, BtnPrimary } from '@/components/common/Buttons'
import { useProducts } from '@/hooks/useProducts'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetailView = () => {
  const { showData } = useProducts()
  const { productID } = useParams()
  const product = showData.filter(product => product.id === Number(productID))

  return (
    <div>
      <div className='w-full px-2 lg:w-300 lg:px-0 lg:py-5 mx-auto'>       
        <div className=' my-5 h-auto'>
          {
            product.map((product) => (
              <div key={product.id} className='flex flex-col gap-5'>
                <div className='flex lg:flex-row flex-col gap-16'>
                  <div className=' shrink-0 flex flex-col justify-center items-center w-100 h-120 gap-5'>
                    <div className='flex flex-col justify-center items-center w-100 h-100 bg-gold/10 rounded-2xl'>
                      <img src={product.thumbnail} alt={product.id} />
                    </div>
                    <div className='grid grid-cols-3 h-30 w-full gap-3'>
                      {
                        product.images.map((image, index) => (
                          <div key={index} className='flex w-full h-20 justify-center p-7 items-center  bg-gray-100 rounded-lg'>
                            <img src={image} alt="loading..." />
                          </div>
                        ))
                      }

                    </div>
                  </div>

                  {/* product details */}
                  <div>
                    <h1 className='text-3xl font-semibold mb-4'>{product.title}</h1>
                    <p className='text-lg'>{product.description}</p>
                    <h3 className='font-bold my-2 text-2xl'>${product.price}</h3>

                    <div className='flex justify-start gap-5 bg-gold-soft p-5 mt-10 rounded-sm'>
                      <BtnPrimary title='Buy Now'/>
                      <Btn title='More Details'/>
                    </div>

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetailView
