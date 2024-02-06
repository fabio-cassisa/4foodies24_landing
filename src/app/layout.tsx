import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import HeaderPill from "@/components/HeaderPill";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4Foodies",
  description: "4Foodies - that's it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-orange-100 text-gray-950 relative`}>
        <HeaderPill />
        {children}
        <Footer />
        </body>
    </html>
  );
}
