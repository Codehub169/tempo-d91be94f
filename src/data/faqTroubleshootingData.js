export const troubleshootingData = [
  {
    question: "Internet connection not working after boot.",
    answer: [
      {
        type: "paragraph",
        text: "Ensure your network interface is detected and enabled. For wired connections, try restarting the DHCP client.",
      },
      {
        type: "code",
        code: "ip link",
      },
      {
        type: "code",
        code: "sudo systemctl restart dhcpcd",
      },
      {
        type: "paragraph",
        text: "For wireless, ensure you've installed and configured a network manager (e.g., NetworkManager or iwd) and enabled its service.",
      },
      {
        type: "code",
        code: "sudo pacman -S networkmanager",
      },
      {
        type: "code",
        code: "sudo systemctl enable --now NetworkManager",
      },
    ],
  },
  {
    question: "'Failed to mount /boot' or 'Failed to mount /' during boot.",
    answer: [
      {
        type: "paragraph",
        text: "This usually indicates an incorrect /etc/fstab entry. Boot from the Arch ISO, mount your root partition, and check/regenerate fstab.",
      },
      {
        type: "code",
        code: "mount /dev/sdx2 /mnt  # Your root partition\nmount /dev/sdx1 /mnt/boot # Your EFI/boot partition\ngenfstab -U /mnt > /mnt/etc/fstab\ncat /mnt/etc/fstab",
      },
      {
        type: "paragraph",
        text: "Ensure your UUIDs in fstab match 'blkid' output.",
      },
      {
        type: "code",
        code: "blkid",
      },
    ],
  },
  {
    question: "GRUB rescue prompt or system not booting.",
    answer: [
      {
        type: "paragraph",
        text: "This means GRUB couldn't find its configuration or core. Boot from Arch ISO, chroot, and reinstall GRUB.",
      },
      {
        type: "code",
        code: "arch-chroot /mnt\ngrub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB\ngrub-mkconfig -o /boot/grub/grub.cfg",
      },
      {
        type: "paragraph",
        text: "Verify UEFI boot entries with 'efibootmgr'.",
      },
      {
        type: "code",
        code: "efibootmgr -v",
      },
    ],
  },
  {
    question: "Pacman 'signature is unknown trust' or 'invalid or corrupted package' error.",
    answer: [
      {
        type: "paragraph",
        text: "Your pacman keys might be outdated or corrupted. Refresh them.",
      },
      {
        type: "code",
        code: "sudo pacman -Syyu archlinux-keyring\nsudo pacman-key --refresh-keys\nsudo pacman-key --populate archlinux",
      },
    ],
  },
];

export const faqData = [
  {
    question: "What is Arch Linux?",
    answer: [
      {
        type: "paragraph",
        text: "Arch Linux is an independently developed, x86-64 general-purpose Linux distribution that strives to provide the latest stable versions of software by following a rolling-release model. It's known for its simplicity, minimalism, and user-centric philosophy.",
      },
    ],
  },
  {
    question: "Why choose Arch Linux?",
    answer: [
      {
        type: "list",
        items: [
          "**Simplicity:** Designed to be simple from a developer's perspective, not necessarily a user's. It's not complex; it's minimal.",
          "**Modernity:** Rolling release ensures you always have the latest software versions.",
          "**User Centrality:** You decide what goes into your system. No unnecessary bloat.",
          "**Pacman:** A powerful and easy-to-use package manager.",
          "**Arch Wiki:** One of the best Linux documentations available.",
        ],
      },
    ],
  },
  {
    question: "Is Arch Linux suitable for beginners?",
    answer: [
      {
        type: "paragraph",
        text: "While this guide aims to simplify the process, Arch Linux is generally not recommended for absolute beginners to Linux. It requires a willingness to learn, read documentation, and troubleshoot issues independently. If you're new to Linux, consider distributions like Ubuntu, Fedora, or Linux Mint first.",
      },
    ],
  },
  {
    question: "What is the Arch User Repository (AUR)?",
    answer: [
      {
        type: "paragraph",
        text: "The AUR is a community-driven repository for Arch Linux users. It contains package descriptions (PKGBUILDs) that allow you to compile software from source with pacman. It vastly expands the software available beyond the official repositories.",
      },
      {
        type: "paragraph",
        text: "Tools like 'yay' or 'paru' are often used as AUR helpers to automate the process of downloading PKGBUILDs and building packages.",
      },
    ],
  },
  {
    question: "How often should I update my Arch Linux system?",
    answer: [
      {
        type: "paragraph",
        text: "Due to its rolling release nature, it's recommended to update your Arch Linux system frequently (e.g., weekly) to avoid large, potentially problematic updates. Always use 'sudo pacman -Syu'.",
      },
    ],
  },
];