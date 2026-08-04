import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Calendar,
  ArrowRight,
  Share2,
  Camera,
  Mail,
  Globe,
} from "lucide-react";
import CampLogo from "/images/CampLogo.PNG?url";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={CampLogo} alt="Camp and Pride logo" className="h-14 w-auto" />
              <div>
                <h2 className="font-display text-xl font-bold text-white">CAMP &amp; PRIDE</h2>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                  Event Center
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-100">
              Camp and Pride Event Center is where unforgettable moments come to life.
              From elegant weddings to corporate events, we provide the perfect setting
              for every celebration.
            </p>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-gold-400" />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                Location
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-100">
              22a Eastern Bypass,
              <br />
              Port Harcourt, 500101,
              <br />
              Rivers State, Nigeria
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-gold-400" />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                Contact
              </h3>
            </div>
            <div className="mt-4 space-y-2 text-sm text-navy-100">
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold-400" /> (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-gold-400" /> info@campandpride.com
              </p>
              <p className="flex items-center gap-2">
                <Globe size={14} className="text-gold-400" /> www.campandpride.com
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gold-400" />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                Hours
              </h3>
            </div>
            <div className="mt-4 space-y-2 text-sm text-navy-100">
              <p>
                <span className="font-medium text-white">Mon – Fri</span>
                <br />
                9:00 AM – 6:00 PM
              </p>
              <p>
                <span className="font-medium text-white">Saturday</span>
                <br />
                10:00 AM – 4:00 PM
              </p>
              <p>
                <span className="font-medium text-white">Sunday</span>
                <br />
                By Appointment
              </p>
            </div>
          </div>
        </div>

        {/* Book CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
              <Calendar size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                Book Your Event
              </h3>
              <p className="mt-1 max-w-xs text-sm text-navy-100">
                Let our team help you create an experience to remember.
              </p>
            </div>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-colors hover:bg-gold-400"
          >
            BOOK NOW <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-navy-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-navy-200">
            Celebrate. Inspire. Create Memories.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-navy-200">Follow Us</span>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex gap-3">
              <a
                href="#"
aria-label="Share"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-navy-100 transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                aria-label="Gallery"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-navy-100 transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950"
              >
                <Camera size={16} />
              </a>
              <a
                href="#"
                aria-label="Map"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-navy-100 transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
