
import ClientProvider from "./clientProvider";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Quicksand } from 'next/font/google'
import Toolbar from "../components/toolbar";
import Nav from "@/components/nav";
 
import Footer from "@/components/footer";
import { Navmenu } from "@/components/navmenu";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Toaster } from "@/components/ui/toaster";

// GLTF
import dynamic from 'next/dynamic';
// Dynamically import the SimpleGltfModel to avoid SSR issues
const SimpleGltfModel = dynamic(() => import("@/components/gltf/SimpleGltfModel"), {
  ssr: false,
})

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
    <ClientProvider>
    <html lang="fr">

    

      <body className={`${quicksand.className} max-w-screen mx-auto`}>
       
      
      <div className="w-full bg-black">
        <div className="container"><Toolbar /></div>
      </div> 
          
       
     
        
        <div className="container mx-auto py-6 px-14"><Navmenu /></div>
       
        {/* <div style={{ height: '100vh', width: '100vw' }}>
          <SimpleGltfModel />
        </div> */}
       
        <Suspense>
          <div className="container mx-auto px-4">
            {children}
            <SpeedInsights/>
            </div>
        </Suspense>
        
        <div className="bg-black">
          <div className="container mx-auto px-14">
            <Footer />
          </div>
        </div>
        <Toaster />
        </body>

    </html>
    </ClientProvider>
    
  );
}
