import React from 'react'
import Image from 'next/image'

const SampleCertificate = () => {
  return (
    <div className="container flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-start bg-white py-6 px-3 lg:p-0">
        <div className="max-w-full text-center lg:text-left">
          {/* Sample Certificate Label */}
          <div className="mb-8">
            <span className="text-red-500 font-semibold text-lg tracking-wide uppercase">
              SAMPLE CERTIFICATE
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-[#002060] mb-6 leading-tight">
            Your Credential of Impact
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-lg leading-relaxed font-bold">
            Recognition of success in the digital landscape.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center p-2 lg:p-0">
        <div className="relative">

            {/* Certificate Image */}
            <div className="relative w-full">
              <Image
                src="/images/Certificate.jpg" // Replace with your certificate image path
                alt="Sample Certificate"
                width={400}
                height={500}
                className=" object-cover w-full"
                priority
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SampleCertificate