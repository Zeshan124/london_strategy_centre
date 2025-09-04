"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const FacultySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facultyMembers = [
    {
      id: 1,
      name: "Dr Heather Jeffrey",
      role: "PROGRAMME DIRECTOR",
      title: "Lecturer at",
      affiliation: "University of Birmingham Dubai",
      affiliationColor: "text-red-500",
      image: "/images/Faculty/Dr-Heather-Jeffrey.jpg",
      bio: "Dr Heather Jeffrey is a Lecturer in Marketing at the University of Birmingham's Dubai campus, specialising in Cultural Studies. Her research interests encompass gender, representation, mobility, and qualitative research methods. Dr Jeffrey is a member of the European Commission-funded International Network for Comparative Analysis of Social Inequalities and an associate of the non-profit organisation Equality in Tourism. She serves on the editorial boards of Gender in Management and Tourism Planning and Development. Her work has been featured in various media outlets, including The Huffington Post, The Daily Mail, The Caterer, and The National.",
      // expertise: ["Marketing", "Cultural Studies", "Gender Research", "Qualitative Research Methods", "Tourism Equality"],
      // experience: "15+ years in academic research and digital transformation",
      linkedinUrl: "#",
    },
    {
      id: 2,
      name: "Saskia Hart",
      role: "SPEAKER",
      title: "Assoc Fellow at",
      affiliation: "London Strategy Centre",
      affiliationColor: "text-red-500",
      image: "/images/Faculty/Saskia-Hart.jpg",
      bio: "Saskia Hart is an Associate Fellow at the London Strategy Centre with extensive expertise in organizational change and digital strategy implementation. She has led transformation initiatives across multiple industries, helping organizations navigate complex digital landscapes while maintaining focus on sustainable growth and innovation.",
      expertise: [
        "Organizational Change",
        "Digital Strategy",
        "Leadership Development",
        "Innovation Management",
      ],
      experience:
        "12+ years in strategic consulting and organizational transformation",
      linkedinUrl: "#",
    },
    {
      id: 3,
      name: "Maya El Tal",
      role: "SPEAKER",
      title: "Assoc Fellow at",
      affiliation: "London Strategy Centre",
      affiliationColor: "text-red-500",
      image: "/images/Faculty/Maya-El-Tal.jpg",
      bio: "Maya El Tal is an Associate Fellow at the London Strategy Centre, specializing in leadership development and transformation management. Her work focuses on empowering leaders to drive meaningful change within their organizations while fostering inclusive and innovative workplace cultures.",
      expertise: [
        "Leadership Development",
        "Transformation Management",
        "Change Leadership",
        "Inclusive Culture Building",
      ],
      experience:
        "10+ years in leadership coaching and organizational development",
      linkedinUrl: "#",
    },
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

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle modal open/close
  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = "unset"; // Restore scroll
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

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
    <>
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

                        {/* Read More Button */}
                        <button
                          onClick={() => openModal(member)}
                          className="inline-flex items-center text-[#002060] hover:text-[#001040] font-semibold text-sm sm:text-base transition-colors duration-200 group"
                        >
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

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-7xl w-full max-h-[70vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-14">
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                {/* Faculty Image */}
                <div className="lg:w-1/3">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                       width={450}   // decrease width
  height={500}  // decrease height
                      
                      className="object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x500/E5E7EB/9CA3AF?text=${selectedMember.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}`;
                      }}
                    />
                  </div>
                </div>

                {/* Faculty Details */}
                <div className="lg:w-2/3">
                  {/* Role Badge */}
                  <div className="mb-2 sm:mb-3">
                    <span className="inline-block text-black px-0 py-1 sm:px-0 sm:py-1 text-xs sm:text-sm font-semibold uppercase tracking-wide rounded">
                      {selectedMember.role}
                    </span>
                  </div>

                  {/* Name and Title */}
                  <div className="mb-3 sm:mb-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#002060] mb-1 sm:mb-2 flex items-center gap-2 sm:gap-3">
                      {selectedMember.name}
                      {selectedMember.linkedinUrl && (
                        <a
                          href={selectedMember.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-transform hover:scale-110"
                        >
                          <Image
                            src="/images/linkedin.svg"
                            alt="LinkedIn"
                            width={20}
                            height={20}
                            className="sm:w-6 sm:h-6 object-contain"
                          />
                        </a>
                      )}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-800 mb-1">
                      {selectedMember.title}
                    </p>
                    <p
                      className={`text-base sm:text-lg font-semibold ${selectedMember.affiliationColor}`}
                    >
                      {selectedMember.affiliation}
                    </p>
                  </div>

                  {/* Biography */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#002060] mb-2 sm:mb-3">
                      About
                    </h3>
                    <h5 className="text-gray-900 text-base sm:text-lg lg:text-md leading-relaxed">
                      {selectedMember.bio}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FacultySection;
