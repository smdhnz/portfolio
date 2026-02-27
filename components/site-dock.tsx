"use client";

import { Home, PenTool, Github, Instagram, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";
import Dock from "@/components/Dock";

export function SiteDock() {
  const router = useRouter();

  const items = [
    {
      icon: <Home className="h-5 w-5 text-foreground" />,
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      icon: <PenTool className="h-5 w-5 text-foreground" />,
      label: "Blog",
      onClick: () => router.push("/blog"),
    },
    {
      icon: <Github className="h-5 w-5 text-foreground" />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/smdhnz", "_blank"),
    },
    {
      icon: <Instagram className="h-5 w-5 text-foreground" />,
      label: "Instagram",
      onClick: () => window.open("https://www.instagram.com/ktfmy_/", "_blank"),
    },
    {
      icon: <Youtube className="h-5 w-5 text-foreground" />,
      label: "YouTube",
      onClick: () =>
        window.open("https://www.youtube.com/@smdhnz-w6f/featured", "_blank"),
    },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <Dock
          items={items}
          panelHeight={60}
          baseItemSize={40}
          magnification={60}
        />
      </div>
    </div>
  );
}
