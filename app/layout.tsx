import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { WelcomeConfetti } from "@/components/welcome-confetti";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BUKC Redesign | Portfolio Project",
  description:
    "Unofficial Bahria University Karachi Campus redesign portfolio project built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui-style components."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WelcomeConfetti />
        {children}
      </body>
    </html>
  );
}
