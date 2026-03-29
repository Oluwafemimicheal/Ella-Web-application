import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../../assets/images/simple-logo.png"
import flag from "../../assets/icons/nigeria-flag.png"
import DropMenu from "./DropMenu";
import { LandmarkIcon, Menu, ShoppingCart, UserCheck2 } from "lucide-react";
import { categories } from "@/utils/staticData";
import CategorySearchListDisplay from "../common/CategorySearchListDisplay";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [menu, setMenu] = useState({ categories: false, help: false })
  const [showMenu, setShowMenu] = useState(false)
  const [search, setSearch] = useState('')
  const [searchList, setSearchList] = useState([])

  const filterCategories = (e) => {
    setSearch(e.target.value)
    const result = categories.filter((category) => {
      return category.toLowerCase().startsWith(search, 0)
    })
    setSearchList(result)
  }

  return (
    <nav className="w-full lg:w-300 mx-auto lg:pt-5 lg:pb-0 py-3 lg:px-0 px-5 text-gray-800">
      <div className="flex justify-between items-center lg:gap-10 gap-10">
        {/* menu and logo */}
        <Link to={'/'} className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <img src={logo} alt="Logo" width={40} />
            <h1 className="hidden lg:block font-bold lg:text-lg">Ella Nuts and Oils</h1>
          </div>
        </Link>

        {/* search product */}
        <div className="grow">
          <form className="flex items-center">
            <div className="flex grow items-center gap-3 border-2 border-gold-soft rounded-l-md lg:py-1 py-1 lg:px-3 px-1 relative">
              <IoSearchOutline />
              <input type="text" placeholder="Search for product and categories" className="grow text-sm lg:text-lg" value={search} onChange={filterCategories} />
              <div className="absolute top-10 w-full">
                {!search <= 0 ? <CategorySearchListDisplay items={searchList} /> : null}
              </div>
            </div>
            <button className="lg:font-semibold lg:text-md text-sm py-1.5 lg:py-2.5 lg:px-4 px-1.5 lg:rounded-r-md bg-gold-soft text-white cursor-pointer hover:bg-gold-soft/">Search</button>
          </form>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center">
          <div className="lg:hidden">
            <Menu onClick={() => setShowMenu(prev => !prev)} />
            {
              showMenu && <SideMenu closeMenu={setShowMenu} />
            }
          </div>
          <div className="hidden lg:flex items-center gap-5">
            <button className="flex flex-col items-center hover:text-amber-600 cursor-pointer">
              <h3 className="text-xs">Deliver to:</h3>
              <div className="flex items-center gap-1">
                <img src={flag} alt="flag" width={14} />
                <h3 className="text-xs">NGN</h3>
              </div>
            </button>
            {/* Categories Display Action */}
            <div>
              <div>
                <button button className="flex items-center gap-1 text-sm hover:text-amber-600 cursor-pointer" onMouseOver={() => setMenu({ categories: true })}>
                  All Categories
                </button>
              </div>
              <div onMouseLeave={() => setMenu(false)} className={`${menu.categories ? "max-h-auto transform translate-y-0 py-5 z-10" : "max-h-0  -z-99"} mt-14 absolute left-0 right-0  w-full bg-gray-100 text-gray-600 shadow-md transition-all duration-300`}>
                <div className="w-300 mx-auto" >
                  {/* Categories List */}
                  <div className="w-max border-r-2 border-amber-600 px-5">
                    {
                      menu.categories && <DropMenu />
                    }
                  </div>
                  {/* Categories items display */}
                  <div>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Display dropdown action */}
            <Link to={'/about'}>
                <h3>About product</h3>
            </Link>

            {/* Cart button */}
            <button className="flex items-center gap-1 text-sm hover:text-amber-600 cursor-pointer">
              <ShoppingCart />
              <h3>Cart</h3>
            </button>

          </div>
        </div>
      </div>


      <div className="hidden lg:flex items-center justify-between w-full h-10 mt-2">
        <ul className="flex items-center gap-5 text-sm">
          <li>All Category</li>
          <li>New products</li>
          <li>Order package</li>
        </ul>
        <ul className="flex items-center gap-5 text-sm">
          <li>My store</li>
          <li>Connect on WhatsApp</li>
          <li>Order package</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
