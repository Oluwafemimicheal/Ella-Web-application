import { Amphora, CalendarHeart, ChevronRight, Facebook, HandCoins, Instagram, Joystick, Lollipop, Package, Plus, Shapes, ShoppingBasket, Truck } from 'lucide-react'
import React from 'react'
import logo from "../../assets/images/simple-logo.png"
import { FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SideMenu = ({ closeMenu }) => {
  return (
    <div onClick={() => closeMenu(false)} className='z-99 fixed top-0 left-0 w-full bg-gray-400/40 h-screen overflow-hidden'>
      <div onClick={(e) => e.stopPropagation()} className='w-[85%] bg-white h-full overflow-scroll flex flex-col '>
        <div className='p-3 flex justify-between pb-2 border-b border-gray-300 h-25 items-center  font-semibold'>
          <Link to={'/'} className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <img src={logo} alt="Logo" width={30} />
              <h1 className="block lg:hidden font-bold lg:text-lg text-md text-gold">Ella Nuts and Oil</h1>
            </div>
          </Link>
          <Plus onClick={() => closeMenu(false)} className='rotate-45' />
        </div>

        {/* call to actions */}
        <div>
          <div className='px-3 p-2 flex justify-between border-b border-gray-300'>
            <small>NEED HELP?</small>
            <ChevronRight size={18} />
          </div>
          <div className='px-3 p-2 flex justify-between border-b border-gray-300'>
            <small>TALK TO US ON WHATSAPP?</small>
            <ChevronRight size={18} />
          </div>
          <div className='px-3 p-2 flex justify-between '>
            <small>PICK YOUR PRODUCT HERE</small>
            <ChevronRight size={18} />
          </div>
        </div>

        {/* order section */}
        <div className='text-lg flex flex-col gap-2 border-b border-gray-300 pb-4'>
          <div className='px-3 p-2 flex justify-start gap-2 items-center'>
            <Truck size={22} />
            <small>Orders</small>
          </div>
          <div className='px-3 p-2 flex justify-start gap-2 items-center'>
            <CalendarHeart size={22} />
            <small>Monthly Products</small>
          </div>
          <div className='px-3 p-2 flex justify-start gap-2 items-center'>
            <ShoppingBasket size={22} />
            <small>Recent Product and Items</small>
          </div>
          <div className='px-3 p-2 flex justify-start gap-2 items-center'>
            <HandCoins size={22} />
            <small className='flex items-center gap-1'>Sales <span className=' text-[9px] bg-gold-soft text-white py-0.5 px-2 rounded-sm'>% OFF</span></small>
          </div>
        </div>

        {/* our categories */}
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-2 pb-3 border-b border-gray-300'>
            <div className='px-3 p-2 flex justify-between gap-2 items-center'>
              <small>PRODUCT CATEGORIES</small>
              <small className='text-gold-soft'>See All</small>
            </div>
            <div className='px-3 p-2 flex justify-start gap-2 items-center'>
              <Lollipop size={22} />
              <small>Lip Gloss Base</small>
            </div>
            <div className='px-3 p-2 flex justify-start gap-2 items-center'>
              <Amphora size={22} />
              <small>Oil-base pigment</small>
            </div>
            <div className='px-3 p-2 flex justify-start gap-2 items-center'>
              <Package size={22} />
              <small>Package plastic</small>
            </div>
            <div className='px-3 p-2 flex justify-start gap-2 items-center'>
              <Shapes size={22} />
              <small>Fruits shapes</small>
            </div>
            <div className='px-3 p-2 flex justify-start gap-2 items-center'>
              <Joystick size={22} />
              <small>Lipgloss essential</small>
            </div>

          </div>

          {/* social media accounts */}
          <div className='flex justify-center items-center gap-7 h-20 p-3 text-gold'>
            <Facebook size={22} />
            <Instagram size={22} />
            <FaTiktok size={22} />
            <FaWhatsapp size={22} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default SideMenu
