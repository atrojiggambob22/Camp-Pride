import React from "react";
// import { MapPin, Phone, Clock, Calendar, ArrowRight, Facebook, Instagram, Map } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-white"> {/* White outer background */}
      <footer className="bg-[#f3f3f3] w-full text-white"> {/* Dark blue footer */}
        {/* Top accent line */}
        <div className="w-full h-1"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            
            {/* Brand + About */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-red-600 text-7xl font-serif italic leading-none">L</span>
                <div>
                  <h2 className="text-red-600 text-2xl font-semibold tracking-wide">
                    CAMP & PRIDE
                  </h2>
                  <div className="flex items-center gap-2 text-gray-300 text-sm tracking-[0.2em]">
                    <span className="w-6 h-px bg-gray-500"></span>
                    EVENT CENTER
                    <span className="w-6 h-px bg-gray-500"></span>
                  </div>
                </div>
              </div>

              <p className="text-black leading-relaxed max-w-sm">
                Camp and Pride Event Center is where unforgettable moments come to life. 
                From elegant weddings to corporate events, we provide the perfect setting for every celebration.
              </p>
            </div>

            {/* Location */}
            <div className="border-l border-gray-700 pl-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-700/20 flex items-center justify-center">
                  {/* <MapPin className="w-5 h-5 text-red-500" /> */}
                </div>
                <h3 className="font-semibold tracking-widest text-sm text-black">LOCATION</h3>
                <p className="text-sm text-black">
                 22a Eastern Bypass, <br /> Port Harcourt, 500101, Rivers State
                </p>
                {/* <p className="text-sm text-black">
                  Conveniently located with ample parking and easy access.
                </p> */}
              </div>
            </div>

            {/* Contact */}
            <div className="border-l border-gray-700 pl-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-700/20 flex items-center justify-center">
                  {/* <Phone className="w-5 h-5 text-red-500" /> */}
                </div>
                <h3 className="font-semibold tracking-widest text-sm text-black">CONTACT</h3>
                <p className="text-sm text-black">(123) 456-7890</p>
                <p className="text-sm text-black">info@campandpride.com</p>
                <p className="text-sm text-black">www.campandpride.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="border-l border-gray-700 pl-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-700/20 flex items-center justify-center">
                  {/* <Clock className="w-5 h-5 text-red-500" /> */}
                </div>
                <h3 className="font-semibold tracking-widest text-sm text-black">HOURS</h3>
                <p className="text-sm text-black">Monday - Friday <br /> 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-black">Saturday <br /> 10:00 AM - 4:00 PM</p>
                <p className="text-sm text-black">Sunday <br /> By Appointment</p>
              </div>
            </div>

          </div>

          {/* Book Event CTA */}
          <div className="mt-12 border-t border-gray-700 pt-8 flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-700/20 flex items-center justify-center shrink-0">
                {/* <Calendar className="w-5 h-5 text-red-500" /> */}
              </div>
              <div>
                <h3 className="font-semibold tracking-widest text-sm text-black mb-2">BOOK YOUR EVENT</h3>
                <p className="text-sm text-black max-w-xs">
                  Let our team help you create an experience to remember.
                </p>
              </div>
            </div>
            
            <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-sm flex items-center gap-2 font-medium transition">
              {/* BOOK NOW <ArrowRight className="w-4 h-4" /> */}
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 bg-[#081830]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm tracking-[0.3em] text-gray-300 font-medium">
              CELEBRATE. INSPIRE. CREATE MEMORIES.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300">FOLLOW US</span>
              <div className="w-px h-6 bg-gray-700"></div>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full border-gray-600 flex items-center justify-center hover:bg-red-700 hover:text-white hover:border-red-700 transition">
                  {/* <Facebook className="w-4 h-4" /> */}
                </a>
                <a href="#" className="w-9 h-9 rounded-full border-gray-600 flex items-center justify-center hover:bg-red-700 hover:text-white hover:border-red-700 transition">
                  {/* <Instagram className="w-4 h-4" /> */}
                </a>
                <a href="#" className="w-9 h-9 rounded-full border-gray-600 flex items-center justify-center hover:bg-red-700 hover:text-white hover:border-red-700 transition">
                  {/* <Map className="w-4 h-4" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}