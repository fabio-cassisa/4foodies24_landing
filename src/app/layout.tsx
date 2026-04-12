import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import HeaderPill from "@/components/HeaderPill";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4Foodies — Pizza, Poke, Burger & Pasta a Torino",
  description: "Cucina artigianale a Torino. Pizza, poke bowl, burger e pasta fatta in casa — ordina online da 4Foodies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.className} bg-orange-100 text-gray-950 relative`}>
        <HeaderPill />
        {children}
        <Footer />
        </body>
    </html>
  );
}
