import React from "react";
import { Link } from "react-router-dom";

export default function PrerequisitesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5">
      <div className="max-w-3xl w-full bg-card-bg-transparent rounded-xl shadow-xl p-6 md:p-10 text-left border border-border transition-all duration-300 ease-in-out hover:shadow-accent-glow hover:translate-y-[-2px]">
        <h1 className="text-3xl sm:text-4xl text-accent mb-6 font-bold text-center text-shadow-accent">
          Prerequisites & Tools
        </h1>
        <p className="mb-4 opacity-90">
          Before embarking on your Arch Linux installation journey, ensure you
          have the following tools and preparations in place. This will make
          your installation smoother and prevent common pitfalls.
        </p>

        <h2 className="text-xl sm:text-2xl text-accent mt-8 mb-4 font-semibold border-b border-border pb-1">
          Hardware Requirements
        </h2>
        <ul className="list-none pl-0 mb-5">
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>A computer with a 64-bit processor:</strong> Arch Linux
            officially supports x86_64 architecture.
          </li>
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>Minimum 512 MB RAM:</strong> For basic installation, though
            2GB+ is recommended for a comfortable experience.
          </li>
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>Minimum 20 GB free disk space:</strong> For the base
            system, more if you plan to install a desktop environment and
            applications.
          </li>
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>A USB drive (at least 2GB) or a blank DVD:</strong> To
            create bootable Arch Linux installation media.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl text-accent mt-8 mb-4 font-semibold border-b border-border pb-1">
          Software & Information
        </h2>
        <ul className="list-none pl-0 mb-5">
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>Arch Linux ISO image:</strong> Download the latest ISO from
            the{" "}
            <a
              href="https://archlinux.org/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline hover:underline"
            >
              official Arch Linux website
            </a>
            .
          </li>
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>Etcher or Rufus:</strong> Software to flash the ISO image
            to your USB drive, making it bootable.
          </li>
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>Internet Connection:</strong> A stable wired (Ethernet)
            connection is highly recommended during installation. Wi-Fi setup
            is possible but might require extra steps.
          </li>
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>A second device (optional but recommended):</strong> Another
            computer, tablet, or phone to view this guide during the
            installation process, as your main machine will be busy.
          </li>
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>Basic understanding of Linux commands:</strong> While this
            guide is detailed, familiarity with the terminal will be
            beneficial.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl text-accent mt-8 mb-4 font-semibold border-b border-border pb-1">
          Preparation Steps
        </h2>
        <ul className="list-none pl-0 mb-5">
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>Backup your data:</strong> Installing Arch Linux involves
            partitioning disks, which can lead to data loss if not done
            carefully. BACK UP ALL IMPORTANT DATA!
          </li>
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>Disable Secure Boot (if using UEFI):</strong> Access your
            computer's UEFI/BIOS settings and disable Secure Boot, as it can
            interfere with Arch Linux booting.
          </li>
          <li className="bg-code-bg-transparent p-3 sm:p-4 rounded-lg mb-3 flex items-center border-l-4 border-accent shadow-md transition-all duration-200 ease-in-out hover:shadow-accent-glow-sm hover:translate-x-1">
            <span className="text-accent font-bold mr-4 text-xl text-shadow-accent">&#10003;</span>
            <strong>Set boot order:</strong> Configure your computer's
            UEFI/BIOS to boot from the USB drive or DVD first.
          </li>
        </ul>

        <div className="nav-links mt-10 flex justify-center gap-5 flex-wrap">
          <Link
            to="/"
            className="text-text no-underline font-semibold text-base py-2 px-4 sm:py-3 sm:px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Back to Home
          </Link>
          <Link
            to="/install"
            className="text-text no-underline font-semibold text-base py-2 px-4 sm:py-3 sm:px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Start Installation
          </Link>
          <Link
            to="/post-install"
            className="text-text no-underline font-semibold text-base py-2 px-4 sm:py-3 sm:px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Post-Installation Guide
          </Link>
          <Link
            to="/faq-troubleshooting"
            className="text-text no-underline font-semibold text-base py-2 px-4 sm:py-3 sm:px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Troubleshooting & FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}