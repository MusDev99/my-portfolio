import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description: "Professional portfolio showcasing software engineering projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        <main className="min-h-screen relative">
          {children}
        </main>
      </body>
    </html>
  );
}
