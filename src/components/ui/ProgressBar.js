import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="progress-bar-container w-full h-2 bg-code-bg rounded-md mb-8 overflow-hidden sticky top-0 z-10 shadow-md shadow-cyan-glow">
      <div
        className="progress-bar h-full bg-accent-color rounded-md transition-all duration-400 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="progress-text text-center font-semibold mt-4 text-accent-color text-lg text-shadow-cyan">
        Step {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;
