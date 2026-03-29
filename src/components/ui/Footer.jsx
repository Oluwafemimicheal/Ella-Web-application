import { Facebook, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import { FaTiktok } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900 py-10'>
      <div className='footer h-auto w-full lg:w-300 px-5 lg:px-0 flex flex-wrap justify-between mx-auto gap-10 text-white'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-lg font-semibold'>Get Support</h2>
          <ul>
            <li>Help Center</li>
            <li>Live Chat</li>
            <li>Check Order Status</li>
            <li>Refunds</li>
            <li>Report Abuse</li>
          </ul>
        </div>
        <div className='flex flex-col gap-8'>
          <h2 className='text-lg font-semibold'>Payments and Protection</h2>
          <ul>
            <li>Safe and easy payments</li>
            <li>Money-back policy</li>
            <li>On-time shipping</li>
            <li>After-sales protections</li>
            <li>Product monitoring services</li>
          </ul>
        </div>
        <div className='flex flex-col gap-8'>
          <h2 className='text-lg font-semibold'>Source on Eliaproduct.com</h2>
          <ul>
            <li>Request for Quotation</li>
            <li>Membership program</li>
            <li>Sales tax and VAT</li>
            <li>Eliaproduct.com Reads</li>
          </ul>
        </div>
        <div className='flex flex-col gap-8'>
          <h2 className='text-lg font-semibold'>Sell on Eliaproduct.com</h2>
          <ul>
            <li>Start selling</li>
            <li>Seller Central</li>
            <li>Become a Verified Supplier</li>
            <li>Partnerships</li>
          </ul>
        </div>
        <div className='flex flex-col gap-8'>
          <h2 className='text-lg font-semibold'>Sell on Eliaproduct.com</h2>
          <ul>
            <li>About Eliaproduct.com</li>
            <li>Corporate responsibility</li>
            <li>News center</li>
            <li>Careers</li>
          </ul>
          <div className='flex flex-col gap-5'>
            <h2 className='text-lg font-semibold'>Stay Connected</h2>
            <div className='flex justify-between items-center'>
              <Facebook />
              <Linkedin />
              <Instagram />
              <FaTiktok />
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer
