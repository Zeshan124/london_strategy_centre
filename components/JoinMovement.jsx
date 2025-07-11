import React from 'react'

const JoinMovement = () => {
  return (
    <div className='bg-[#C8102E]'>
    <div className="container text-white relative overflow-hidden lg:py-12 py-8 px-2">      
      {/* Content Container */}
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold tracking-wide uppercase mb-6 opacity-90">
            JOIN THE MOVEMENT
          </h3>
          
          {/* Fees Section */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Fees
            </h2>
            
            {/* Price and Description */}
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-4">
              <span className="text-3xl lg:text-4xl font-bold">
                3,500 GBP
              </span>
              <span className="text-lg lg:text-xl opacity-90 mt-2 lg:mt-0">
                (cost including tuition fees and course materials)
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
    </div>
    </div>
  )
}

export default JoinMovement