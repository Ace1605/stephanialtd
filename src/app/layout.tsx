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
    template: "%s - Stephania Support Services",
    default:
      "Stephania Support Services - Engineering Excellence in Construction & Procurement",
  },
  description:
    "Stephania Support Services is a premier engineering, construction, and procurement company delivering comprehensive solutions across oil & gas, power, construction, and telecommunications sectors worldwide. With 15+ years of experience, we provide engineering services, midstream solutions, vessel management, and offshore/onshore solutions with uncompromising quality standards.",
  keywords: [
    "Stephania Support Services",
    "engineering excellence", 
    "construction",
    "procurement",
    "oil & gas",
    "power generation",
    "telecommunications",
    "midstream solutions",
    "vessel management",
    "offshore solutions",
    "onshore solutions",
    "industrial projects",
    "OEM partners",
    "technical expertise",
    "project delivery",
    "safety focus"
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
