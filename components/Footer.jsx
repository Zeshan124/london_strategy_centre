import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
      <footer className="container ">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10"></div>

        <div className="relative z-10 max-w-full mx-auto py-5 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-teal-400 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programmes"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Programmes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customised-solutions"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Customised Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/digital-delivery"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Our Digital Delivery Suite
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Careers/Work for Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificate"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Certificate
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programmes */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-teal-400 inline-block">
                Programmes
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/strategy"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/innovation"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Innovation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leadership"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Leadership
                  </Link>
                </li>
              </ul>

              {/* LSC Logo */}
              <div className="mt-8">
                <div className="flex items-center space-x-2">
                  <div className="flex justify-center lg:justify-start">
                    <Image
                      src="/images/Logo3.png"
                      alt="My Photo"
                      width={180}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Other Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-teal-400 inline-block">
                Other Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/jobs"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Jobs@ LSC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    Latest Research
                  </Link>
                </li>
              </ul>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-teal-400 inline-block">
                  Social Media
                </h4>
                <div className="flex space-x-3">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* LSC Thought Leadership */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-teal-400 inline-block">
                LSC Thought Leadership
              </h3>
              <p className="text-white mb-4">
                Subscribe to our Latest Research
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:border-teal-400"
                />
                <button className="w-[50%] bg-[#0099C4] hover:bg-teal-600 text-white font-semibold text-xl py-4 px-4 rounded transition-colors duration-200">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-600 py-4 lg:py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center lg:text-left">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-[80px] text-md">
              <Link
                href="/privacy"
                className="hover:text-teal-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/policies"
                className="hover:text-teal-300 transition-colors duration-200"
              >
                Policies and Legislation
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-teal-300 transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
            <div className="text-md text-white">
              © London Strategy Centre 2022
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
