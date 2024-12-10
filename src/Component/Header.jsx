import React from 'react'
import image from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/logo.png'

export default function Header() {
  return (

    <header className='flex flex-row justify-between items-center h-[15vh] w-full px-20'>
        {/* Hamburger and logo part */}
        <div className='flex flex-row gap-10 items-center'>
            <i className="pi pi-bars text-[28px] text-[#222] cursor-pointer"></i>
            <img src={image} alt="logo" />
        </div>
        {/* navbar part */}
        <nav className=''>
            <ul className='flex items-center '>
                <li className='relative group'>
                   
                    <span className='flex items-center cursor-pointer uppercase text-lg'>
                        Home
                        <span className='pi pi-angle-down text-sm py-3 px-3'></span>
                    </span>
                    
                    
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 w-full">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    </ul>
                </li>
                <li className='relative group'>
                   
                    <span className='flex items-center cursor-pointer uppercase text-lg'>
                        Shop
                        <span className='pi pi-angle-down text-sm py-3 px-3'></span>
                    </span>
                    
                    
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 w-full">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    </ul>
                </li>
                <li className='relative group'>
                   
                    <span className='flex items-center cursor-pointer uppercase text-lg'>
                        Products
                        <span className='pi pi-angle-down text-sm py-3 px-3'></span>
                    </span>
                    
                    
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 w-full">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    </ul>
                </li>
                <li className='relative group'>
                   
                    <span className='flex items-center cursor-pointer uppercase text-lg'>
                        Features
                        <span className='pi pi-angle-down text-sm py-3 px-3'></span>
                    </span>
                    
                    
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 w-full">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    </ul>
                </li>
                <li className='relative group'>
                   
                    <span className='flex items-center cursor-pointer uppercase text-lg'>
                        Pages
                        <span className='pi pi-angle-down text-sm py-3 px-3'></span>
                    </span>
                    
                    
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 w-full">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    </ul>
                </li>
                <li className='relative group'>
                   
                    <span className='flex items-center cursor-pointer uppercase text-lg'>
                        Blogs
                        <span className='pi pi-angle-down text-sm py-3 px-3'></span>
                    </span>
                    
                    
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 w-full">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    </ul>
                </li>

                <span className='pl-3 text-2xl pi pi-search'></span>
                <span className='pl-3 text-2xl pi pi-cog relative group'>
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 w-auto">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    </ul>  
                </span>
                <span className='pl-3 text-2xl pi pi-shopping-bag'></span>
            </ul>
            
        </nav>
    </header>
  )
}
