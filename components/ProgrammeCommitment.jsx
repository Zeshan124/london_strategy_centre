import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const ProgrammeCommitment = () => {
  return (
    <div className='bg-white'>
    <div className="container mx-auto p-8 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Programme Commitment</h1>
        
        {/* Date and Time Info */}
        <div className="flex justify-center items-center gap-12 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-500 rounded flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-800">2nd - 4th September, 2025</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-500 rounded flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-800">08:30 - 17:00 GST</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* University Logo */}
        <div className="absolute top-0 right-8 z-10">
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                <div className="text-white text-xs font-bold">UB</div>
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">UNIVERSITY OF</div>
                <div className="font-bold text-gray-800 text-sm">BIRMINGHAM</div>
                <div className="text-gray-600 text-xs">دبي | DUBAI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="relative bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6833311887!2d54.89783!3d25.0757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1698234567890!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProgrammeCommitment;