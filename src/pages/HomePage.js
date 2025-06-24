import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5">
      <div className="max-w-3xl w-full bg-card-bg-transparent rounded-xl shadow-xl p-10 text-center border border-border transition-all duration-300 ease-in-out hover:shadow-accent-glow hover:translate-y-[-2px]">
        <header>
          <h1 className="text-5xl text-accent mb-5 font-bold tracking-tight text-shadow-accent">
            Arch Linux Unveiled
          </h1>
          <p className="text-xl text-text mb-10 opacity-90 max-w-2xl mx-auto">
            Your comprehensive, step-by-step guide to installing Arch Linux from
            scratch. Designed for clarity, precision, and a smooth journey into
            the Arch ecosystem.
          </p>
        </header>
        <main>
          <Link
            to="/install"
            className="inline-block bg-button-bg text-text py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out shadow-lg hover:bg-button-hover-bg hover:translate-y-[-3px] hover:shadow-accent-glow-md border-none cursor-pointer"
          >
            Start Installation Guide
          </Link>
          <nav className="mt-10 flex justify-center gap-5 flex-wrap">
            <Link
              to="/prerequisites"
              className="text-text no-underline font-normal text-base py-2 px-4 rounded-md transition-all duration-300 ease-in-out border border-border hover:bg-button-bg hover:text-accent hover:translate-y-[-2px] hover:shadow-accent-glow-sm"
            >
              Prerequisites & Tools
            </Link>
            <Link
              to="/post-install"
              className="text-text no-underline font-normal text-base py-2 px-4 rounded-md transition-all duration-300 ease-in-out border border-border hover:bg-button-bg hover:text-accent hover:translate-y-[-2px] hover:shadow-accent-glow-sm"
            >
              Post-Installation & Maintenance
            </Link>
            <Link
              to="/faq-troubleshooting"
              className="text-text no-underline font-normal text-base py-2 px-4 rounded-md transition-all duration-300 ease-in-out border border-border hover:bg-button-bg hover:text-accent hover:translate-y-[-2px] hover:shadow-accent-glow-sm"
            >
              Troubleshooting & FAQ
            </Link>
            <Link
              to="/about"
              className="text-text no-underline font-normal text-base py-2 px-4 rounded-md transition-all duration-300 ease-in-out border border-border hover:bg-button-bg hover:text-accent hover:translate-y-[-2px] hover:shadow-accent-glow-sm"
            >
              About & Disclaimer
            </Link>
          </nav>
        </main>
      </div>
    </div>
  );
}