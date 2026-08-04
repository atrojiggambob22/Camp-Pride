import React from "react";
import { MapPin, CalendarDays, Users } from "lucide-react";

export default function CampPrideBookingBar() {
  return (
    <div className="w-full border-b border-navy-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Info */}
          <div className="min-w-0 flex-1">
            <a
              href="https://maps.google.com/?q=22a+Eastern+Bypass+Port+Harcourt+Rivers+State"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-navy-900"
            >
              <MapPin className="h-4 w-4 shrink-0 text-gold-600" />
              <span className="truncate">
                22a Eastern Bypass, Port Harcourt, 500101, Rivers State
              </span>
            </a>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-md border border-navy-100 px-4 py-2.5 text-sm text-navy-900">
              <CalendarDays size={16} className="text-gold-600" />
              <span className="font-medium">Up to 500 Guests</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-md border border-navy-100 px-4 py-2.5 text-sm text-navy-900">
              <Users size={16} className="text-gold-600" />
              <span className="font-medium">Weddings &amp; Corporate</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-800"
            >
              Check Availability &amp; Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
