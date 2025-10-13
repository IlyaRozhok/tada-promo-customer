import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with apartment interior - we'll add this later */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10"></div>

      <div className="relative z-20 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-white space-y-8">
          <h1 className="font-sf-pro font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[100px]">
            Smarter Leasing. Better Tenants. Faster.
          </h1>

          <p className="font-sf-pro font-semibold text-lg sm:text-xl md:text-2xl leading-8 tracking-[0.22px] max-w-2xl">
            Renting has been broken for too long — for tenants and for those
            providing homes. Confusing processes, wasted time and missed
            opportunities hurt everyone.
          </p>
        </div>

        {/* Right side - MacBook with website screenshot */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* MacBook frame placeholder */}
            <div className="relative bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <div className="bg-black rounded-xl p-4">
                <div className="bg-white rounded-lg h-96 w-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-sm">MacBook + TADA Website</p>
                    <p className="text-xs mt-1">Images will be added</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
