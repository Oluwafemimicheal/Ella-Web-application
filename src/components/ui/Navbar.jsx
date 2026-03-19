import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../../assets/images/simple-logo.png"
import flag from "../../assets/icons/nigeria-flag.png"
import DropMenu from "./DropMenu";
import { LandmarkIcon, Menu, ShoppingCart, UserCheck2 } from "lucide-react";
import { categories } from "@/utils/staticData";
import CategorySearchListDisplay from "../common/CategorySearchListDisplay";

const Navbar = () => {
  const [menu, setMenu] = useState({ categories: false, help: false })
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
    <nav className="w-full lg:w-300 mx-auto lg:pt-5 pt-3 lg:px-0 px-5 text-gray-800">
      <div className="flex justify-between items-center lg:gap-10 gap-3">
        {/* menu and logo */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <img src={logo} alt="Logo" width={40} />
            <h1 className="hidden lg:block font-bold lg:text-lg">Ella Nuts and Oils</h1>
          </div>
        </div>
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
            <Menu />
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
              <div onMouseLeave={() => setMenu(false)} className={`${menu.categories ? "max-h-auto transform translate-y-0 py-5 z-10" : "max-h-0  -z-99"} mt-7 absolute left-0 right-0  w-full bg-gray-100 text-gray-600 shadow-md transition-all duration-300`}>
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
            <div>
              <button className="flex items-center gap-1 text-sm hover:text-amber-600 cursor-pointer" onMouseOver={() => setMenu({ help: true })}>
                <h3>About product</h3>
              </button>
              <div onMouseLeave={() => setMenu({ help: false })} className={`${menu.help ? "max-h-auto transform translate-y-0 py-5 z-10" : "max-h-0  -z-99"} mt-7 absolute left-0 right-0  w-full bg-gray-100 text-gray-500 transition-all duration-300`}>
                <div className="w-300 mx-auto" >
                  {/* Categories List */}
                  {
                    menu.help && <div className="flex flex-col justify-center gap-5 items-center">
                      <p><span className="text-bold text-gold-soft">At ELLA NUTS AND OIL</span>, we are committed to supplying top quality  raw materials that power innovation across the cosmetics, personal care, wellness, and food production industries. As a trusted sourcing partner, we provide manufacturers, formulators, and emerging brands with high-quality ingredients and packaging solutions designed to support modern product development.
                      </p>

                      <p>

                        Our carefully curated portfolio includes a wide range of raw materials used in beauty and wellness formulations. We supply lip gloss ingredients, cosmetic-grade oils, food-grade oils, carrier oils, aromatherapy oils, along with advanced cosmetic powders such as hyaluronic acid, kojic alpha-Abutin and other functional actives widely used in skincare and personal care formulations. In addition, we offer Ayurvedic ingredients and natural butters valued for their nourishing and therapeutic properties.
                      </p>


                      Understanding that successful product development extends beyond ingredients alone, we also provide reliable packaging solutions that help brands efficiently bring their products to market. From concept to finished product, our goal is to support our customers throughout the production journey.<br />

                      Quality, consistency, and integrity define everything we do. We partner with trusted producers and suppliers to ensure that every material meets strict standards for purity, performance, and reliability. Through strong sourcing networks and careful quality management, we deliver ingredients that businesses can depend on for both small-scale and large-scale production.
                      <br />

                      <p>

                        Our company was built on the belief that exceptional products begin with exceptional ingredients. By combining reliable supply, competitive pricing, and a commitment to service, we strive to empower brands, entrepreneurs, and manufacturers to create products that stand out in today’s competitive marketplace.<br />

                        As we continue to grow, our vision is to become a recognized leader in the supply of raw materials and packaging solutions for the beauty, wellness, and food industries-supporting innovation, quality, and excellence at every stage of production. <br />

                        Our Vision
                        To become a globally trusted supplier of premium raw materials for cosmetics, wellness, and food production industries while supporting the growth of both emerging brands and established manufacturers. <br />

                        Our Core Values
                        Quality – We prioritize sourcing and supplying materials that meet the highest standards of purity, safety, and performance.

                        Integrity – We operate with honesty, transparency, and professionalism in every aspect of our business.

                        Reliability – Our customers depend on consistent supply and dependable service, and we are committed to delivering both.

                        Innovation – We support modern product development by providing ingredients that help brands create high-performance and competitive products.

                        Partnership – We believe in building long-term relationships with our customers, suppliers, and partners to drive mutual growth and success.</p>

                    </div>

                  }
                  {/* Categories items display */}
                  <div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart button */}
            <button className="flex items-center gap-1 text-sm hover:text-amber-600 cursor-pointer">
              <ShoppingCart />
              <h3>Cart</h3>
            </button>

          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-10 mt-2">
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
