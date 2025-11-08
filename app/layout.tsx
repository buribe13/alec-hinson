import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BlogHeader from "@/components/BlogHeader";

export const metadata: Metadata = {
  title: "alec vision.",
  description: "alec-vision.blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-white dark:bg-black">
            <div className="box-border flex gap-[10px] items-start px-6 md:px-[100px] lg:px-[500px] py-12 md:py-[100px] relative w-full">
              <div className="flex flex-1 flex-col gap-12 items-start relative w-full">
                <BlogHeader />
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
