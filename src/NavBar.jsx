import React, { useState } from "react";
import { createPortal } from "react-dom";
import { X, Menu, CalendarCheck, ChevronRight } from "lucide-react";
import CampLogo from "/images/CampLogo.PNG?url";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Amenities", href: "#amenities" },
  { label: "Why Us", href: "#why-us" },
  { label: "Policies", href: "#policies" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <img src={CampLogo} alt="Camp and Pride logo" className="h-14 w-auto" />
          <span className="hidden sm:block">
            <span className="block font-display text-xl font-bold leading-tight text-navy-900">
              Camp &amp; Pride
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-600">
              Event Center
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy-800 transition-colors hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-800 hover:shadow-md sm:inline-flex"
          >
            <CalendarCheck size={16} />
            Book Now
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-md border border-navy-200 p-2 text-navy-900 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

{/* Mobile slide-in panel (portal to body so it isn't trapped by backdrop-blur) */}
      {mobileOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <img src={CampLogo} alt="Camp and Pride logo" className="h-12 w-auto" />
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-md border border-navy-200 p-2 text-navy-900"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-gray-100 px-5 py-4 text-lg text-navy-900 transition-colors hover:bg-navy-50"
                >
                  {link.label}
                  <ChevronRight size={18} className="text-gold-500" />
                </a>
              ))}
            </nav>

            <div className="px-5 py-6">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-800"
              >
                <CalendarCheck size={16} />
                Book Your Event
              </a>
<p className="mt-4 text-center text-xs text-gray-500">
                Create unforgettable moments at Camp &amp; Pride Place.
              </p>
            </div>
          </div>
        </div>,
          document.body
        )}
    </header>
  );
}
