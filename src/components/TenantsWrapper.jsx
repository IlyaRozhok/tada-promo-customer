import React from "react";
import Header from "./Header";
import TenantsSection from "./TenantsSection";

const TenantsWrapper = () => {
  return (
    <section className="relative bg-white h-[100vh]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/tenants-bg.png')",
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10">
        <TenantsSection />
      </div>
    </section>
  );
};

export default TenantsWrapper;
