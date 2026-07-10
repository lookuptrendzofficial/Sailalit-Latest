"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[90px] px-6">

        {/* Logo */}
        <Link href="/">
          <img
            src="https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg"
            alt="Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
          <Link href="/" className="text-[#C61F26] border-b-2 border-[#C61F26] pb-1">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#C61F26]">
            About Us
          </Link>

          <Link href="/services" className="hover:text-[#C61F26]">
            Services
          </Link>

          <Link href="/projects" className="hover:text-[#C61F26]">
            Projects
          </Link>

          <Link href="/clients" className="hover:text-[#C61F26]">
            Our Clients
          </Link>

          <Link href="/testimonials" className="hover:text-[#C61F26]">
            Testimonials
          </Link>

          <Link href="/contact" className="hover:text-[#C61F26]">
            Contact Us
          </Link>
        </nav>

        {/* Call Button */}
        <a
          href="tel:8106406999"
          className="hidden lg:block bg-[#C61F26] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700"
        >
          ☎ 81064 06999
        </a>

        {/* Mobile Menu */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t">
          <Link href="/" className="block px-6 py-4 border-b">Home</Link>
          <Link href="/about" className="block px-6 py-4 border-b">About Us</Link>
          <Link href="/services" className="block px-6 py-4 border-b">Services</Link>
          <Link href="/projects" className="block px-6 py-4 border-b">Projects</Link>
          <Link href="/clients" className="block px-6 py-4 border-b">Our Clients</Link>
          <Link href="/testimonials" className="block px-6 py-4 border-b">Testimonials</Link>
          <Link href="/contact" className="block px-6 py-4">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
