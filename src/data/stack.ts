// The Stack section. Add or remove items freely.

export type StackGroup = {
  name: string;
  color: string;
  icon: "window" | "network" | "cpu" | "code";
  items: string[];
};

export const stack: StackGroup[] = [
  {
    name: "Systems",
    color: "#7FA9D8",
    icon: "window",
    items: ["Ubuntu Linux", "Windows 10/11", "Docker", "nginx", "Bash"],
  },
  {
    name: "Networking",
    color: "#B4A4E0",
    icon: "network",
    items: ["DNS", "Pi-hole", "Tailscale", "Cloudflare", "SSH"],
  },
  {
    name: "Hardware",
    color: "#E3A247",
    icon: "cpu",
    items: ["PC building", "Upgrades", "Diagnostics", "BIOS and overclocking"],
  },
  {
    name: "Code and tools",
    color: "#6CC3B8",
    icon: "code",
    items: ["Git", "SQL", "HTML", "CSS", "Java", "JavaScript", "Astro"],
  },
];
