import clsx from "clsx";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/core/Header";
import Providers from "./providers";
import { Footer } from "@/components/core/Footer";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Stephania Limited",
    default:
      "Stephania Limited - Stephania Support Services | Construction, Energy, Oil & Gas",
  },
  description:
    "Stephania Support Services provides bespoke and off-the-peg engineering services in construction, energy, and oil & gas industries. With a decade of experience, we prioritize quality, delivery, and project satisfaction. Our mission is to deliver high-quality goods and services at a reasonable cost, ensuring fairness, transparency, and efficiency in all supply chain processes. We aim to be recognized for our innovative sourcing approach, strategic alliances, and best practices.",
  keywords: [
    "Stephania Support Services",
    "engineering services", 
    "construction",
    "energy",
    "oil & gas",
    "bespoke",
    "off-the-peg",
    "quality",
    "delivery",
    "project satisfaction",
    "supply chain",
    "fairness",
    "transparency", 
    "efficiency",
    "innovative sourcing",
    "strategic alliances",
    "best practices"
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "mobile-container")}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />

        <div id="portal" />
      </body>
    </html>
  );
}
