
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Add this line
import Footer from "./components/Footer"; // Add this line
import WhatsAppWrapper from "./components/WhatsAppWrapper";

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
        <WhatsAppWrapper />
        <Footer />
      </body>
    </html>
  );
}