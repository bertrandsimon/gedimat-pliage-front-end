
import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

export default function Categories() {
  return (
  
<div className="w-full px-4">

  <div className="flex justify-end items-center gap-2">
      <div className="py-4"><Link href="" className="text-sm cursor-pointer">Voir tous les produits</Link></div>
      <div><ArrowRightIcon className="size-4 " /></div>
  </div>

  <div className="columns-5 gap-10
  ">

    <div className="flex flex-col justify-center items-center gap-4 ">
      <div className="overflow-hidden rounded">
      <Image src="/images/categories/cate-1.jpg" alt="" width={279} height={174} className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"/>
      </div>
      <p className="uppercase cursor-pointer text-sm">couverture et étanchéité</p>
    </div>
   
    <div className="flex flex-col justify-center items-center gap-4">
    <div className="overflow-hidden rounded">
      <Image src="/images/categories/cate-2.jpg" alt="" width={279} height={174} className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"/>
      </div>
      <p className="uppercase cursor-pointer text-sm">façade et bardage</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-4">
    <div className="overflow-hidden rounded">
      <Image src="/images/categories/cate-3.jpg" alt="" width={279} height={174} className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"/>
      </div>
      <p className="uppercase cursor-pointer text-sm">aménagement intérieur</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-4">
    <div className="overflow-hidden rounded">
      <Image src="/images/categories/cate-4.jpg" alt="" width={279} height={174} className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"/>
      </div>
      <p className="uppercase cursor-pointer text-sm">aménagement extérieur</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-4">
    <div className="overflow-hidden rounded">
      <Image src="/images/categories/cate-5.jpg" alt="" width={279} height={174} className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"/>
      </div>
      <p className="uppercase cursor-pointer text-sm">aménagement extérieur</p>
    </div>

  </div>

</div>
  
  
  )
}
