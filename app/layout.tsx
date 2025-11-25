import type { Metadata } from "next";
import { Work_Sans, Montserrat } from "next/font/google";

import "./globals.css";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Adwiz | Avocat en Droit des Affaires à Bordeaux",
  description: "Cabinet d'avocat en droit des affaires à Bordeaux. Accompagnement des dirigeants, associés et entrepreneurs dans leurs projets juridiques et contentieux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${workSans.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
