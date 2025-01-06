import React from 'react'
import data from '../data/product.json';


export default function Exclusive() {
    const list = data;
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20 mb-20">
        <div className="flex flex-col justify-center items-center">
            <h4 className="text-[#ff4c3b] mb-1 text-[18px] capitalize tracking-wide">exclusive products</h4>
            <div className="flex flex-col justify-center items-center mb-3">
                <h2 className="text-[32px] pb-1 uppercase text-[#222] font-bold">special products</h2>
                <hr className="border border-[#ff4c3b] w-[70px]" />
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <ul className='flex gap-3 '>
                <li>NEW ARRIVAL</li>
                <li>FEATURED</li>
                <li>SPECIAL</li>   
            </ul>
        </div>

        <div className=''>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-20">
                {list.map((item, index) => (
                <div key={index} className="group flex flex-col">
                {/* Display Image */}
                <div className="relative group ">
                    <img src={item.images[0]} alt="" className="w-full h-auto object-cover" />

                    {/* Small Images */}
                    <div className="absolute bottom-0 left-0 flex flex-col">
                        {item.images.map((img, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={img}
                                className="h-[30px] mt-1 opacity-50 hover:opacity-100"
                            />
                        ))}
                    </div>

                    {/* Hover Icons */}
                    <div className="absolute bottom-0 right-0 hidden group-hover:flex flex-col gap-4">
                        <i className="pi pi-shopping-cart p-2 rounded-full cursor-pointer text-gray-500 font-bold hover:text-red-500"></i>
                        <i className="pi pi-heart-fill p-2 rounded-full cursor-pointer text-gray-500 font-bold hover:text-red-500"></i>
                        <i className="pi pi-search p-2 rounded-full cursor-pointer text-gray-500 font-bold hover:text-red-500"></i>
                        <i className="pi pi-sync p-2 rounded-full cursor-pointer text-gray-500 font-bold hover:text-red-500"></i>
                    </div>
                </div>

                {/* Product Details */}
                <div>
                    <div className="flex gap-1 my-2">
                        <i className="pi pi-star-fill text-xs text-[#ffa200]"></i>
                        <i className="pi pi-star-fill text-xs text-[#ffa200]"></i>
                        <i className="pi pi-star-fill text-xs text-[#ffa200]"></i>
                        <i className="pi pi-star-fill text-xs text-[#ffa200]"></i>
                        <i className="pi pi-star-fill text-xs text-gray-300"></i>
                    </div>

                    <p className="text-gray-500">{item.title}</p>

                    <div className="flex gap-1 items-end font-bold">
                        <h1 className="text-sm text-gray-800">${item.price.toFixed(2)}</h1>
                        <p className="line-through text-xs text-gray-400">${item.old_price}</p>
                    </div>

                    <div className="flex gap-1 mt-1">
                        {item.colour.map((colorItem, colorIndex) => (
                            <div
                                key={colorIndex}
                                className={`w-4 h-4 ${colorItem} rounded-full`}
                            ></div>
                        ))}
                    </div>
                </div>
                </div>
                 ))}
            </div>
        </div>
    </div>
  )
}
