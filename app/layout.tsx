import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight:"700",
});

export const inter = Inter_Tight({
  variable: "--font-inter",
  subsets: ["greek"],
});

const metadata: Metadata = {
  title: "Landing page",
  description: "The Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className} 
      //className={`${inter} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
