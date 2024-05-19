
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export default function Nav() {
  return (
  
   <div className="flex justify-between items-center gap-6 uppercase font-medium">
      
       <Link href="/" className="rounded text-sm transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F2EDEA]">Couverture et étanchéité</Link>
      <Link href="/" className="rounded text-sm transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F2EDEA]">façade et bardage</Link>
      <Link href="/" className="rounded text-sm transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F2EDEA]">aménagement intérieur</Link>
      <Link href="/" className="rounded text-sm transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F2EDEA]">aménagement extérieur</Link>
      <Link href="/" className="rounded text-sm transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F2EDEA]">Quincaillerie et outillage</Link>

    
   </div>
  
  
  )
}
