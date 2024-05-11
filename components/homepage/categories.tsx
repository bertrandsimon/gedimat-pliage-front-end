
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

  <div className="columns-4 gap-10
  ">

    <div className="flex flex-col justify-center items-center gap-4">
      <Image src="/images/categories/cat1.jpg" alt="" width={279} height={174} className="rounded w-full hover:drop-shadow-xl hover:saturate-200 cursor-pointer"/>
      <p className="uppercase cursor-pointer text-sm">couvertines</p>
    </div>
   
    <div className="flex flex-col justify-center items-center gap-4">
      <Image src="/images/categories/cat2.jpg" alt="" width={279} height={174} className="rounded w-full hover:drop-shadow-xl hover:saturate-200 cursor-pointer"/>
      <p className="uppercase cursor-pointer text-sm">couvertines</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-4">
      <Image src="/images/categories/cat3.jpg" alt="" width={279} height={174} className="rounded w-full hover:drop-shadow-xl hover:saturate-200 cursor-pointer"/>
      <p className="uppercase cursor-pointer text-sm">couvertines</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-4">
      <Image src="/images/categories/cat4.jpg" alt="" width={279} height={174} className="rounded w-full hover:drop-shadow-xl hover:saturate-200 cursor-pointer"/>
      <p className="uppercase cursor-pointer text-sm">couvertines</p>
    </div>

  </div>

</div>
  
  
  )
}
