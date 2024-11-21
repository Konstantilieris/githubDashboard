import React from "react";

const ErrorState = ({ error }) => {
  return (
    <div className="h-full w-full flex items-center justify-center animate-pulse text-red-500 text-2xl uppercase tracking-widest">
      {error.message}
    </div>
  );
};

export default ErrorState;
