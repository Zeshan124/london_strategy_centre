"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-cyan-500 text-white py-1.5 sm:py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-center sm:justify-start">
            {/* Mobile: Show only one link, Desktop: Show all */}
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
              {/* 1. Upcoming Events / Events */}
              <a
                href="#"
                className="hover:underline transition-colors duration-200"
              >
                <span className="hidden sm:inline">Upcoming Events</span>
                <span className="sm:inline lg:hidden">Upcoming Events</span>
              </a>

              {/* 2. Latest Research / Research  – ab visible */}
              <a
                href="#"
                className="hover:underline transition-colors duration-200"
              >
                <span className="hidden sm:inline">Latest Research</span>
                <span className="sm:inline lg:hidden">Latest Research</span>
              </a>

              {/* 3. Jobs at LSC / Jobs  – optional abbreviation */}
              <a
                href="#"
                className="hover:underline transition-colors duration-200"
              >
                <span className="hidden sm:inline">Jobs at LSC</span>
                <span className="sm:inline lg:hidden">Jobs at LSC</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between py-2 sm:py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Image
                src="/images/lsc_logo.png"
                alt="LSC Logo"
                width={100}
                height={75}
                className="w-24 h-15 xs:w-24 xs:h-18 sm:w-28 sm:h-21 md:w-32 md:h-24 lg:w-36 lg:h-27 xl:w-40 xl:h-30 object-contain"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-14">
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm 2xl:text-base transition-colors duration-200 whitespace-nowrap"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm 2xl:text-base transition-colors duration-200 whitespace-nowrap"
              >
                About
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-cyan-600 font-medium text-sm 2xl:text-base transition-colors duration-200 whitespace-nowrap">
                  Programmes
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                {/* Dropdown menu can be added here */}
              </div>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm 2xl:text-base transition-colors duration-200 whitespace-nowrap"
              >
                Customised Solutions
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm 2xl:text-base transition-colors duration-200 whitespace-nowrap"
              >
                Digital Delivery Suite
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm 2xl:text-base transition-colors duration-200 whitespace-nowrap"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm 2xl:text-base transition-colors duration-200 whitespace-nowrap"
              >
                Certificate
              </a>
            </nav>

            {/* Tablet Navigation (Condensed) */}
            <nav className="hidden lg:flex xl:hidden items-center space-x-4">
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm transition-colors duration-200"
              >
                About
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-cyan-600 font-medium text-sm transition-colors duration-200">
                  Programmes
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
              </div>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm transition-colors duration-200"
              >
                Customised Solutions
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm transition-colors duration-200"
              >
                Digital Delivery Suite
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm transition-colors duration-200"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm transition-colors duration-200"
              >
                Certificate
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <nav className="flex flex-col px-4 py-3 sm:px-6 sm:py-4 space-y-1">
            <a
              href="#"
              className="text-gray-800 hover:text-cyan-600 hover:bg-gray-50 font-medium py-3 px-2 rounded-md transition-all duration-200 text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-cyan-600 hover:bg-gray-50 font-medium py-3 px-2 rounded-md transition-all duration-200 text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <button className="flex items-center justify-between text-gray-800 hover:text-cyan-600 hover:bg-gray-50 font-medium py-3 px-2 rounded-md transition-all duration-200 text-sm sm:text-base">
              <span>Programmes</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <a
              href="#"
              className="text-gray-800 hover:text-cyan-600 hover:bg-gray-50 font-medium py-3 px-2 rounded-md transition-all duration-200 text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Customised Solutions
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-cyan-600 hover:bg-gray-50 font-medium py-3 px-2 rounded-md transition-all duration-200 text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Digital Delivery Suite
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-cyan-600 hover:bg-gray-50 font-medium py-3 px-2 rounded-md transition-all duration-200 text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers/Work for Us
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-cyan-600 hover:bg-gray-50 font-medium py-3 px-2 rounded-md transition-all duration-200 text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Certificate
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
