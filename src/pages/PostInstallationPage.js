import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/ui/CodeBlock";

function PostInstallationPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5">
      <div className="max-w-4xl w-full bg-card-bg rounded-xl shadow-xl p-10 text-left border border-border-color mb-5 transition-all duration-300 ease-in-out hover:shadow-accent-glow hover:translate-y-[-2px]">
        <h1 className="text-4xl text-accent-color mb-6 font-bold text-center text-shadow-accent">
          Post-Installation & Maintenance Guide
        </h1>
        <p className="mb-4 opacity-90">
          Congratulations on installing Arch Linux! The base system is now set
          up. This section will guide you through common post-installation
          steps to make your Arch system a fully functional and personalized
          daily driver, along with essential maintenance practices.
        </p>

        <h2 className="text-3xl text-text-color mt-8 mb-4 font-semibold border-b-2 border-border-color pb-2">
          1. Install a Desktop Environment or Window Manager
        </h2>
        <p className="mb-4 opacity-90">
          Arch Linux comes without a graphical interface. You'll need to install
          one based on your preference.
        </p>
        <h3 className="text-2xl text-accent-color mt-6 mb-3 font-semibold">
          Popular Desktop Environments:
        </h3>
        <ul className="list-disc pl-5 mb-5 opacity-90">
          <li className="mb-2"><strong>GNOME:</strong> Modern, user-friendly.</li>
          <li className="mb-2">
            <strong>KDE Plasma:</strong> Highly customizable, feature-rich.
          </li>
          <li className="mb-2">
            <strong>XFCE:</strong> Lightweight, stable, and customizable.
          </li>
          <li className="mb-2">
            <strong>Cinnamon:</strong> Traditional desktop layout, user-friendly.
          </li>
        </ul>
        <p className="mb-4 opacity-90">
          <strong>Example (XFCE):</strong>
        </p>
        <CodeBlock
          command="sudo pacman -S xfce4 xfce4-goodies"
          explanation="Installs the XFCE desktop environment and common utilities."
        />
        <h3 className="text-2xl text-accent-color mt-6 mb-3 font-semibold">
          Display Manager (Login Screen):
        </h3>
        <p className="mb-4 opacity-90">
          You'll need a display manager to log into your graphical session.
        </p>
        <p className="mb-4 opacity-90">
          <strong>Example (LightDM for XFCE):</strong>
        </p>
        <CodeBlock
          command="sudo pacman -S lightdm lightdm-gtk-greeter"
          explanation="Installs LightDM, a lightweight display manager, and its GTK greeter for XFCE."
        />
        <p className="mb-4 opacity-90">Enable the display manager service:</p>
        <CodeBlock
          command="sudo systemctl enable lightdm"
          explanation="Enables LightDM to start automatically on boot."
        />
        <p className="mb-4 opacity-90">
          Reboot to enter your graphical environment:
        </p>
        <CodeBlock
          command="reboot"
          explanation="Reboots your system to apply the changes and start the graphical environment."
        />

        <h2 className="text-3xl text-text-color mt-8 mb-4 font-semibold border-b-2 border-border-color pb-2">
          2. Network Management
        </h2>
        <p className="mb-4 opacity-90">
          For persistent network connectivity after reboot, you'll need a network
          manager.
        </p>
        <h3 className="text-2xl text-accent-color mt-6 mb-3 font-semibold">
          NetworkManager (Recommended for most users):
        </h3>
        <CodeBlock
          command="sudo pacman -S networkmanager"
          explanation="Installs NetworkManager, a daemon that handles network connections."
        />
        <p className="mb-4 opacity-90">Enable and start the service:</p>
        <CodeBlock
          command="sudo systemctl enable NetworkManager\nsudo systemctl start NetworkManager"
          explanation="Enables NetworkManager to start on boot and immediately starts the service."
        />

        <h2 className="text-3xl text-text-color mt-8 mb-4 font-semibold border-b-2 border-border-color pb-2">
          3. Audio Configuration
        </h2>
        <p className="mb-4 opacity-90">
          Install audio server and utilities to get sound working.
        </p>
        <p className="mb-4 opacity-90">
          <strong>PipeWire (Recommended modern audio server):</strong>
        </p>
        <CodeBlock
          command="sudo pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-jack pavucontrol"
          explanation="Installs PipeWire and its compatibility layers for PulseAudio, ALSA, and JACK, along with pavucontrol for volume control."
        />
        <p className="mb-4 opacity-90">
          Reboot or log out/in for changes to take effect.
        </p>

        <h2 className="text-3xl text-text-color mt-8 mb-4 font-semibold border-b-2 border-border-color pb-2">
          4. Install Common Software
        </h2>
        <p className="mb-4 opacity-90">
          Install essential applications for daily use.
        </p>
        <CodeBlock
          command="sudo pacman -S firefox zsh git htop neofetch"
          explanation="Installs Firefox (web browser), Zsh (alternative shell), Git (version control), htop (process viewer), and neofetch (system info tool)."
        />
        <p className="mb-4 opacity-90">
          This installs Firefox (web browser), Zsh (alternative shell), Git
          (version control), htop (process viewer), and neofetch (system info
          tool).
        </p>

        <h2 className="text-3xl text-text-color mt-8 mb-4 font-semibold border-b-2 border-border-color pb-2">
          5. System Maintenance
        </h2>
        <p className="mb-4 opacity-90">
          Arch Linux is a rolling release, meaning continuous updates. Regular
          maintenance is key.
        </p>
        <h3 className="text-2xl text-accent-color mt-6 mb-3 font-semibold">
          Update System:
        </h3>
        <p className="mb-4 opacity-90">
          Always update your system regularly to get the latest packages and
          security fixes.
        </p>
        <CodeBlock
          command="sudo pacman -Syu"
          explanation="Synchronizes package databases (-y) and then upgrades all out-of-date packages (-u)."
        />
        <p className="mb-4 opacity-90">
          This command synchronizes package databases (`-y`) and then upgrades
          all out-of-date packages (`-u`).
        </p>

        <h3 className="text-2xl text-accent-color mt-6 mb-3 font-semibold">
          Clean Package Cache:
        </h3>
        <p className="mb-4 opacity-90">
          Over time, `pacman`'s cache can grow large. Clean it to free up space.
        </p>
        <CodeBlock
          command="sudo pacman -Sc"
          explanation="Removes all cached versions of installed and uninstalled packages, except for the latest three versions."
        />
        <p className="mb-4 opacity-90">
          This removes all cached versions of installed and uninstalled
          packages, except for the latest three versions.
        </p>
        <CodeBlock
          command="sudo pacman -Scc"
          explanation="Removes *all* files from the cache, including all sync database files. Use with caution."
        />
        <p className="mb-4 opacity-90">
          This removes *all* files from the cache, including all sync database
          files. Use with caution.
        </p>

        <h3 className="text-2xl text-accent-color mt-6 mb-3 font-semibold">
          Install an AUR Helper (Optional but Recommended):
        </h3>
        <p className="mb-4 opacity-90">
          The Arch User Repository (AUR) contains thousands of
          community-maintained packages. An AUR helper simplifies installing
          them.
        </p>
        <p className="mb-4 opacity-90">
          <strong>Example (Yay):</strong>
        </p>
        <CodeBlock
          command="sudo pacman -S --needed base-devel git\ngit clone https://aur.archlinux.org/yay.git\ncd yay\nmakepkg -si\ncd ..\nrm -rf yay"
          explanation="Installs base-devel and git (needed for AUR helpers), clones the yay repository, builds and installs yay, then cleans up the cloned repository. After installing, you can use `yay -S package_name` to install AUR packages and `yay -Syu` to update both official and AUR packages."
        />

        <p className="mb-4 opacity-90">
          This guide provides a starting point. Arch Linux is all about
          customization and learning. Explore the{" "}
          <a
            href="https://wiki.archlinux.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-color no-underline hover:underline"
          >
            Arch Wiki
          </a>{" "}
          for more in-depth information on any topic.
        </p>

        <div className="nav-links mt-10 flex justify-center gap-5 flex-wrap">
          <Link
            to="/"
            className="text-text-color no-underline font-semibold text-base py-3 px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Back to Home
          </Link>
          <Link
            to="/install"
            className="text-text-color no-underline font-semibold text-base py-3 px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Installation Guide
          </Link>
          <Link
            to="/prerequisites"
            className="text-text-color no-underline font-semibold text-base py-3 px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Prerequisites & Tools
          </Link>
          <Link
            to="/faq-troubleshooting"
            className="text-text-color no-underline font-semibold text-base py-3 px-5 rounded-lg bg-button-bg transition-all duration-300 ease-in-out shadow-md hover:bg-button-hover-bg hover:translate-y-[-2px] hover:shadow-accent-glow-md"
          >
            Troubleshooting & FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostInstallationPage;
