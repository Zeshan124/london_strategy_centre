import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="container bg-white relative lg:py-14 py-5 lg:text-left text-center">
      {/* Main Container */}
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
          {/* Left Column - Contact us */}
          <div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#002060] mb-8">
                Contact us
              </h2>

              {/* <div className="border-t border-gray-600"></div> */}
            </div>

            {/* London Strategy Center */}
            <div className="mb-8 py-6 lg:py-12">
              {/* Logo placeholder - replace with actual logo */}
              <div className="flex items-center lg:items-start lg:justify-start justify-center mb-4">
                <div className="flex justify-center lg:justify-start items-center">
                  <Image
                    src="/images/logo1.jpg"
                    alt="My Photo"
                    width={300}
                    height={200}
                    className="w-[230px] lg:w-[280px]"
                  />
                </div>
              </div>

              <h4 className="text-2xl font-semibold text-[#C8102E] mb-4">
                London Strategy Centre
              </h4>

              {/* Address */}
              <div className="flex  items-start mb-3 font-bold lg:justify-start justify-center">
                <div className="w-5 h-5 rounded-sm flex items-center justify-center mr-3 mt-1">
                  <Image
                    src="/images/home.svg"
                    alt="My Photo"
                    width={500}
                    height={400}
                    className="w-full"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-lg">
                    43 Upper Grosvenor St London,
                    <br />
                    W1K 2NJ, United Kingdom
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center lg:justify-start justify-center font-bold">
                <div className="w-5 h-5 rounded-sm flex items-center justify-center mr-3">
                  <Image
                    src="/images/email.png"
                    alt="My Photo"
                    width={500}
                    height={400}
                    className="w-full"
                  />
                </div>
                <a
                  href="mailto:enquiries@londonstrategycentre.com"
                  className="text-gray-700 hover:text-red-500 transition-colors text-lg"
                >
                  enquiries@londonstrategycentre.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Support Info */}
          <div>
          <div className="mb-6 text-md  lg:text-2xl font-bold">
            <p className="text-gray-700">
              London Strategy Centre supported by the
            </p>
            <p className="text-[#C8102E] font-bold">Arab British Chamber of Commerce UK <span className="text-black">©Copyright
              </span></p>
            <p className="text-gray-700"></p>
          </div>
            <div className="mb-6 py-0 lg:py-12">
              
              <h3 className="text-[#C8102E] font-semibold text-xl mb-4">
                Supported by:
              </h3>

              {/* Arab British Chamber of Commerce Logo */}
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/logo2.png"
                    alt="My Photo"
                    width={400}
                    height={300}
                    className=""
                  />
                </div>
              </div>

              <h4 className="text-[#C8102E] font-bold text-xl">
                Arab British Chamber of Commerce
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
    </div>
  );
};

export default ContactUs;
