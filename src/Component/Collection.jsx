import React from 'react'
import image01 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/9.jpg'
import image1 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/10.jpg'
import image002 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/11.jpg'
import image02 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/12.jpg'
import image2 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/22.jpg'
import image003 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/13.jpg'
import image03 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/8.jpg'
import image3 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/15.jpg'
import image04 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/14.jpg'
import image4 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/16.jpg'
import image005 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/39.jpg'
import image05 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/14.jpg'
import image5 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/25.jpg'

const list = [
    {
        image: image01,
        image2: image1,
        title: 'waist dress',
        subtitle1: '$184.00',
        subtitle2: '$230.00',
    },
    {
        image: image002,
        image2: image02,
        image3: image2,
        title: 'crop top',
        subtitle1: '$72.60',
        subtitle2: '$121.00',
    },
    {
        image: image003,
        image2: image03,
        image3: image3,
        title: 'sleeveless dress',
        subtitle1: '$261.00',
        subtitle2: '$290.00',
    },
    {
        image: image04,
        image2: image4,
        title: 'v-neck dress',
        subtitle1: '$94.50',
        subtitle2: '$315.00',
    },
    // {
    //     image: image005,
    //     image2: image05,
    //     image3: image5 ,
    //     title: 'trim dress',
    //     subtitle1: '$87.00',
    //     subtitle2: '$145.00',
    // },
    // {
    //     image: image6 ,
    //     title: 'belted dress',
    //     subtitle1: '$111.00',
    //     subtitle2: '$185.00',
    // },
    // {
    //     image: image7 ,
    //     title: 'fitted dress',
    //     subtitle1: '$104.40',
    //     subtitle2: '$174.00',
    // },
    // {
    //     image: image8 ,
    //     title: 'belted top',
    //     subtitle1: '$49.00',
    //     subtitle2: '$98.00',
    // },
]


export default function Collection() {
  return (
    <div className='flex flex-col gap-10'>
        <div className='flex flex-col justify-center items-center'>
            <h4 className='text-[#ff4c3b] mb-1 text-[18px] capitalize tracking-wide'>special offer</h4>
            <div className='flex flex-col justify-center items-center mb-3'>
                <h2 className='text-[32px] pb-1 uppercase text-[#222] font-bold'>top collection</h2>
                <hr className='border border-[#ff4c3b] w-[70px]'/>
            </div>
        </div>

        <div>
            <p className='text-center pb-2 text-[14px] text-[#777]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className='flex gap-5 pl-48 pr-48'>
                {
                    list.map((item, index) => (
                        
                        <div className='flex flex-col relative'>
                            {/* display image */}
                            <div className='relative group'>
                                <img src={item.image} alt="" />
                                <img className='hidden' src="" alt="" />
                            </div>
                             {/* i want this images to be on the display image towards the bottom at the left hand size. make the image small */}
                            {/* <div className='absolute top-1/2 left-2 flex flex-col'>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div> */}
                            {/* i want this icons to be at the rignt hand size of the display image when i over on it*/}
                            <div className="absolute bottom-20 right-0 flex flex-col gap-4">
                                <i className="pi pi-shopping-cart bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-200"></i>
                                <i className="pi pi-heart bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-200"></i>
                                <i className="pi pi-search bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-200"></i>
                                <i className="pi pi-sync bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-200"></i>
                            </div>

                            
                            <div>
                                <div className='flex gap-2'>
                                    <i className='pi pi-star text-[#ffa200]'></i>
                                    <i className='pi pi-star text-[#ffa200]'></i>
                                    <i className='pi pi-star text-[#ffa200]'></i>
                                    <i className='pi pi-star text-[#ffa200]'></i>
                                    <i className='pi pi-star'></i>
                                </div>
            
                                <p>{item.title}</p>
            
                                <div className='flex'>
                                    <h1>{item.subtitle1}</h1>
                                    <p className='line-through'>{item.subtitle2}</p>
                                </div>
                                
                                <div className="flex gap-2">
                                    {/* Circle 1 */}
                                    <div className="w-5 h-5 bg-[#7ee768] rounded-full"></div>
                                    {/* Circle 2 */}
                                    <div className="w-5 h-5 bg-[#1b1b1b] rounded-full"></div>
                                </div>
            
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    </div>
  )
}
