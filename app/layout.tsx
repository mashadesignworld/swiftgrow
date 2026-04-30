
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Add this line
import Footer from "./components/Footer"; // Add this line
import WhatsAppWrapper from "./components/WhatsAppWrapper";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SwiftGrow Kenya | Premium Organic Fertilizer",
  description: "Boost your harvest with Boomgro Organic fertilizer. High-quality, sustainable solutions for Kenyan farmers.",
  
  // PASTE YOUR CODE HERE
  verification: {
    google: "U_8bZb0cf-06DeptpAItWXF9GebR4riltwFZeVzIA6Q",
  },
  
  // This helps with social media sharing too
  openGraph: {
    title: "SwiftGrow Kenya",
    description: "Premium Organic Fertilizer for High Yields",
    url: "https://www.swiftgrowkenya.co.ke",
    siteName: "SwiftGrow Kenya",
    images: [
      {
        url: "/fertilizer.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_KE",
    type: "website",
  },
};

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