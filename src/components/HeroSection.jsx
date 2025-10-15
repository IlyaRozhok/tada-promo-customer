import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Text content positioned on the left */}
      <div className="relative z-20 container mx-auto px-4 pt-20 lg:pt-0 lg:flex lg:items-center lg:min-h-screen">
        <div className="text-white space-y-6 lg:space-y-8 lg:w-1/2 xl:w-2/5">
          <h1 className="font-sf-pro font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl leading-tight">
            Smarter Leasing. Better Tenants. Faster.
          </h1>

          <p className="font-sf-pro font-semibold text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl leading-7 lg:leading-7 xl:leading-8 tracking-[0.22px] max-w-xl lg:max-w-lg xl:max-w-2xl">
            Renting has been broken for too long — for tenants and for those
            providing homes. Confusing processes, wasted time and missed
            opportunities hurt everyone.
          </p>
        </div>
      </div>

      {/* MacBook positioned on the right side */}
      <div className="absolute right-[-15%] top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="relative">
          {/* MacBook frame - smaller size */}
          <img
            src="/src/assets/laptop.png"
            alt="MacBook Pro"
            className="w-[700px] lg:w-[800px] xl:w-[900px] h-auto drop-shadow-2xl"
          />

          {/* MacBook logo on the back */}
          <div className="absolute bottom-[6%] left-1/2 transform -translate-x-1/2">
            <img
              src="/src/assets/macbook-logo.png"
              alt="MacBook Logo"
              className="h-2.5"
            />
          </div>

          {/* Website screenshot overlay on MacBook screen - larger */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[82%] h-[88%] mt-[-4%] overflow-hidden rounded-lg">
              <img
                src="/src/assets/tada-stage.png"
                alt="TADA Property Website"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
