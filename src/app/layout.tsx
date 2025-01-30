import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aryanswaroop.vercel.app"),
  title: {
    default: "Aryan Swaroop",
    template: "%s | Aryan Swaroop",
  },
  description: "Software Engineer",
  openGraph: {
    title: "Aryan Swaroop",
    description: "Software Engineer",
    url: "https://aryanswaroop.vercel.app",
    siteName: "Aryan Swaroop",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Aryan Swaroop",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#202020] text-white ${inter.className}`}>
        <main className="bg-black p-4 m-2 rounded-lg flex flex-col justify-start min-h-screen">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
