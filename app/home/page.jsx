import React from "react";
import Image from "next/image";
import Header from "@/components/header";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />
      <section className="relative bg-[#002060] text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-9 gap-12 items-center">
            {/* Left Column (3 columns) */}
            <div className="lg:col-span-3">
              {/* Partner Logo */}
              <div className="mb-8">
                <Image
                  src="/images/Banner-Logo.jpg"
                  alt="My Photo"
                  width={400}
                  height={300}
                />
              </div>

              <h1 className="text-5xl lg:text-5xl font-bold mb-6 leading-tight">
                Women's Leadership in the Digital Era
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Leading with Confidence. Speaking with Power. Succeeding with
                Purpose.
              </p>
            </div>

            {/* Right Column (6 columns) */}
            <div className="lg:col-span-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <div className="w-40 h-16 bg-white flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/LSC-logo.png" width={120} height={70} />
                </div>
                <h3 className="text-2xl font-bold border-2 border-white p-4 rounded-lg">
                  LONDON STRATEGY CENTRE
                </h3>
              </div>
              <p className="text-center text-lg mb-6">
                Shaping the future of entrepreneurship in the kingdom of Saudi
                Arabia.
              </p>
              <p className="text-center text-sm opacity-75">
                www.londonstrategycentre.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Empowering Leaders of Tomorrow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive programmes designed to develop strategic thinking, 
              leadership excellence, and digital transformation capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Development</h3>
              <p className="text-gray-600">
                Build confidence and strategic thinking skills through our comprehensive leadership programmes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Strategy</h3>
              <p className="text-gray-600">
                Master digital transformation and innovation in today's rapidly evolving business landscape.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Certification</h3>
              <p className="text-gray-600">
                Earn globally recognized certifications that advance your career and expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Learning</h3>
              <p className="text-gray-600">
                Choose from online, in-person, or hybrid learning formats that fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Leadership Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers through our strategic programmes.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
