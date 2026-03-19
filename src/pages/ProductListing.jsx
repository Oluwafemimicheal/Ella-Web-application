import { useProducts } from "../hooks/useProducts"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import ProductDetails from "./ProductDetails"
import ProductSection from "@/components/common/ProductSection"

const ProductListing = () => {
  const { showData, status } = useProducts()

  return (
    <div className="lg:w-300 mx-auto py-10 pb-20 lg:px-0 px-5">
      {/* <h1 className="font-bold text-amber-600 text-2xl mb-10">Recent Product</h1> */}

      {/* UI display if data is loading */}
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

      <ProductSection/>

      {/* UI display if product api wes successfully*/}
      <div className="my-10 grid lg:grid-cols-5 md:grid-cols-2 gap-3 gap-y-10">
        {
          showData.slice(0, 10)?.map((product, index) => {

            return <ProductDetails key={index} product={product} />
          })
        }
      </div>

      <ProductSection sectionTitle="Weekend's Sale Packages" />
      {/* UI display if an error occurred */}
      {
        status === 'error' && <h1 className="my-20 text-center text-red-600 font-semibold text-lg">Something went wrong </h1>
      }

    </div>
  )
}

export default ProductListing
