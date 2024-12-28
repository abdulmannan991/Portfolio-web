"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

    return (

<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-black/50 via-black/30 to-black/50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-teal-400 text-2xl font-extrabold tracking-wide cursor-pointer hover:text-teal-200 transition">
            Abdul Mannan
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="#Home"
              className="text-white hover:text-teal-300 transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="#Skills"
              className="text-white hover:text-teal-300 transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              Skills
            </Link>
            <Link
              href="#Services"
              className="text-white hover:text-teal-300 transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              Services
            </Link>
            <Link
              href="#Projects"
              className="text-white hover:text-teal-300 transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              Projects
            </Link>

            <Link
  href="#Projectss"
  className="block text-white hover:text-teal-300 transition-all duration-300"
  onClick={() => setMenuOpen(false)}
>
  Contact
</Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
                
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5M3.75 15h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-black/60 rounded-lg shadow-lg p-4 space-y-4 md:hidden animate-slide-down">
            <Link
              href="#Home"
              className="block text-white hover:text-teal-300 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="#Skills"
              className="block text-white hover:text-teal-300 transition-all duration-300"
            >
              Skills
            </Link>
            <Link
              href="#Services"
              className="block text-white hover:text-teal-300 transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href="#Projects"
              className="block text-white hover:text-teal-300 transition-all duration-300"
            >
              Projects
            </Link>
            <Link
  href="#Projectss"
  className="block text-white hover:text-teal-300 transition-all duration-300"
  onClick={() => setMenuOpen(false)}
>
  Contact
</Link>

          </div>
        )}
      </div>
    </nav>
    

  );
}
