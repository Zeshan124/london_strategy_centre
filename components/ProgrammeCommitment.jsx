import React from "react";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

const ProgrammeCommitment = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto bg-white">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-8">
            Programme Commitment
          </h1>

          {/* Date and Time Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-1 mb-8 sm:mb-12 w-full">
            <div className="flex items-center gap-6 border border-gray-300 px-2 py-2 bg-white w-full sm:w-auto h-16">
              <div className="w-12 h-12 rounded flex items-center justify-center">
                <Image
                  src="/images/Calendar.jpg"
                  alt="Calendar"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-base sm:text-2xl font-semibold text-gray-800 px-2">
                2nd - 4th September, 2025
              </span>
            </div>

            <div className="flex items-center gap-6 border border-gray-300 px-2 py-2 bg-white w-full sm:w-auto h-16">
              <div className="w-12 h-12 bg-cyan-500 rounded flex items-center justify-center">
                <Image
                  src="/images/Time.jpg"
                  alt="Calendar"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-base sm:text-2xl font-semibold text-gray-800 px-2">
                08:30 - 17:00 GST
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Custom Map Image */}
          <div className="relative rounded-lg overflow-hidden flex justify-center py-5">
          <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-full mx-auto">
              <Image
                src="/images/Map.jpg"
                alt="Custom Map"
                width={800}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeCommitment;
