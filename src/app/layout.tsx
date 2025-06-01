import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Mustaqeem - Portfolio",
  description: "Software Engineer specializing in full-stack development and cloud technologies",
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
        <main className="relative min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
