import { MarsStroke, Settings2, Tag } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useProducts } from "../../hooks/useProducts"
import ProductDetails from '@/pages/ProductDetails';


const SaleProduct = () => {
  return (
    <div className='py-2'>
      <h2 className='text-center text-gold-soft'>Recommended for your personal use</h2>
      <div className='h-80 w-full hero-3'>
        <div className='bg-black/80 w-full h-full p-5'>
          <div className='w-7xl mx-auto flex items-center justify-between '>

            <div className='w-100 shrink-0'>
              <h1 className='flex items-center gap-2 text-2xl font-bold text-white'><Settings2 size={30} /> Fast Product Deliver</h1>
              <p className='text-gray-200'>Reach out your favorite product fast and easy</p>
              <ul className='my-6 flex flex-col gap-5 text-sm'>
                <li className='flex items-center gap-2 text-white font-semibold'><Tag className='rotate-180 size-5' /> High Quality</li>
                <li className='flex items-center gap-2 text-white font-semibold'><Tag className='rotate-180 size-5' /> 14-day dispatch</li>
                <li className='flex items-center gap-2 text-white font-semibold'><Tag className='rotate-180 size-5' /> Trusted Product</li>
              </ul>
              <button className='bg-gold-soft hover:bg-gold py-2 px-5 font-bold text-white rounded-lg cursor-pointer relative overflow-hidden'> Explore Now</button>
            </div>

            <div className='flex-1 overflow-hidden'>
                <ProductSlider/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export const ProductSlider = () => {
  const { showData } = useProducts();
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySlider h-full flex items-center justify-center"
      >
        {
          showData.slice(0, 10)?.map((product, index)=>{
            return <SwiperSlide key={index}>
              <ProductDetails product={product}/>
            </SwiperSlide>
          })
        }
        
      </Swiper>
    </>
  );
}



export default SaleProduct
