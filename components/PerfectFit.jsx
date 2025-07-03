import Image from "next/image";
import React from "react";

const PerfectFit = () => {
  return (
    <div className="bg-[#F5F4F2] px-3 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10">
  <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-2">
    {/* Left Section */}
    <div className="w-full lg:w-1/2 pt-6 sm:pt-10 lg:pt-[10vh] px-1 sm:px-4">
      <h3 className="text-[#c2272d] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
        Who Should Attend
      </h3>
      <h1 className="text-[#002060] text-2xl sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[42px] font-bold leading-snug mb-4 sm:mb-6">
        You are a Perfect Fit
      </h1>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
        Participants include outstanding executive women who are:
      </p>

      <ul className="space-y-3">
        {[
          "In leadership roles seeking to understand the digital impact.",
          "Driving organisational transformation at mid-to-senior levels.",
          "Entrepreneurs aiming to scale through digital strategy.",
          "Working in technology, innovation, or transformation roles.",
          "Leading HR and talent development for inclusive digital workplaces.",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <Image
              src="/images/bullet-point.png"
              alt=""
              width={16}
              height={16}
              className="mt-1 shrink-0 w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="text-gray-800 text-[14px] sm:text-[15px] lg:text-[17px] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Right Section - Image */}
    <div className="w-full px-1 sm:px-4 text-center lg:text-left flex justify-center items-center">
      <Image
        src="/images/Who-Should-Attend.png"
        alt="Who Should Attend"
        width={800}
        height={600}
        className="w-full sm:max-w-md md:max-w-lg lg:max-w-[85%] h-auto rounded-md"
        priority
      />
    </div>
  </div>
</div>
  );
};

export default PerfectFit;
