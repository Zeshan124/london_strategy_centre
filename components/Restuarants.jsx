"use client";

import React, { useState } from "react";

const tabContent = [
  {
    title: "ENJOY CURATED GALA DINNER AT DUBAI’S TOP WOMEN-OWNED RESTAURANTS",
    images: [
      "/images/gala-dinner-at-Dubai/1.png",
      "/images/gala-dinner-at-Dubai/2.png",
      "/images/gala-dinner-at-Dubai/3.png",
    ],
  },
  {
    title: "EXPERIENCE THE ELEGANCE AND ENERGY OF DUBAI’S MOST INSPIRING SETTINGS",
    images: [
      "/images/Experience-the-elegance/1.jpg",
      "/images/Experience-the-elegance/2.jpg",
      "/images/Experience-the-elegance/3.jpg",
    ],
  },
];


const Restaurants = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = tabContent[activeTab].images;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container w-full bg-white py-10">
      <div className="mx-auto">
        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-300 text-center">
          {tabContent.map((tab, index) => (
            <button
              key={index}
              className={`text-xs sm:text-sm md:text-base lg:text-2xl font-semibold uppercase py-4 px-2 lg:px-[120px] transition-colors duration-300 ${
                activeTab === index
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
              onClick={() => {
                setActiveTab(index);
                setCurrentSlide(0); // reset slider
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Tab ${activeTab + 1} - Image ${index + 1}`}
              className="w-full h-full object-cover rounded shadow"
            />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative mt-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto object-cover rounded shadow"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows & Dots */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            {/* Prev */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
