"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Adult Training Facility", href: "/adult-training-facility" },
    { label: "Special Explorers", href: "/special-explorers" },
    { label: "Community Adventures", href: "/community-adventures" },
    { label: "Meet Our Staff", href: "/meet-our-staff" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5 shadow-xs">
      <div className="flex items-center justify-between gap-6 py-[14px] px-5 md:px-10 max-w-[1920px] mx-auto relative">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-[52px] h-[52px] shrink-0" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="48" fill="#fff" stroke="#2E2E2E" strokeWidth="3" />
            <g fill="#C69440">
              <circle cx="50" cy="40" r="9" />
              <g stroke="#C69440" strokeWidth="3" strokeLinecap="round">
                <line x1="50" y1="17" x2="50" y2="26" />
                <line x1="31" y1="24" x2="36" y2="31" />
                <line x1="69" y1="24" x2="64" y2="31" />
                <line x1="24" y1="40" x2="33" y2="40" />
                <line x1="76" y1="40" x2="67" y2="40" />
                <line x1="28" y1="54" x2="35" y2="49" />
                <line x1="72" y1="54" x2="65" y2="49" />
              </g>
            </g>
            <path
              d="M50 84C34 84 22 74 20 60c8-4 16-2 21 4 3-6 6-9 9-9s6 3 9 9c5-6 13-8 21-4-2 14-14 24-30 24z"
              fill="#2E2E2E"
            />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[19px] tracking-[0.06em] text-[#3A3226]">
              JASMINE NYREE
            </span>
            <span className="font-serif text-[8.5px] tracking-[0.42em] text-[#6B6055] mt-[5px] border-t border-b border-[#E3C88F] py-[3px]">
              CORPORATION
            </span>
            <span className="text-[6.5px] italic text-[#8C8175] mt-[4px] tracking-[0.02em] leading-[1.45]">
              A Community Development Organization<br />
              and a Registered Community Organization
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-[22px]" id="nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[12.5px] relative pb-[6px] transition-colors duration-200 whitespace-nowrap ${
                  isActive ? "text-[#C69440] font-semibold" : "text-[#4A4A4A] hover:text-[#A87A2C]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[20px] h-[2px] bg-[#C69440]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS (DONATE & MOBILE TOGGLE) */}
        <div className="flex items-center gap-[10px]">
          <Link
            href="/donate"
            className="bg-[#C69440] hover:bg-[#A87A2C] text-white px-6 py-[13px] rounded-[3px] text-[12px] font-bold tracking-[0.12em] uppercase inline-flex items-center gap-[9px] transition-colors duration-250"
          >
            <span className="hidden sm:inline">Donate</span>
            <svg
              className="w-[14px] h-[14px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-[#232323] hover:text-[#C69440] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE NAV DROPDOWN */}
        {isOpen && (
          <nav className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-[#ECE3D2] shadow-xl py-5 px-5 md:px-10 flex flex-col gap-4 z-50">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-[15px] py-1 border-b border-gray-100 ${
                  pathname === item.href ? "text-[#C69440] font-bold" : "text-[#4A4A4A]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="text-[15px] py-1 text-[#C69440] font-bold"
            >
              Donate
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
