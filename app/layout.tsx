import type { Metadata } from "next";
import { Quicksand } from 'next/font/google'
import Toolbar from "./components/toolbar";

import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Pliage Aluminium et Acier",
  description: "à remplir",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) 
{
  return (
    <html lang="fr">

      

      <body className={quicksand.className}>
       
        <div className="container mx-auto px-4"><Toolbar /></div>
        
        <div className="container mx-auto px-4">{children}</div>
        
        
        </body>

    </html>
  );
}
