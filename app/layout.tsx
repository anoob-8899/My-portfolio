import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vincent Antony — AI & Data Science",
  description:
    "Personal portfolio of Vincent Antony, a BSc AI & Data Science student building across AI, data science, software development, and digital experiences.",
  keywords: [
    "Vincent Antony",
    "AI",
    "Data Science",
    "Machine Learning",
    "Computer Vision",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Vincent Antony" }],
  openGraph: {
    title: "Vincent Antony — AI & Data Science",
    description:
      "BSc AI & Data Science student building across AI, data, software, and creative technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Antony — AI & Data Science",
    description: "BSc AI & Data Science student exploring artificial intelligence, data, and web technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased selection:bg-accent selection:text-white">
        {/* Subtle Noise Texture Overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* Global Minimal Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
