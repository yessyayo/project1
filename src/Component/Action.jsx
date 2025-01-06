import React from 'react';

export default function Action() {
  return (
    <div>
      <div className="border-t-[#ddd] border-t-2 border-b-[#ddd] border-b-2 py-[35px] px-4 sm:px-10 md:px-20">
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-5">
          {/* Free Shipping */}
          <div className="flex justify-center items-center">
            <div className="text-red-500">
              <i className="pi pi-truck text-[40px] sm:text-[60px]"></i>
            </div>
            <div className="ml-4">
              <h1 className="text-[14px] sm:text-[16px] font-bold mb-[5px] tracking-wider uppercase">Free Shipping</h1>
              <p className="text-[12px] sm:text-[14px] text-[#222] capitalize">Free shipping worldwide</p>
            </div>
          </div>

          {/* 24 x 7 Service */}
          <div className="flex justify-center items-center border-t sm:border-t-0 sm:border-l-2 border-l-[#ddd] pl-0 sm:pl-5">
            <div className="text-red-500">
              <i className="pi pi-history text-[40px] sm:text-[60px]"></i>
            </div>
            <div className="ml-4">
              <h1 className="text-[14px] sm:text-[16px] font-bold mb-[5px] tracking-wider uppercase">24 x 7 Service</h1>
              <p className="text-[12px] sm:text-[14px] text-[#222] capitalize">Online service available 24 x 7</p>
            </div>
          </div>

          {/* Festival Offer */}
          <div className="flex justify-center items-center border-t sm:border-t-0 sm:border-l-2 border-l-[#ddd] pl-0 sm:pl-5">
            <div className="text-red-500">
              <i className="pi pi-megaphone text-[40px] sm:text-[60px]"></i>
            </div>
            <div className="ml-4">
              <h1 className="text-[14px] sm:text-[16px] font-bold mb-[5px] tracking-wider uppercase">Festival Offer</h1>
              <p className="text-[12px] sm:text-[14px] text-[#222] capitalize">New special festival offers online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
