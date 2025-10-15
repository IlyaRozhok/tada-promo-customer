import React, { useState } from "react";

const AboutUsSection = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Arturs Mazkalnins",
      position: "CEO",
      image: "/src/assets/arturs.png",
      description:
        "With over a decade of experience, a vision-driven property professional on a mission to reinvent how people rent and live.",
    },
    {
      id: 2,
      name: "Dmytro Stepanenko",
      position: "CPO",
      image: "/src/assets/dima.jpg",
      description:
        "Let us help you find what you need and answer all of your questions, one on one over video.",
    },
    {
      id: 3,
      name: "Ilya Rozhok",
      position: "CTO",
      image: "/src/assets/ilya.png",
      description:
        "Let us help you find what you need and answer all of your questions, one on one over video.",
    },
  ];

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-sf-pro font-semibold text-gray-900 leading-tight mb-8">
            About Us
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            We're a team of Londoners, property innovators, and industry
            disruptors who've been connecting tenants with better homes for over
            a decade.
          </p>
        </div>

        {/* Accordion Toggle */}
        <div className="max-w-4xl mx-auto mb-12">
          <button
            onClick={toggleAccordion}
            className="w-full bg-white rounded-full py-6 px-8 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
          >
            <span className="text-2xl font-semibold text-gray-900 mr-4">
              More about team
            </span>
            <svg
              className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                isAccordionOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Team Cards - Accordion Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isAccordionOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Member Image */}
                <div className="h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 font-medium mb-1">
                      {member.position}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-20">
          <blockquote className="text-2xl md:text-3xl lg:text-3xl font-sf-pro font-semibold text-gray-900 leading-tight max-w-4xl mx-auto">
            "Our mission: to revolutionise renting for everyone — tenants,
            operators and the companies that care about their people"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
