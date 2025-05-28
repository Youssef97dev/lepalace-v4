import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Le Palace - Marrakech",
  description: "Restaurant Luxury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
