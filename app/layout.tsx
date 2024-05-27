import type { Metadata } from "next";
import { Quicksand } from 'next/font/google'
import Toolbar from "../components/toolbar";
import Nav from "@/components/nav";
 
import Footer from "@/components/footer";
import { Navmenu } from "@/components/navmenu";
import "./globals.css";
import connectDB from "./db";


connectDB();

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

      

      <body className={`${quicksand.className} max-w-screen mx-auto`}>
       
        <div className="bg-black">
          <div className="container mx-auto px-14">
            <Toolbar />
          </div>
        </div>
        {/* <div className="container mx-auto py-6 px-14"><Nav /></div> */}
        <div className="container mx-auto py-6 px-14"><Navmenu /></div>
       

        <div className="container mx-auto px-4">{children}</div>
        
        <div className="bg-black">
          <div className="container mx-auto px-14">
            <Footer />
          </div>
        </div>
        </body>

    </html>
  );
}
