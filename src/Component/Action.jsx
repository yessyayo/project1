import React from 'react';

export default function Action() {
  return (
    <div>
      <div className='border-t-[#ddd] border-t-2 border-b-[#ddd] border-b-2 py-[35px] mx-20 flex justify-around'>
        {/* Free Shipping */}
        <div className='flex justify-center items-center'>
          <div className='text-red-500'>
            <i className='pi pi-truck text-[60px]'></i>
          </div>
          <div>
            <h1 className='text-[16px] font-bold mb-[5px] tracking-wider uppercase'>Free Shipping</h1>
            <p className='text-[14px] text-[#222] capitalize'>Free shipping worldwide</p>
          </div>
        </div>

        {/* 24 x 7 Service */}
        <div className='flex justify-center items-center border-l-2 border-l-[#ddd] pl-20 '>
          <div className='text-red-500 '>
            <i className='pi pi-history text-[60px]'></i>
          </div>
          <div>
          <h1 className='text-[16px] font-bold mb-[5px] tracking-wider uppercase'>24 x 7 Service</h1>
          <p className='text-[14px] text-[#222] capitalize'>Online service available 24 x 7</p>
          </div>
        </div>

        {/* Festival Offer */}
        <div className='flex justify-center items-center border-l-2 border-l-[#ddd] pl-20 '>
          <div className='text-red-500 '>
            <i className='pi pi-megaphone text-[60px]'></i>
          </div>
          <div>
          <h1 className='text-[16px] font-bold mb-[5px] tracking-wider uppercase'>Festival Offer</h1>
          <p className='text-sm text-gray-6text-[14px] text-[#222] capitalize'>New special festival offers online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
