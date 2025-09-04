import React from "react";
import Image from "next/image";
import Header from "@/components/header";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />
      <section className="relative bg-[#002060] text-white py-10 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-9 gap-9 items-center">
            {/* Left Column (3 columns) */}
            <div className="lg:col-span-3 text-center md:text-center lg:text-left xl:text-left">
              {/* Partner Logo */}
              <div className="uni-logo flex justify-center lg:justify-start">
                <Image
                  src="/images/Banner-Logo.jpg"
                  alt="My Photo"
                  width={500}
                  height={400}
                />
              </div>

              <h1
                className="main-heading font-bold mb-6 leading-tight 
             text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl"
              >
                Women's Leadership in the Digital Era
              </h1>

              <p className="text-xl mb-8 leading-relaxed ">
                Leading with Confidence. Speaking with Power. Succeeding with
                Purpose.
              </p>
            </div>

            {/* Right Column (6 columns) */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[250px] md:min-h-[550px] h-auto">
              {/* Video Background */}
              <video
                className="absolute inset-0 w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/video/WDL.mp4" type="video/mp4" />
                <source src="/images/video/WDL.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
