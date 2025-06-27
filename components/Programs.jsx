"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ProgrammeOverview = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Programme",
    "Features",
    "Faculty",
    "Certificate",
    "Fees",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="bg-cyan-500">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-white font-medium transition-colors relative text-sm sm:text-base ${
                    activeTab === tab ? "text-white" : "hover:bg-cyan-400"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button className="bg-white text-[#002060] px-3 sm:px-4 py-2 sm:py-3 rounded font-semibold hover:bg-gray-100 transition-colors text-sm lg:text-base">
                Apply Now
              </button>
              <button className="border border-white text-white px-3 sm:px-4 lg:px-6 py-2 font-semibold hover:bg-white hover:text-cyan-500 transition-colors text-sm lg:text-base">
                Book Consultation
              </button>
              <button className="text-white px-2 sm:px-3 py-2 rounded font-semibold hover:bg-cyan-700 transition-colors flex items-center text-sm lg:text-base">
                <ArrowRight className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Download Brochure</span>
                <span className="sm:hidden">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="w-full flex-1 flex flex-col justify-center h-full">
            <div className="relative bg-white p-4 sm:p-6 lg:px-12 lg:py-20 rounded-lg shadow-sm border border-gray-200 lg:translate-x-[130px] z-50">
              <div className="space-y-6 flex-1 flex flex-col justify-center h-full">
                {(() => {
                  const tabContent = {
                    Overview: (
                      <>
                        <span className=" text-red-500 font-bold text-lg tracking-wide uppercase">
                          OVERVIEW
                        </span>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-[#002060]">
                          Women Leading the Next Wave of Transformation
                        </h1>
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                          Digital transformation is more than a buzzword—it's a
                          global shift. In this three-day immersive programme,
                          you'll gain the tools, confidence, and vision
                          necessary to lead that shift. Delivered by experts in
                          women's leadership and digital strategy, this
                          experience will reshape how you think, influence, and
                          lead in a fast-evolving world.
                        </p>
                      </>
                    ),
                    Programme: (
                      <>
                        <span className="text-red-500 font-bold text-lg tracking-wide uppercase">
                          PROGRAMME
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002060] mb-4">
                          Programme Details
                        </h2>
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                          Programme content goes here...
                        </p>
                      </>
                    ),
                    Features: (
                      <>
                        <span className="text-red-500 font-bold text-lg tracking-wide uppercase">
                          FEATURES
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002060] mb-4">
                          Features
                        </h2>
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                          Features content goes here...
                        </p>
                      </>
                    ),
                    Faculty: (
                      <>
                        <span className="text-red-500 font-bold text-lg tracking-wide uppercase">
                          FACULTY
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002060] mb-4">
                          Faculty
                        </h2>
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                          Faculty content goes here...
                        </p>
                      </>
                    ),
                    Certificate: (
                      <>
                        <span className="text-red-500 font-bold text-lg tracking-wide uppercase">
                          CERTIFICATE
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002060] mb-4">
                          Certificate
                        </h2>
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                          Certificate content goes here...
                        </p>
                      </>
                    ),
                    Fees: (
                      <>
                        <span className="text-red-500 font-bold text-lg tracking-wide uppercase">
                          FEES
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002060] mb-4">
                          Fees
                        </h2>
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                          Fees content goes here...
                        </p>
                      </>
                    ),
                  };
                  return tabContent[activeTab];
                })()}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full relative">
            <Image
              src="/images/Overview.jpg"
              alt="Women Leading Digital Transformation"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              priority
            />
            <div className="hidden lg:block absolute top-[70%] sm:top-[270px] left-4 w-[100px] sm:w-[150px] h-[6px] bg-red-600 opacity-80 z-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeOverview;
