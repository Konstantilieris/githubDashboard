import React from "react";

const EmptyState = ({ title, name }) => {
  return (
    <div className="animate-pulse h-full w-full flex justify-center items-center uppercase font-sans text-light-900 text-2xl tracking-widest">
      {name} has no {title}!!!
    </div>
  );
};

export default EmptyState;
