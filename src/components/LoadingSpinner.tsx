import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="absolute z-10 inset-0 h-[80vh] w-screen bg-background flex justify-center items-center">
      <div className="p-2 from-primary via-secondary bg-gradient-to-bl to-success rounded-full animate-spin">
        <div className="h-20 w-20 bg-secondary rounded-full" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
