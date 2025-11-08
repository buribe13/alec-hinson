"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-[#b40000] flex items-center justify-center p-0 hover:opacity-80 transition-opacity"
      aria-label="Toggle theme"
    >
      <p className="font-medium text-[13px] leading-[13px] text-white tracking-[-0.25px]">
        {theme === "dark" ? "light" : "dark"}
      </p>
    </button>
  );
}
