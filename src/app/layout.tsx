"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, toggleShowSidebar] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#1a1a1a]">
        <TopBar toggleShowSidebar={toggleShowSidebar} />
        <Navbar
          toggleShowSidebar={toggleShowSidebar}
          showSiderbar={showSidebar}
        />
        <main className="sm:ml-72 mt-10 sm:mt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
