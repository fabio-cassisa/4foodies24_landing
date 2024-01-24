import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className={`${inter.className} bg-orange-100 text-gray-950 relative h-[5000px]`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
