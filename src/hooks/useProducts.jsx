// import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"

export const useProducts = () => {
  const [ showData, setShowData ] = useState([])
  const [status, setStatus ] = useState(null)
 
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        setStatus('loading')
        const response = await axios.get("https://dummyjson.com/products")
        const data = response.data.products
        setShowData(data)
        setStatus(null)
      } catch (error) {
        setStatus('error')
        console.error(error)
      }
    }
    fetchData()
  }, [])
 
  return {showData, status};
}

// export const useProducts = () => {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["product"],
//     queryFn: fetchProduct,
//   })

//   if (isLoading) return <p>Loading...</p>
//   if (error) return <p>Error</p>
  
//   return { data, isLoading, error }
// }

