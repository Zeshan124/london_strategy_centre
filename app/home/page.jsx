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

              <h1 className="font-bold mb-6 leading-tight main-heading">
                Women's Leadership in the Digital Era
              </h1>
              <p className="text-xl mb-8 leading-relaxed ">
                Leading with Confidence. Speaking with Power. Succeeding with
                Purpose.
              </p>
            </div>

            {/* Right Column (6 columns) */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[550px] h-auto">
              {/* Video Background */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/video/WDL.mp4" type="video/mp4" />
                <source src="/images/video/WDL.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Content Container */}
          {/* Centering Wrapper for Logo */}
<div className="flex justify-center lg:py-8 py-5">
  <div
    className="relative w-60 h-16 flex items-center justify-center mb-6 shadow-lg bg-white overflow-hidden"
    style={{
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
    }}
  >
    <Image
      src="/images/lsc_logo.png"
      width={120}
      height={70}
      alt="LSC Logo"
    />
  </div>
</div>



              {/* Text block */}
              {/* <div className="flex flex-col items-center text-center space-y-4 video-text-content">
                  <h3 className="text-2xl md:text-5xl font-bold border-2 border-white px-6 py-3 text-white shadow-lg">
                    LONDON STRATEGY CENTRE
                  </h3>

                  <p className="text-lg md:text-xl text-white font-medium">
                    Shaping the future of entrepreneurship in the
                    Kingdom&nbsp;of&nbsp;Saudi&nbsp;Arabia.
                  </p>

                  <p className="text-sm md:text-base text-white opacity-90">
                    www.londonstrategycentre.com
                  </p>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
