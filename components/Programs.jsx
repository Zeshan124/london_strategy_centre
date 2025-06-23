"use client";

import React, { useState } from "react";
import { Download, ArrowRight } from "lucide-react";

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
          <div className="flex items-center justify-between">
            {/* Tabs */}
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-white font-medium transition-colors relative ${
                    activeTab === tab ? " text-white" : "hover:bg-cyan-400"
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
            <div className="flex items-center space-x-2">
              <button className="bg-white  text-[#002060] px-3 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <button className="border border-white text-white px-6 py-2 font-semibold hover:bg-white hover:text-cyan-500 transition-colors">
                Book Consultation
              </button>
              <button className=" text-white px-2 py-2 rounded font-semibold hover:bg-cyan-700 transition-colors flex items-center">
              <ArrowRight className="w-4 h-4 mr-4" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {activeTab === "Overview" && (
              <div className="space-y-6 mt-8">
                <div className="bg-white p-10 py-12 rounded-lg shadow-sm border border-gray-200">
                  <div className="relative">
                    <span className="text-red-500 font-bold text-lg tracking-wide uppercase">
                      OVERVIEW
                    </span>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-5 py-2  text-[#002060]">
                      Women Leading the Next Wave of Transformation
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Digital transformation is more than a buzzword—it's a
                      global shift. In this three-day immersive programme,
                      you'll gain the tools, confidence, and vision necessary to
                      lead that shift. Delivered by experts in women's
                      leadership and digital strategy, this experience will
                      reshape how you think, influence, and lead in a
                      fast-evolving world.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for VR/Technology Image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👩‍💻</span>
                  </div>
                  <p className="text-sm font-medium">
                    Your VR Technology Image Here
                  </p>
                  <p className="text-xs mt-1">Replace with actual image</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 -left-8 w-2 h-20 bg-red-700 rounded-full transform -rotate-12"></div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ProgrammeOverview;
