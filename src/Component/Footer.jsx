import React from 'react';
import image from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/logo.png';
import card1 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/visa.png';
import card2 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/mastercard.png';
import card3 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/paypal.png';
import card4 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/american-express.png';
import card5 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/discover.png';

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#FFFFFF40] px-20">
        <div className="">
          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10 border-b border-[#eee] pb-10">
            {/* Newsletter Text */}
            <div className="md:w-1/2 text-center md:text-left border-r-2 border-r-[#eee]">
              <h4 className="text-2xl font-bold mb-2">KNOW IT ALL FIRST!</h4>
              <p className="text-gray-600">
                Never Miss Anything From Multikart By Signing Up To Our Newsletter.
              </p>
            </div>


            {/* Newsletter Form */}
            <div className="md:w-1/2 flex flex-col md:flex-row items-center gap-5 pl-48">
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full md:w-2/3 px-4 py-3 border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-[29px] py-[13px] bg-[#ff4c3b] text-white  hover:bg-white hover:text-black border border-[#ff4c3b] uppercase"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Content */}
          <div className="flex gap-32 mb-10">
            {/* About Section */}
            <div className='flex flex-col gap-5 w-1/3'>
              <div>
                <img src={image} alt="logo" className="mb-4" />
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex gap-4 text-gray-600 text-xl">
                <i className="pi pi-facebook cursor-pointer hover:text-blue-600"></i>
                <i className="pi pi-google cursor-pointer hover:text-red-600"></i>
                <i className="pi pi-twitter cursor-pointer hover:text-blue-400"></i>
                <i className="pi pi-instagram cursor-pointer hover:text-pink-500"></i>
                <i className="pi pi-wifi cursor-pointer hover:text-green-500"></i>
              </div>
            </div>

            <div className='flex-1 flex flex-row'>
              {/* My Account Section */}
              <div className=' flex-1 flex flex-col gap-5 px-3'>
                <h4 className="text-lg font-semibold mb-4">My Account</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Women</li>
                  <li>Clothing</li>
                  <li>Accessories</li>
                  <li>Featured</li>
                </ul>
              </div>

              {/* Why Choose Us Section */}
              <div className='flex-1 flex flex-col gap-5 px-3'>
                <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Shipping & Return</li>
                  <li>Secure Shopping</li>
                  <li>Gallery</li>
                  <li>Affiliates</li>
                  <li>Contacts</li>
                </ul>
              </div>

              {/* Store Information */}
              <div className='flex-1 flex flex-col gap-5 px-3'>
                <h4 className="text-lg font-semibold mb-4">Store Information</h4>
                <div className="space-y-4 text-gray-600">
                  <div className="flex gap-2">
                    <i className="pi pi-map-marker"></i>
                    <p>Multikart Demo Store, Demo Store India 345-659</p>
                  </div>
                  <div className="flex gap-2">
                    <i className="pi pi-phone"></i>
                    <p>Call Us: 123-456-7898</p>
                  </div>
                  <div className="flex gap-2">
                    <i className="pi pi-envelope"></i>
                    <p>Email Us: Support@Fiot.com</p>
                  </div>
                  <div className="flex gap-2">
                    <i className="pi pi-box"></i>
                    <p>Fax: 123456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 text-sm">
                © 2023-24 ThemeForest. Powered by PixelStrap.
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                <img src={card1} alt="Visa" className="w-12" />
                <img src={card2} alt="MasterCard" className="w-12" />
                <img src={card3} alt="PayPal" className="w-12" />
                <img src={card4} alt="American Express" className="w-12" />
                <img src={card5} alt="Discover" className="w-12" />
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
