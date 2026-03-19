import { formatPrice } from "@/utils/formatPrice"
import { useProducts } from "../hooks/useProducts"
import { Heart } from "lucide-react"
import { Btn, BtnPrimary } from "@/components/common/Buttons"


const ProductDetails = ({ product }) => {
  const { status } = useProducts()
  return (
    product ? <div className="group w-full lg:h-65 h-95 bg-amber-600 relative rounded-md shadow-lg p-2  overflow-hidden">
      <div className=" w-full lg:h-40 h-70 overflow-hidden flex justify-center items-center bg-white p-3 rounded-md relative">
        <img src={product?.thumbnail} alt="product" width={160} className="group-hover:scale-125 transition-all" />
        <span className="bg-amber-700 text-white p-1 rounded-sm text-[10px] absolute top-2 right-2 inline">New Stock</span>

      </div>

        {/* Pop Add to Cart display */}
        <div className="flex justify-between items-center group-hover:translate-y-0 translate-y-30 -translate-x-2 h-25 transition-all delay-100  bg-amber-600 absolute p-3 w-full">
        <Btn title="Add to Cart"/>
        <BtnPrimary title="Buy Now"/>
          
       </div>

      {/* product details */}
      <div className="flex flex-col gap-4 py-2">
        <div>
          <h1 className="text-sm text-white font-bold">{product?.title.length > 20 ? `${product?.title.slice(0, 20)}...` : product?.title}</h1>
          {/* <h1 className="text-sm font-bold">{formatPrice(product?.price)}</h1> */}
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">{product?.price}</h1>
            <p className="text-xs bg-red-700 px-1 py-0.5 rounded-sm text-white font-semibold">5% OFF</p>
          </div>
          <p className="text-[12px] font-bold">MOQ: <span>10 pieces - Available</span></p>
        </div>
      </div>
    </div> : <div>
      {status === 'loading' && <Skeleton height={90} width={90} highlightColor="orange" />}
    </div>

  )
}

export default ProductDetails
