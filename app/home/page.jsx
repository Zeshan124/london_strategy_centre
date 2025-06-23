import React from 'react';
import { ChevronDown, Calendar, BookOpen, Users, Award, ArrowRight, Menu } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-cyan-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start space-x-6 text-sm">
            <a href="#" className="hover:underline">Upcoming Events</a>
            <a href="#" className="hover:underline">Latest Research</a>
            <a href="#" className="hover:underline">Jobs at LSC</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center">
                <div className="text-white font-bold text-xl">LSC</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">LONDON</h1>
                <h2 className="text-lg font-bold text-red-600">STRATEGY</h2>
                <h2 className="text-lg font-bold text-red-600">CENTRE</h2>
                {/* <p className="text-xs text-gray-600">Empowering minds and transforming futures through strategic education</p> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">About</a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-900 font-medium">
                  Programmes <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Customised Solutions</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Digital Delivery Suite</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Careers/Work for Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Certificate</a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
  <div className="absolute inset-0 bg-black opacity-20"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-9 gap-12 items-center">
      
      {/* Left Column (3 columns) */}
      <div className="lg:col-span-3">
        {/* Partner Logo */}
        <div className="mb-8">
          <div className="bg-white p-4 rounded-lg inline-block">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">UB</span>
              </div>
              <div>
                <h3 className="text-black font-bold">UNIVERSITY OF</h3>
                <h4 className="text-black font-bold">BIRMINGHAM</h4>
                <p className="text-gray-600 text-sm">DUBAI</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl lg:text-5xl font-bold mb-6 leading-tight">
          Women's Leadership in the Digital Era
        </h1>
        <p className="text-xl mb-8 leading-relaxed">
          Leading with Confidence. Speaking with Power. Succeeding with Purpose.
        </p>

        
      </div>

      {/* Right Column (6 columns) */}
      <div className="lg:col-span-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-900 font-bold text-xl">LSC</span>
          </div>
          <h3 className="text-2xl font-bold border-2 border-white p-4 rounded-lg">
            LONDON STRATEGY CENTRE
          </h3>
        </div>
        <p className="text-center text-lg mb-6">
          Shaping the future of entrepreneurship in the kingdom of Saudi Arabia.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">LSC</span>
                </div>
                <div>
                  <h4 className="font-bold">LONDON STRATEGY CENTRE</h4>
                </div>
              </div>
              <p className="text-gray-400">
                Empowering minds and transforming futures through strategic education.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Programmes</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Leadership Development</a></li>
                <li><a href="#" className="hover:text-white">Digital Strategy</a></li>
                <li><a href="#" className="hover:text-white">Executive Education</a></li>
                <li><a href="#" className="hover:text-white">Professional Certification</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Research</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>info@londonstrategycentre.com</li>
                <li>+44 20 7123 4567</li>
                <li>London, United Kingdom</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 London Strategy Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;