import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/ui/CodeBlock";
import ProgressBar from "../components/ui/ProgressBar";
import { installationSteps } from "../data/installationSteps";

export default function InstallationGuidePage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const totalSteps = installationSteps.length;

  const loadStep = useCallback((index) => {
    if (index < 0 || index >= totalSteps) {
      return;
    }
    setCurrentStepIndex(index);
    // Scroll to top of container when step changes
    document.getElementById('installation-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [totalSteps]);

  useEffect(() => {
    loadStep(0); // Load the first step on component mount
  }, [loadStep]);

  const handlePrevClick = () => {
    loadStep(currentStepIndex - 1);
  };

  const handleNextClick = () => {
    if (currentStepIndex < totalSteps - 1) {
      loadStep(currentStepIndex + 1);
    } else {
      // On the last step, clicking next might go to a 'finished' page or home
      // For this guide, it will navigate back to home
      window.location.href = '/'; // Or use navigate('/') if using useNavigate hook
    }
  };

  const step = installationSteps[currentStepIndex];

  return (
    <div className="min-h-screen flex flex-col items-center p-5">
      <div id="installation-container" className="max-w-4xl w-full bg-card-bg-transparent rounded-xl shadow-xl p-6 md:p-10 border border-border mt-5 mb-5 relative transition-all duration-300 ease-in-out hover:shadow-accent-glow hover:translate-y-[-2px]">
        <ProgressBar currentStep={currentStepIndex + 1} totalSteps={totalSteps} />

        <h1 className="text-3xl sm:text-4xl text-accent mb-5 text-center font-bold text-shadow-accent">
          Arch Linux Installation Guide
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl text-text mt-5 mb-4 font-semibold border-b-2 border-border pb-2">
            Step {currentStepIndex + 1}: {step.title}
          </h2>
          <p className="mb-4 text-text opacity-90">{step.description}</p>

          {step.commands.map((cmdObj, cmdIndex) => (
            <React.Fragment key={cmdIndex}>
              <CodeBlock command={cmdObj.cmd} explanation={cmdObj.explanation} />
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-between mt-10 gap-5">
          <button
            onClick={handlePrevClick}
            disabled={currentStepIndex === 0}
            className="flex-1 bg-button-bg text-text border-none py-3 px-4 sm:py-4 sm:px-6 rounded-lg cursor-pointer text-lg font-semibold transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-3px] hover:shadow-accent-glow-md disabled:bg-border disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none disabled:shadow-none"
          >
            Previous Step
          </button>
          <button
            onClick={handleNextClick}
            className="flex-1 bg-button-bg text-text border-none py-3 px-4 sm:py-4 sm:px-6 rounded-lg cursor-pointer text-lg font-semibold transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-3px] hover:shadow-accent-glow-md disabled:bg-border disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none disabled:shadow-none"
          >
            {currentStepIndex === totalSteps - 1 ? "Finish Guide" : "Next Step"}
          </button>
        </div>

        <Link
          to="/"
          className="block text-center mt-8 text-text no-underline font-semibold text-base py-3 px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md max-w-xs mx-auto hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}