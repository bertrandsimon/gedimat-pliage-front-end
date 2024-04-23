import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Quicksand } from 'next/font/google'
import Head from 'next/head';
import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Pliage Aluminium et Acier",
  description: "à remplir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
    
      <body className={quicksand.className}>{children}</body>

    </html>
  );
}
