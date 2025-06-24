export const installationSteps = [
  {
    title: "Verify Boot Mode",
    description: "It's crucial to verify the boot mode (UEFI or BIOS) as it dictates how you'll partition your disk and install the bootloader.",
    commands: [
      {
        cmd: "ls /sys/firmware/efi/efivars",
        explanation: "If this command shows content without errors, your system is booted in UEFI mode. If it returns an error, you are likely in BIOS/CSM mode.",
      },
    ],
  },
  {
    title: "Connect to the Internet",
    description: "A working internet connection is required to download packages during the installation.",
    commands: [
      {
        cmd: "ping archlinux.org",
        explanation: "Verify internet connectivity. If you get replies, you're connected.",
      },
      {
        cmd: "iwctl station wlan0 connect <SSID> --passphrase <Passphrase>",
        explanation: "For Wi-Fi, replace 'wlan0' with your wireless interface, and fill in your SSID and passphrase. Use 'iwctl device list' to find your Wi-Fi device.",
      },
      {
        cmd: "dhcpcd",
        explanation: "If using a wired connection and DHCP is not automatically assigning an IP, run this to obtain an IP address.",
      },
    ],
  },
  {
    title: "Update the System Clock",
    description: "Ensure your system's clock is accurate for proper package management and system operations.",
    commands: [
      {
        cmd: "timedatectl set-ntp true",
        explanation: "Enables network time synchronization, ensuring your system's clock is accurate.",
      },
      {
        cmd: "timedatectl status",
        explanation: "Verify the NTP service status. 'NTP service: active' means it's working.",
      },
    ],
  },
  {
    title: "Partition the Disks",
    description: "This is a critical step where you allocate space for your Arch Linux installation. Replace '/dev/sdx' with your actual disk (e.g., /dev/sda, /dev/nvme0n1).",
    commands: [
      {
        cmd: "lsblk",
        explanation: "Lists block devices (disks and partitions) to help you identify your target disk.",
      },
      {
        cmd: "fdisk /dev/sdx",
        explanation: "Starts the fdisk utility for partitioning. Use 'g' for GPT, 'n' for new partition, 't' for type, 'w' to write changes.",
      },
      {
        cmd: "mkfs.fat -F32 /dev/sdx1",
        explanation: "Formats the EFI system partition (ESP) with FAT32. Replace 'sdx1' with your ESP partition (e.g., /dev/sda1).",
      },
      {
        cmd: "mkfs.ext4 /dev/sdx2",
        explanation: "Formats the root partition with Ext4. Replace 'sdx2' with your root partition (e.g., /dev/sda2).",
      },
      {
        cmd: "mkswap /dev/sdx3",
        explanation: "Formats the swap partition. Replace 'sdx3' with your swap partition.",
      },
      {
        cmd: "swapon /dev/sdx3",
        explanation: "Activates the swap partition.",
      },
    ],
  },
  {
    title: "Mount the File Systems",
    description: "Mount the newly created partitions to prepare them for the installation of the base system.",
    commands: [
      {
        cmd: "mount /dev/sdx2 /mnt",
        explanation: "Mounts the root partition to /mnt.",
      },
      {
        cmd: "mkdir /mnt/boot",
        explanation: "Creates a directory for the boot partition inside the mounted root.",
      },
      {
        cmd: "mount /dev/sdx1 /mnt/boot",
        explanation: "Mounts the EFI system partition to /mnt/boot.",
      },
    ],
  },
  {
    title: "Install the Base System",
    description: "Install the essential Arch Linux packages to your mounted root partition.",
    commands: [
      {
        cmd: "pacstrap /mnt base linux linux-firmware",
        explanation: "Installs the base Arch Linux system, the Linux kernel, and firmware for various hardware.",
      },
    ],
  },
  {
    title: "Generate Fstab",
    description: "Generate an fstab file, which defines how disk partitions are mounted at boot time.",
    commands: [
      {
        cmd: "genfstab -U /mnt >> /mnt/etc/fstab",
        explanation: "Generates an fstab file using UUIDs for robustness and appends it to the correct location.",
      },
      {
        cmd: "cat /mnt/etc/fstab",
        explanation: "Review the generated fstab file to ensure it's correct.",
      },
    ],
  },
  {
    title: "Chroot into the New System",
    description: "Change root into your newly installed system to perform post-installation configurations.",
    commands: [
      {
        cmd: "arch-chroot /mnt",
        explanation: "Changes the root directory to /mnt, allowing you to operate within your new Arch Linux environment.",
      },
    ],
  },
  {
    title: "Configure the System",
    description: "Set up locale, timezone, hostname, and root password.",
    commands: [
      {
        cmd: "ln -sf /usr/share/zoneinfo/Region/City /etc/localtime",
        explanation: "Set your timezone (e.g., /usr/share/zoneinfo/America/New_York).",
      },
      {
        cmd: "hwclock --systohc",
        explanation: "Generates /etc/adjtime and sets the hardware clock from the system clock.",
      },
      {
        cmd: "echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen\nlocale-gen",
        explanation: "Uncomment 'en_US.UTF-8 UTF-8' in /etc/locale.gen if it's commented, then generate locales.",
      },
      {
        cmd: "echo 'LANG=en_US.UTF-8' > /etc/locale.conf",
        explanation: "Sets the system-wide locale.",
      },
      {
        cmd: "echo 'myhostname' > /etc/hostname",
        explanation: "Set your desired hostname (e.g., 'archlinux').",
      },
      {
        cmd: "passwd",
        explanation: "Set the root password.",
      },
    ],
  },
  {
    title: "Install and Configure Bootloader (GRUB for UEFI)",
    description: "Install a bootloader to make your system bootable. This example uses GRUB for UEFI systems.",
    commands: [
      {
        cmd: "pacman -S grub efibootmgr",
        explanation: "Installs GRUB and efibootmgr (required for UEFI systems).",
      },
      {
        cmd: "grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB",
        explanation: "Installs GRUB to the EFI system partition. Adjust '--efi-directory' if your ESP is mounted elsewhere.",
      },
      {
        cmd: "grub-mkconfig -o /boot/grub/grub.cfg",
        explanation: "Generates the GRUB configuration file.",
      },
    ],
  },
  {
    title: "Create a New User",
    description: "It's recommended to use a regular user account for daily operations instead of root.",
    commands: [
      {
        cmd: "useradd -m -G wheel,audio,video,storage -s /bin/bash yourusername",
        explanation: "Creates a new user with a home directory, adds them to common groups, and sets Bash as their default shell. Replace 'yourusername'.",
      },
      {
        cmd: "passwd yourusername",
        explanation: "Set the password for your new user. Replace 'yourusername'.",
      },
      {
        cmd: "EDITOR=nano visudo",
        explanation: "Edit the sudoers file. Uncomment '%wheel ALL=(ALL:ALL) ALL' to allow users in the 'wheel' group to use sudo.",
      },
    ],
  },
  {
    title: "Exit Chroot and Reboot",
    description: "You've completed the base installation! Exit the chroot environment and reboot into your new Arch Linux system.",
    commands: [
      {
        cmd: "exit",
        explanation: "Exits the arch-chroot environment.",
      },
      {
        cmd: "umount -R /mnt",
        explanation: "Unmounts all partitions from /mnt. Ensure no processes are using /mnt before unmounting.",
      },
      {
        cmd: "reboot",
        explanation: "Reboots your system. Remember to remove the installation media.",
      },
    ],
  },
];