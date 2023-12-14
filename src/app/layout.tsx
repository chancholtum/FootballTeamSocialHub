import type { Metadata } from "next";
import "./globals.css";

// Layout
import Navbar from "@/Layout/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Social-Media",
  description: "Born to dev , InitDev#1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
