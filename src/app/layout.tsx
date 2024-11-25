import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import "./globals.css";

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const smallcaps = localFont({
  src: "./fonts/YsabeauSCVF.ttf",
  variable: "--font-ysabeau",
  weight: "100 900",
});

export const aventine = localFont({
  src: "./fonts/Aventine.otf",
  variable: "--font-aventine",
});

export const playfairRegular = localFont({
  src: "./fonts/Playfair/Playfair.ttf",
  variable: "--font-playfair-regular",
  display: "swap",
});

export const playfairItalic = localFont({
  src: "./fonts/Playfair/PlayfairItalic.ttf",
  variable: "--font-playfair-italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "slowershutter",
  description: "Instagram @slowershutter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${smallcaps.variable} ${aventine.variable} ${playfairRegular.variable} ${playfairItalic.variable}`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
