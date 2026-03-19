import { FaBars } from "react-icons/fa6"
import List from "../common/List"
import { categories } from "@/utils/staticData"




const DropMenu = ({ setMenu }) => {
  return (
    <ul className={`flex flex-col gap-4`}>
      <h3 className="w-max flex items-center gap-2 text-sm py-1 px-3 bg-amber-600 text-white rounded-full"> <FaBars size={16} /> All Categories</h3>

      <div className="h-70 overflow-y-scroll pr-10">
        {
          categories.map((index) => (
            <List key={index} onClick={() => setMenu(false)} listText={`Product ${index}`} />
          ))
        }

      </div>

    </ul>
  )
}

export default DropMenu
