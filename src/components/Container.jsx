import React from "react";

const Container = ({
  children,
  maxWidth = "max-w-6xl",
  className = "",
  ...props
}) => {
  const classes = `container mx-auto px-4 ${maxWidth} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container;

