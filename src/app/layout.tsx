import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flyo - Cloud Storage",
  description: "All your files in one secure location, accessible anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/favicon-32x32.png"
          type="image/png"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          open_sans.variable,
          raleway.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
