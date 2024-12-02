import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import SideNavbar from "../components/SideNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const smallcaps = localFont({
  src: "./fonts/YsabeauSCVF.ttf",
  variable: "--font-ysabeau",
  weight: "100 900",
});

const playfairRegular = localFont({
  src: "./fonts/Playfair/Playfair.ttf",
  variable: "--font-playfair-regular",
  display: "swap",
});

const playfairItalic = localFont({
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${smallcaps.variable} ${playfairRegular.variable} ${playfairItalic.variable}`}
      >
        <div className="flex custom-gradient h-screen w-screen">
          <div className="block vsm:hidden h-screen">
            <SideNavbar />
          </div>
          <main className="flex flex-col grow">
            <div className="hidden vsm:block">
              <Navbar />
            </div>
            {children}
          </main>
          <div className="hidden 2xl:block w-1/4 h-screen">
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
