
import Link from "next/link"

export default function Nav() {
  return (
  
   <div className="flex justify-between items-center gap-6 uppercase font-medium">

      <Link href="/" className="rounded transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F3F4F6]">Couverture et étanchéité</Link>
      <Link href="/" className="rounded transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F3F4F6]">façade et bardage</Link>
      <Link href="/" className="rounded transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F3F4F6]">aménagement intérieur</Link>
      <Link href="/" className="rounded transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F3F4F6]">aménagement extérieur</Link>
      <Link href="/" className="rounded transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[40px] hover:rounded-md hover:bg-[#F3F4F6]">Quincaillerie et outillage</Link>

    
   </div>
  
  
  )
}
