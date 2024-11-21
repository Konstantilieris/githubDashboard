import React from "react";

const BubbleText = () => {
  return (
    <h2 className="text-center font-thin text-light-900 text-8xl max-md:text-4xl font-sans">
      {"Github Dashboard".split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
