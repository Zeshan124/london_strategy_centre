"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const FacultySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const facultyMembers = [
    {
      id: 1,
      name: "Dr Heather Jeffrey",
      role: "PROGRAMME DIRECTOR",
      title: "Lecturer at",
      affiliation: "University of Birmingham Dubai",
      affiliationColor: "text-red-500",
      image: "/images/Faculty/Dr-Heather-Jeffrey.jpg",
      bio: "Dr. Jeffrey brings over 15 years of experience in digital transformation and women's leadership development.",
    },
    {
      id: 2,
      name: "Saskia Hart",
      role: "SPEAKER",
      title: "Assoc Fellow at",
      affiliation: "London Strategy Centre",
      affiliationColor: "text-red-500",
      image: "/images/Faculty/Saskia-Hart.jpg",
      bio: "Saskia is an expert in organizational change and digital strategy implementation.",
    },
    {
      id: 3,
      name: "Maya El Tal",
      role: "SPEAKER",
      title: "Assoc Fellow at",
      affiliation: "London Strategy Centre",
      affiliationColor: "text-red-500",
      image: "/images/Faculty/Maya-El-Tal.jpg",
      bio: "Maya specializes in leadership development and transformation management.",
    },
    {
      id: 4,
      name: "Rubby Dixcon",
      role: "SPEAKER",
      title: "Assoc Fellow at",
      affiliation: "London Strategy Centre",
      affiliationColor: "text-red-500",
      image: "/images/Faculty/Rubby-Dixcon.jpg",
      bio: "Rubby is a renowned expert in digital leadership and organizational psychology.",
    },
    // {
    //   id: 5,
    //   name: "Dr Sarah Mitchell",
    //   role: "SPEAKER",
    //   title: "Former CTO at",
    //   affiliation: "Tech Innovations Ltd",
    //   affiliationColor: "text-red-500",
    //   image: "/images/sarah-mitchell.jpg",
    //   bio: "Dr. Mitchell has led digital transformations at Fortune 500 companies."
    // },
    // {
    //   id: 6,
    //   name: "Prof Maria Rodriguez",
    //   role: "SPEAKER",
    //   title: "Leadership Specialist at",
    //   affiliation: "Global Leadership Institute",
    //   affiliationColor: "text-red-500",
    //   image: "/images/maria-rodriguez.jpg",
    //   bio: "Prof. Rodriguez is author of 'Leading Through Change' and recognized leadership expert."
    // }
  ];

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 4; // desktop
    }
    return 4;
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, facultyMembers.length - visibleSlides);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  return (
    <div className="bg-[#F5F4F2] py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col text-center lg:text-left">
            <span className="text-red-500 font-bold text-sm sm:text-base lg:text-lg tracking-wide uppercase block mb-3 sm:mb-4">
              FACULTY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#002060] mb-4 sm:mb-6">
              Meet the Women Leading the Way
            </h2>
          </div>
          <p className="text-base faculty-para text-gray-700 max-w-4xl mx-auto text-center lg:text-left font-bold">
            Access exclusive guest speakers! Interact with proven leaders! &
            Experience real stories of impact and transformation!
          </p>
        </div>

        {/* Faculty Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#002060] hover:bg-[#001040] text-white p-2 sm:p-3 lg:p-4 transition-colors duration-200 shadow-lg -ml-2 sm:-ml-4 lg:-ml-6"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#002060] hover:bg-[#001040] text-white p-2 sm:p-3 lg:p-4 transition-colors duration-200 shadow-lg -mr-2 sm:-mr-4 lg:-mr-6"
            disabled={currentSlide >= maxSlide}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Faculty Cards Container */}
          <div className="overflow-hidden mx-4 sm:mx-8 lg:mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / visibleSlides)
                }%)`,
              }}
            >
              {facultyMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                  style={{
                    width: `${100 / visibleSlides}%`,
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-4">
                    {/* Faculty Image */}
                    <div className="relative aspect-[4/5] bg-gray-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/400x500/E5E7EB/9CA3AF?text=${member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}`;
                        }}
                      />
                    </div>

                    {/* Faculty Info */}
                    <div className="p-4 sm:p-5 lg:p-6">
                      <div className="mb-2 sm:mb-3">
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                          {member.role}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#002060] mb-2 sm:mb-3">
                        {member.name}
                      </h3>

                      <div className="mb-3 sm:mb-4">
                        <p className="text-sm sm:text-base text-gray-600 mb-1">
                          {member.title}
                        </p>
                        <p
                          className={`text-sm sm:text-base font-semibold ${member.affiliationColor}`}
                        >
                          {member.affiliation}
                        </p>
                      </div>

                      {/* Read More Link */}
                      <button className="inline-flex items-center text-[#002060] hover:text-[#001040] font-semibold text-sm sm:text-base transition-colors duration-200 group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: maxSlide + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index
                    ? "bg-[#002060]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Show current slide info */}
        <div className="block sm:hidden mt-4 text-center">
          <span className="text-sm text-gray-500">
            {currentSlide + 1} of {facultyMembers.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FacultySection;
