export const Btn = ({ title ="Add to Cart"}) =>{
  return <button className="border-2 border-white bg-white text-amber-600 py-1.5 px-3 text-sm font-semibold rounded-md cursor-pointer hover:bg-transparent hover:text-white transition-all">{title}</button>
}

export const BtnPrimary = ({ title ="Add to Cart"}) =>{
  return <button className="border-2 border-white py-1.5 px-3 text-sm text-white font-semibold rounded-md cursor-pointer hover:bg-white hover:text-amber-600 transition-all ">Buy Now</button>
  
}

