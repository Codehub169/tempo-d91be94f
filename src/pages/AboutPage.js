import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5">
      <div className="max-w-3xl w-full bg-card-bg-transparent rounded-xl shadow-xl p-10 text-left border border-border transition-all duration-300 ease-in-out hover:shadow-accent-glow hover:translate-y-[-2px]">
        <h1 className="text-4xl text-accent mb-6 font-bold text-center text-shadow-accent">
          About This Guide
        </h1>
        <p className="mb-4 opacity-90">
          This guide was created with the sole purpose of providing a clear,
          step-by-step walkthrough for installing Arch Linux. It aims to
          demystify the process for newcomers while offering a concise
          reference for experienced users.
        </p>

        <h2 className="text-2xl text-accent mt-8 mb-4 font-semibold border-b border-border pb-1">
          Purpose & Scope
        </h2>
        <p className="mb-4 opacity-90">
          Our goal is to cover a basic, functional Arch Linux installation,
          including essential system configuration and a bootloader setup for
          UEFI systems. We focus on clarity and providing exact commands and
          their explanations.
        </p>
        <p className="mb-4 opacity-90">
          This guide does not cover advanced topics such as:
        </p>
        <ul className="list-disc pl-5 mb-5 opacity-90">
          <li className="mb-2">Dual-booting with other operating systems.</li>
          <li className="mb-2">Advanced disk encryption (LUKS).</li>
          <li className="mb-2">
            Specific desktop environment (DE) or window manager (WM)
            installations beyond the base system.
          </li>
          <li className="mb-2">Complex network configurations.</li>
          <li className="mb-2">Kernel customization.</li>
        </ul>

        <h2 className="text-2xl text-accent mt-8 mb-4 font-semibold border-b border-border pb-1">
          Acknowledgments
        </h2>
        <p className="mb-4 opacity-90">
          This guide is heavily inspired by the official Arch Linux
          Installation Guide available on the Arch Wiki, which is an invaluable
          resource for all Arch users. We encourage everyone to consult the{" "}
          <a
            href="https://wiki.archlinux.org/index.php/Installation_guide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent no-underline hover:underline"
          >
            Arch Wiki
          </a>{" "}
          for the most up-to-date and comprehensive information.
        </p>

        <div className="bg-accent-transparent border-l-4 border-accent p-5 rounded-lg mt-8 text-sm shadow-md">
          <h2 className="text-xl text-accent mb-3 font-semibold pb-0 border-b-0 text-shadow-accent">
            Important Disclaimer
          </h2>
          <p className="mb-3 opacity-90">
            <strong>USE AT YOUR OWN RISK:</strong> Installing Arch Linux
            involves significant changes to your computer's disk partitions and
            boot configuration. Incorrect steps can lead to data loss or an
            unbootable system. Always back up your important data before
            proceeding.
          </p>
          <p className="mb-0 opacity-90">
            This guide is provided "as is" without any warranties. The
            information may become outdated as Arch Linux is a rolling release
            distribution. Always cross-reference with the official Arch Wiki
            for the latest instructions.
          </p>
          <p className="mb-0 opacity-90">
            We are not responsible for any damage, data loss, or issues that
            may arise from following this guide.
          </p>
        </div>

        <div className="nav-links mt-10 flex justify-center gap-5 flex-wrap">
          <Link
            to="/"
            className="text-text no-underline font-semibold text-base py-3 px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Back to Home
          </Link>
          <Link
            to="/install"
            className="text-text no-underline font-semibold text-base py-3 px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Start Installation
          </Link>
          <Link
            to="/post-install"
            className="text-text no-underline font-semibold text-base py-3 px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Post-Installation Guide
          </Link>
          <Link
            to="/faq-troubleshooting"
            className="text-text no-underline font-semibold text-base py-3 px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Troubleshooting & FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}