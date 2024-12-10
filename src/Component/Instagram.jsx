import React from 'react';
import image1 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/5(2).jpg';
import image2 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/7(1).jpg';
import image3 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/9(1).jpg';
import image4 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/11(1).jpg';
import image5 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/13(1).jpg';
import image6 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/2(2).jpg';


export default function Instagram() {
  return (
    <div className='mt-20'>
        {/* Instagram Section */}
        <div className="flex flex-col gap-2">
            <h1 className="text-center text-[32px] font-bold uppercase tracking-widest text-[#222] mb-[30px]"># Instagram</h1>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
               <div className='relative group'>
                    <div>
                        <img
                            src={image1}
                            alt="Instagram post 1"
                            className="w-full  object-cover"
                        />
                    </div>
                    {/*instagram overlay */}
                    <div className='absolute inset-0 bg-[#ff4c3b] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <i className='pi pi-instagram text-white text-[60px] transform group-hover:scale-300 group-hover:rotate-90 transition-transform duration-500 ease-in-out'></i>
                    </div>
                </div>

                <div className='relative group'>
                    <div>
                        <img
                            src={image2}
                            alt="Instagram post 2"
                            className="w-full object-cover "
                        />
                    </div>
                    {/*instagram overlay */}
                    <div className='absolute inset-0 bg-[#ff4c3b] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <i className='pi pi-instagram text-white text-[60px] transform group-hover:scale-300 group-hover:rotate-90 transition-transform duration-500 ease-in-out'></i>
                    </div>
                </div>

                <div className='relative group'>
                    <div>
                        <img
                            src={image3}
                            alt="Instagram post 3"
                            className="w-full object-cover"
                        />
                    </div>
                    {/*instagram overlay */}
                    <div className='absolute inset-0 bg-[#ff4c3b] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <i className='pi pi-instagram text-white text-[60px] transform group-hover:scale-300 group-hover:rotate-90 transition-transform duration-500 ease-in-out'></i>
                    </div>
                </div>
                
                <div className='relative group'>
                    <div>
                        <img
                            src={image4}
                            alt="Instagram post 4"
                            className="w-full object-cover"
                        />
                    </div>
                    {/*instagram overlay */}
                    <div className='absolute inset-0 bg-[#ff4c3b] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <i className='pi pi-instagram text-white text-[60px] transform group-hover:scale-300 group-hover:rotate-90 transition-transform duration-500 ease-in-out'></i>
                    </div>
                </div>
                
                <div className='relative group'>
                    <div>
                        <img
                            src={image5}
                            alt="Instagram post 5"
                            className="w-full object-cover"
                        />
                    </div>
                    {/*instagram overlay */}
                    <div className='absolute inset-0 bg-[#ff4c3b] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <i className='pi pi-instagram text-white text-[60px] transform group-hover:scale-300 group-hover:rotate-90 transition-transform duration-500 ease-in-out'></i>
                    </div>
                </div>

                <div className='relative group'>
                    <div>
                        <img
                            src={image6}
                            alt="Instagram post 6"
                            className="w-full object-cover"
                        />
                    </div>
                    {/*instagram overlay */}
                    <div className='absolute inset-0 bg-[#ff4c3b] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <i className='pi pi-instagram text-white text-[60px] transform group-hover:scale-300 group-hover:rotate-90 transition-transform duration-500 ease-in-out'></i>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

