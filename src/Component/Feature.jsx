import React from 'react'
import image1 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/sub-banner1.5d5f9c6f.jpg'
import image2 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/sub-banner2.3b2448f3.jpg'

const feature = [
    {
        img: image1,
        title:'10% off',
        subtitle: 'Men'
    },

    {
        img: image2,
        title: '10% off',
        subtitle: 'women'
    }
]

export default function Feature() {
  return (
    <div className='flex gap-5 justify-center items-center w-full h-[50vh]'>
        {
            // mapping function
            feature.map((item, index) => (
                // the feature section items
            <div className='relative'>
                <img src={item.img} alt="image" />
                <div className='absolute top-1/2 right-24 transform -translate-y-1/2 flex flex-col justify-center items-center'>
                    <p className='text-[#ff4c3b] font-bold tracking-wide uppercase text-[18px]'>{item.title}</p>
                    <h1 className='text-[55px] tracking-normal font-bold uppercase'>{item.subtitle}</h1> 
                </div>
           </div>
            ))
        }
       
    </div>
  )
}
