"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BlogHeaderProps {
  breadcrumb?: string;
}

export default function BlogHeader({ breadcrumb }: BlogHeaderProps) {
  const pathname = usePathname();

  // Determine current page from pathname
  const getCurrentPage = ():
    | "music"
    | "blog"
    | "interviews"
    | "photos"
    | undefined => {
    if (pathname === "/") return "blog";
    if (pathname === "/music") return "music";
    if (pathname === "/interviews") return "interviews";
    if (pathname === "/photos") return "photos";
    return undefined;
  };

  const currentPage = getCurrentPage();

  // Automatically generate breadcrumb based on currentPage if not provided
  const getBreadcrumb = () => {
    if (breadcrumb) {
      return breadcrumb;
    }

    const base = "2025 > alec-vision.blog";

    if (!currentPage || currentPage === "blog") {
      return base;
    }

    return `${base} > ${currentPage}`;
  };

  return (
    <header className="w-full">
      <div className="flex flex-col gap-12">
        {/* Breadcrumb and Social Links */}
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-[11px] leading-[15px] text-black/60 dark:text-white/40 tracking-[-0.25px]">
            {getBreadcrumb()}
          </p>
          <div className="flex gap-3 items-center">
            <a
              href="#"
              className="bg-[#b40000] flex items-center justify-center p-0"
            >
              <p className="font-medium text-[13px] leading-[15px] text-white tracking-[-0.25px]">
                instagram ↘
              </p>
            </a>
            <a
              href="#"
              className="bg-[#b40000] flex items-center justify-center p-0"
            >
              <p className="font-medium text-[13px] leading-[15px] text-white tracking-[-0.25px]">
                twitter ↘
              </p>
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Title and Navigation */}
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex items-center justify-start">
            <h1 className="font-title text-[64px] font-normal italic text-black dark:text-white leading-[64px]">
              alec vision.
            </h1>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="border-t border-b border-black dark:border-white w-full">
              <nav className="flex gap-6 items-center px-0 py-2 font-medium text-[13px] leading-[15px] tracking-[-0.25px]">
                <Link
                  href="/"
                  className={
                    currentPage === "blog"
                      ? "text-[#b40000] underline"
                      : "text-black dark:text-white hover:underline"
                  }
                >
                  blog
                </Link>
                <Link
                  href="/music"
                  className={
                    currentPage === "music"
                      ? "text-[#b40000] underline"
                      : "text-black dark:text-white hover:underline"
                  }
                >
                  music
                </Link>
                <Link
                  href="/interviews"
                  className={
                    currentPage === "interviews"
                      ? "text-[#b40000] underline"
                      : "text-black dark:text-white hover:underline"
                  }
                >
                  interviews
                </Link>
                <Link
                  href="/photos"
                  className={
                    currentPage === "photos"
                      ? "text-[#b40000] underline"
                      : "text-black dark:text-white hover:underline"
                  }
                >
                  photos
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
