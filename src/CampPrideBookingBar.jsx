import React from "react";
// import { MapPin, ExternalLink } from "lucide-react";

export default function CampPrideBookingBar() {
  return (
    <div className="w-full bg-white border-t border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 py-5">
          
          {/* Left: Camp & Pride Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <span className="text-red-600 text-5xl font-serif italic leading-none">L</span>
              <h1 className="text-xl md:text-2xl font-semibold text-[#0A2F6E] truncate">
                CAMP & PRIDE EVENT CENTER
              </h1>
            </div>
            <a 
              href="https://maps.google.com/?q=Port+Harcourt+Rivers+State+Nigeria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-[#0A2F6E] mt-2"
            >
              {/* <MapPin className="w-3.5 h-3.5" /> */}
              15 Celebration Avenue, GRA Phase 2, Port Harcourt, Rivers State, NG
              {/* <ExternalLink className="w-3.5 h-3.5 ml-0.5" /> */}
            </a>
          </div>

          {/* Right: Event Dates + Actions */}
          <div className="flex items-center gap-3 flex-wrap shrink-0">
            
            {/* Event Date Start */}
            <div className="text-center">
              <p className="text-4xl font-bold text-[#0A2F6E] leading-none">25</p>
              <p className="text-xs text-gray-600 leading-tight">
                OCT <span className="block font-medium">SAT</span>
              </p>
            </div>

            {/* Event Date End */}
            <div className="text-center">
              <p className="text-4xl font-bold text-[#0A2F6E] leading-none">26</p>
              <p className="text-xs text-gray-600 leading-tight">
                OCT <span className="block font-medium">SUN</span>
              </p>
            </div>

            {/* Event Type */}
            <button className="px-3 py-2 border-gray-300 rounded text-sm text-[#0A2F6E] font-medium hover:bg-gray-50 transition">
              Wedding Reception
            </button>

            {/* Capacity */}
            <button className="px-4 py-2 border-gray-300 rounded text-sm text-[#0A2F6E] font-medium hover:bg-gray-50 transition">
              Up to 500 Guests
            </button>

            {/* CTA Button */}
            <button className="px-5 py-2 bg-[#0A2F6E] hover:bg-[#082559] text-white rounded text-sm font-semibold transition">
              Check Availability & Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}