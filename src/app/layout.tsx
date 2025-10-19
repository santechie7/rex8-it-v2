import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/ui/smoothScroll/SmoothScroll";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REX EIGHT IT",
  description: "Data Analytics & Application Development",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="in-en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <SmoothScroll />
        <Navbar
          brandName="My Company"
          menuItems={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Contact", path: "/contact" },
          ]}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
