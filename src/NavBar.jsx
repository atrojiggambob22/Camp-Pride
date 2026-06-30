import React, { useState } from "react";
import { X, Menu, ChevronRight, ChevronDown } from "lucide-react";
import CampLogo from "../public/images/CampLogo.PNG";
/**
 * Responsive nav bar:
 * - Mobile / tablet (< lg): hamburger button opens a full-height
 *   slide-in panel from the left, matching the Hilton-style menu —
 *   primary links, a divider, a secondary brand mark, then expandable
 *   sections with a chevron.
 * - Laptop / desktop (>= lg): collapses into a standard horizontal
 *   nav bar with hover dropdowns for the expandable sections.
 *
 * Customize BRAND, LINKS and EXPANDABLE below for your own project.
 */

const BRAND = "Hilton";
const TAGLINE = "FOR THE STAY";

const LINKS = ["Home",  "Gallery",  "Dining", "Events"];

const EXPANDABLE = [
  // { label: "Hotels & Resorts", items: ["All Brands", "Find a Hotel", "Special Offers"] },
  // { label: "Hilton Honors", items: ["Join Now", "Sign In", "Member Benefits"] },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (label) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

  return (
    <header className="relative -left-20  w-full border-b border-gray-200 bg-white ">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <img src={CampLogo} alt=""  className="h-20"/>
        <span className="font-serif text-2xl font-bold tracking-tight text-blue-950">
        
         
        </span>

        {/* Desktop nav (laptop and up) */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-blue-950 hover:text-blue-700 transition-colors"
            >
              {link}
            </a>
          ))}

          {EXPANDABLE.map((section) => (
            <div key={section.label} className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-blue-950 hover:text-blue-700 transition-colors">
                {section.label}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full w-48 rounded-md border border-gray-200 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {section.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-blue-950 hover:bg-gray-50"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden rounded-md bg-blue-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900 transition-colors sm:inline-block"
          >
            Sign In
          </a>

          {/* Hamburger (mobile/tablet only) */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden rounded-md border border-blue-950 p-2 text-blue-950"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
         {/* <button >
      Sign In
      </button> */}
      </div>

      {/* Mobile slide-in panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div className="absolute left-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between px-5 pt-5">
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-md border border-blue-950 p-2 text-blue-950"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-5 pt-6">
              <span className="font-serif text-3xl font-bold tracking-tight text-blue-950">
                {BRAND}
                <span className="align-top text-sm">&reg;</span>
              </span>
            </div>

            <nav className="mt-6 flex flex-col">
              {LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="border-b border-gray-200 px-5 py-4 text-lg text-blue-950"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="px-5 py-6">
              <div className="inline-block border-2 border-blue-950 px-4 py-2">
                <span className="font-serif text-xl font-bold text-blue-950">{BRAND}</span>
              </div>
              <p className="mt-1 text-xs font-bold tracking-wide text-blue-950">{TAGLINE}</p>
            </div>

            <div>
              {EXPANDABLE.map((section) => (
                <div key={section.label} className="border-t border-gray-200">
                  <button
                    onClick={() => toggleSection(section.label)}
                    className="flex w-full items-center justify-between px-5 py-4 text-lg text-blue-950"
                  >
                    {section.label}
                    <ChevronRight
                      size={18}
                      className={`transition-transform ${
                        openSection === section.label ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openSection === section.label && (
                    <div className="bg-gray-50 px-5 pb-3">
                      {section.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block py-2 text-sm text-blue-950"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
     
    </header>
  );
}
