import React from "react";

const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-dark-100">
      <p className="text-lg text-neutral-300 font-sans animate-pulse">
        Search for a user to display
      </p>
    </div>
  );
};

export default Loader;
