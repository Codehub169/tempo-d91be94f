import React, { useState, useId } from 'react';

const CodeBlock = ({ command, explanation, id, showCheckbox = true }) => {
  const [copied, setCopied] = useState(false);
  const [completed, setCompleted] = useState(false);
  const uniqueId = useId();
  const effectiveId = id || uniqueId;

  const handleCopy = () => {
    navigator.clipboard.writeText(command.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`code-block bg-code-bg-transparent rounded-lg p-4 my-5 relative border border-border shadow-md transition-all duration-200 ease-in-out ${completed ? 'completed bg-completed-bg border-completed-border shadow-green-glow' : ''}`}>
      <div className="flex items-start gap-3 w-full">
        {showCheckbox && (
          <div className="checklist-item flex-shrink-0 pt-0.5">
            <input
              type="checkbox"
              id={`checkbox-${effectiveId}`}
              className="command-checkbox appearance-none w-5 h-5 border-2 border-accent rounded-md bg-code-bg-transparent cursor-pointer relative outline-none transition-all duration-200 ease-in-out checked:bg-success checked:border-success hover:bg-opacity-10"
              checked={completed}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={`checkbox-${effectiveId}`} className="sr-only">Mark as complete</label>
          </div>
        )}
        <button
          className={`copy-button absolute top-2 right-2 bg-button-bg text-text border-none py-2 px-3 rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out flex items-center gap-1 shadow-sm ${copied ? 'bg-success shadow-green-glow' : 'hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-cyan-glow'}`}
          onClick={handleCopy}
        >
          {copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          )}
          {copied ? "Copied!" : "Copy"}
        </button>
        <code id={effectiveId} className="block font-mono text-code-text pr-12 flex-grow">{command}</code>
      </div>
      {explanation && (
        <div className="command-explanation bg-accent-transparent border-l-4 border-accent p-4 rounded-lg mt-3 text-sm text-text shadow-sm">
          <strong className="text-accent text-shadow-cyan">What it does & Why it's needed:</strong> {explanation}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;