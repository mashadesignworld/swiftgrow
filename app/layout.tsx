import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Add this line
import Footer from "./components/Footer"; // Add this line

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Add this line */}
        {children}
        <Footer />
      </body>
    </html>
  );
}