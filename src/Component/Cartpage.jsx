import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Cartpage() {
  return (
    <div>
    <Header/>
        <div className='flex justify-between items-center px-20 bg-[#f8f8f8] h-[10vh] mb-20'>
            <div>
            <h2 className='text-xl font-bold'>Cart</h2>
            </div>
            <nav>
            <ul className='flex gap-2'>
                <Link to='/'><li className='text-xl'> Home</li></Link>
                <p className='text-xl'>/</p>
                <li className='text-xl'>Cart</li>
            </ul>
            </nav>
        </div>
        {/* cart table */}
        <div className='px-20'>
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className='border-b-2'>
                <th className='px-4 py-2 text-left text-gray-700 font-semibold'>Image</th>
                <th className='px-4 py-2 text-left text-gray-700 font-semibold'>Product Name</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Price</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Quantity</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Action</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[20vh]">
                <td className="px-4 py-2">link image</td>
                <td className="px-4 py-2">link product name</td>
                <td className="px-4 py-2">$price</td>
                <td className="px-4 py-2">quantity</td>
                <td className="px-4 py-2">
                  action
                </td>
                <td className="px-4 py-2">$total</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Total Price */}
        <div className='mt-10 flex justify-end items-center gap-20 px-20'>
          <div>
            <span className='text-xl font-bold text-gray-800'>Total Price:</span>
          </div>
          <div>
            <h2 className='text-2xl font-bold pr-20'>$price</h2>
          </div>
        </div>

        
        {/* Action Buttons */}
        <div className="mt-10 mb-10 flex justify-between px-20">
          <button className="px-6 py-3 bg-[#ff4c3b] text-white font-semibold hover:bg-white hover:text-black border-2 border-[#ff4c3b] uppercase ">
            Continue Shopping
          </button>
          <button className="px-6 py-3 bg-[#ff4c3b] text-white font-semibold hover:bg-white hover:text-black border-2 border-[#ff4c3b] uppercase mr-20">
            Check Out
          </button>
        </div>
      <Footer/>
  </div>
  )
}
