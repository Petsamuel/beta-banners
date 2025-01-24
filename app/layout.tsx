import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma, Montserrat } from "next/font/google";
import "./globals.css";
import { bespokeFont } from "./components/styling/font-classes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Better Banners",
  description: "Generate Banners for your social media",
  openGraph: {
    images: [{
      url: "https://betterbanners.vercel.app/api/og",
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${michroma.variable} ${geistMono.variable} ${montserrat.variable} ${bespokeFont} antialiaseds`}

        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
