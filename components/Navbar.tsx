"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* SVG placeholder for APPSN logo */}
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white">
            <Image
              src={logo}
              alt="logo"
              className="w-[50px] h-[50px] rounded-2xl"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#home"
            className="text-sm font-medium text-gray-700 hover:text-[#1a7a3c] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium text-gray-700 hover:text-[#1a7a3c] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-gray-700 hover:text-[#1a7a3c] transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/directory"
            className="hidden md:inline-flex btn-green text-sm"
          >
            Find a Surveyor
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#1a7a3c]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block text-sm font-medium text-gray-700 py-2"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/"
            className="block text-sm font-medium text-gray-700 py-2"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/"
            className="block text-sm font-medium text-gray-700 py-2"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/directory"
            className="btn-green inline-flex text-sm mt-2"
            onClick={() => setOpen(false)}
          >
            Find a Surveyor
          </Link>
        </div>
      )}
    </header>
  );
}
