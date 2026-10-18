// Your project cards. Edit the wording here, or copy a block to add a new project.
// color: the card's color (icon tile, category label, hover border)
// icon:  one of the names in src/components/Icon.astro
// monitor: the matching Uptime Kuma monitor name, for when the live status gets wired up

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  icon: "server" | "gamepad" | "globe";
  status: string;
  monitor?: string;
};

export const projects: Project[] = [
  {
    title: "Homelab server",
    category: "Infrastructure",
    description:
      "An Ubuntu server I built and run at home. It handles ad blocking for the whole network, monitoring, nightly backups, game servers, and this website.",
    tags: ["Ubuntu", "Docker", "nginx", "Tailscale"],
    color: "#7FA9D8",
    icon: "server",
    status: "Online",
    monitor: "homelab",
  },
  {
    title: "Game servers",
    category: "Hosting",
    description:
      "Modded multiplayer servers I host for a group of friends playing across PC and Xbox.",
    tags: ["AMP", "containers", "networking"],
    color: "#E3A247",
    icon: "gamepad",
    status: "Online",
    monitor: "amp-panel",
  },
  {
    title: "This site",
    category: "Web",
    description:
      "Built with Astro and Tailwind and self-hosted on my own server. The code is public on GitHub.",
    tags: ["Astro", "Tailwind", "nginx", "Git"],
    color: "#B4A4E0",
    icon: "globe",
    status: "Live",
    monitor: "website",
  },
];
