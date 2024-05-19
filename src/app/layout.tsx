import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Announcement } from "@/components/Announcement";


export const metadata: Metadata = {
  title: "Loom.",
  metadataBase: new URL('https://avnce.org/'),
  description: "The community where science and technology intersect to make wonders.",
  openGraph: {
    images: "/images/loom_tch_scn.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
