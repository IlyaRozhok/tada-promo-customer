import React from "react";
import Container from "../components/Container";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;

