import React from 'react'
import Image from 'next/image'

const SampleCertificate = () => {
  return (
    <div className="bg-gray-50">
    <div className="container flex flex-col lg:flex-row min-h-screen py-8 lg:py-16">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-start p-6 lg:p-8">
        <div className="max-w-full text-center lg:text-left">
          {/* Sample Certificate Label */}
          <div className="mb-6">
            <span className="text-red-500 font-semibold text-lg tracking-wide uppercase">
              SAMPLE CERTIFICATE
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#002060] mb-6 leading-tight">
            Your Credential of Impact
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-bold">
            Recognition of success in the digital landscape.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
        <div className="relative w-full">
          {/* Certificate Image */}
          <Image
            src="/images/Certificate.jpg"
            alt="Sample Certificate"
            width={500}
            height={600}
            className="object-contain w-full h-auto rounded shadow"
            priority
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default SampleCertificate
