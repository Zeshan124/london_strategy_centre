"use client";

import React, { useState } from "react";
import Image from "next/image";

const WhatYouAllPractice = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      leftTitle: "WHAT YOU'LL PRACTICE",
      practiceItems: [
        "Understanding digital transformation and its impact on leadership.",
        "Designing strategies to lead change and overcome resistance.",
        "Building resilience and adaptability in uncertain environments.",
        "Communicating with confidence and expanding your network.",
        "Leading innovation and driving cultural change.",
        "Inspiring teams through authentic and influential leadership.",
      ],
      image: "/images/What-You'll-Practice.jpg",
      imageAlt: "Students in learning environment",
    },
    {
      rightTitle: "WHY YOU'LL LOVE THIS EXPERIENCE",
      practiceItems: [
        "Mastering advanced leadership techniques and methodologies.",
        "Developing strategic thinking for complex business challenges.",
        "Building emotional intelligence and self-awareness skills.",
        "Creating sustainable organizational change initiatives.",
        "Establishing strong professional networks and partnerships.",
        "Implementing data-driven decision making processes.",
      ],
      image: "/images/Why-You'll-Love-This-Experience.jpg",
      imageAlt: "Professional achievement and success",
    },
  ];

  return (
    <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile Navigation Buttons */}
      <div className="block xl:hidden mb-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            className={`flex-1 py-3 px-4 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 ${
              activeTab === 0
                ? "bg-red-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(0)}
          >
            {tabContent[0].leftTitle}
          </button>
          <button
            className={`flex-1 py-3 px-4 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 ${
              activeTab === 1
                ? "bg-red-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(1)}
          >
            {tabContent[1].rightTitle}
          </button>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="block xl:hidden">
        {/* Blue Box with bullet points */}
        <div className="bg-[#002060] p-6 mb-6 rounded-lg">
          <div className="space-y-4">
            {tabContent[activeTab].practiceItems.map((item, index) => (
              <div
                key={`mobile-${activeTab}-${index}`}
                className="flex items-start space-x-3 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src="/images/circle.png"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
                <p className="text-white text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg">
          <Image
            src={tabContent[activeTab].image}
            alt={tabContent[activeTab].imageAlt}
            width={800}
            height={400}
            className="object-cover w-full h-full transition-opacity duration-500"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden xl:block">
        <div className="relative flex flex-col xl:flex-row min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {/* Left Section */}
          <div className="w-full xl:w-1/2 relative z-10 flex flex-col h-auto xl:h-[500px] lg:h-[350px]">
            {/* Left Tab Header */}
            <div
              className={`tabs-movement bg-white text-center p-4 sm:p-6 lg:p-8 border-b-2 cursor-pointer transition-all duration-300 ${
                activeTab === 0
                  ? "border-red-600"
                  : "border-gray-300 hover:border-red-400"
              }`}
              onClick={() => setActiveTab(0)}
            >
              <h2
                className={`text-sm sm:text-base lg:text-xl font-semibold uppercase tracking-wide transition-colors duration-300 ${
                  activeTab === 0
                    ? "text-gray-800"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tabContent[0].leftTitle}
              </h2>
            </div>

            {/* Blue Box */}
            <div className="relative flex-1 flex items-end top-2 lg:top-10">
              <div
                className="bg-[#002060] p-4 sm:p-6 lg:p-8 w-full 
                           xl:w-[130%] xl:absolute xl:left-0 xl:bottom-0
                           lg:w-[110%]
                           transition-all duration-300"
                style={{ maxWidth: "none" }}
              >
                <div className="space-y-3 sm:space-y-4">
                  {tabContent[activeTab].practiceItems.map((item, index) => (
                    <div
                      key={`desktop-${activeTab}-${index}`}
                      className="flex items-start space-x-2 sm:space-x-3 opacity-0 animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Image
                          src="/images/circle.png"
                          alt=""
                          width={16}
                          height={16}
                          className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                        />
                      </div>
                      <p className="text-white text-sm sm:text-base lg:text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full xl:w-1/2 bg-white mt-8 xl:mt-0">
            {/* Right Tab Header */}
            <div
              className={`bg-white text-center p-4 sm:p-6 lg:p-8 border-b-2 cursor-pointer transition-all duration-300 ${
                activeTab === 1
                  ? "border-red-600"
                  : "border-gray-300 hover:border-red-400"
              }`}
              onClick={() => setActiveTab(1)}
            >
              <h2
                className={`text-sm sm:text-base lg:text-xl font-semibold uppercase tracking-wide transition-colors duration-300 ${
                  activeTab === 1
                    ? "text-gray-800"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tabContent[1].rightTitle}
              </h2>
            </div>

            {/* Image Content */}
            <div className="relative h-full min-h-[200px] lg:min-h-[400px] py-5 lg:py-14">
              <div className="absolute transition-opacity duration-500">
                <Image
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].imageAlt}
                  width={800}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        @media (max-width: 640px) {
          .container {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatYouAllPractice;
