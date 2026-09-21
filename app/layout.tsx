import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SideNavigation } from "@/components/navigation/SideNavigation";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "VINCY // Vincent Antony — AI & Data Science Student",
  description:
    "Personal portfolio of Vincent Antony (VINCY), a BSc AI & Data Science student at St Berchmans College building across AI, data science, and creative technology.",
  keywords: [
    "Vincent Antony",
    "VINCY",
    "AI & Data Science",
    "Creative Technology",
    "St Berchmans College",
    "Portfolio",
  ],
  authors: [{ name: "Vincent Antony" }],
  openGraph: {
    title: "VINCY // Vincent Antony — AI & Data Science Student",
    description: "Personal portfolio of Vincent Antony (VINCY), a BSc AI & Data Science student at St Berchmans College.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#050505] text-[#F5F5F5] antialiased selection:bg-accent selection:text-black font-sans overflow-x-hidden">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:font-mono focus:text-xs focus:tracking-wider focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>

        {/* Ambient Overlay */}
        <div className="grain-overlay pointer-events-none fixed inset-0 z-50 opacity-20" aria-hidden="true" />

        {/* Interactive Cursor */}
        <CustomCursor />

        {/* Persistent Site Navigation */}
        <SideNavigation />

        {/* Main Content Area */}
        <main id="main-content" className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

