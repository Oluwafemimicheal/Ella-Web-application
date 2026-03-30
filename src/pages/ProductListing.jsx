import { useProducts } from "../hooks/useProducts"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import ProductDetails from "./ProductDetails"
import ProductSection from "@/components/common/ProductSection"

const ProductListing = () => {
  const { showData, status } = useProducts()

  return (
    <div className="lg:w-300 mx-auto lg:py-2 pb-20 lg:px-0 px-2">

      <div className="hidden lg:block">
        <ProductSection />
      </div>

      {/* UI display if product api wes successfully*/}
      <div className="pt-10">
        <h1 className="font-semibold text-lg">All Product Available in Store </h1>
        {/* <h1 className="font-bold text-amber-600 text-2xl mb-10">Recent Product</h1> */}
        {
          status === 'loading' &&
          <div className="mt-10 w-300 mx-auto grid lg:grid-cols-5 gap-5">
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
          </div>
        }

        {/* Product UI display after loading */}
        <div className="my-5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-1 lg:gap-3 lg:gap-y-8 gap-y-5">
          {
            showData.slice(0, 10)?.map((product, index) => {

              return <ProductDetails key={index} product={product} />
            })
          }
        </div>

      </div>

      {/* Weekend Product UI display for Desktop Screen Only */}
      <div className="hidden lg:block">
        <ProductSection sectionTitle="Weekend's Sale Packages" />
      </div>

      {/* UI display if an error occurred */}
      {
        status === 'error' && <h1 className="my-20 text-center text-red-600 font-semibold text-lg">Something went wrong </h1>
      }

    </div>
  )
}

export default ProductListing
