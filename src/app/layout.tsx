import type { Metadata } from "next";
import "./globals.css";
import 'normalize.css';
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "avnce",
  description: "Creating a better world through software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <div className="site-container">
            <Navbar />
            <div className="content-container">
              {children}
            </div>
            <Footer />
          </div>
      </body>
    </html>
  );
}
