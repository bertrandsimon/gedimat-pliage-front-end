
import Link from "next/link"
import Image from "next/image"
// import gedimat from "@/public/images/banner/gedimat.png"
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
  
   <div className="w-full grid grid-cols-2 bg-[#F2EDEA] rounded-md h-[600px] gap-10">

   <section id="col1" className="pl-12 py-12">

    <div className="flex flex-col h-full justify-around">

      <div  id="line1" className="flex flex-col gap-2">

         <p className="font-bold">Spécialiste du pliage</p>
         <p className="font-bold text-3xl">Aluminium et acier</p>
         <p className="max-w-[420px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis dui et ipsum tempus sollicitudin. Etiam dapibus nec nulla sit amet viverra. </p>
         <div className="lgBtn redBtn max-w-[124px] my-2">en savoir +</div>
         {/* <Button variant="outline">Button</Button> */}
      
      </div>

       <div id="line2" className="flex gap-8 justify-start items-center">

          <div className="rounded-md flex flex-col justify-center items-center text-center gap-4 dashed p-4">
            <Image src="/images/banner/gedimat.png" height={58} width={121} alt=""/>
            <span className="text-sm">Toute l’expérience du groupe <br />Gedimat à votre service</span>
          </div>

          <div className="rounded-md flex flex-col justify-center items-center text-center gap-4 dashed p-4">
            <Image src="/images/banner/delivery.png" height={58} width={71} alt=""/>
            <span className="text-sm">Toute l’expérience du groupe <br />Gedimat à votre service</span>
          </div>


      </div>

    </div>

   </section>


   <section id="col2" className="pr-12 py-12 h-full bg-[url('/images/banner/slice.png')] bg-no-repeat bg-right">

      <Image src="/images/banner/house.png" height={497} width={592}  alt=""/>

   </section> 

   </div>
  
  
  )
}
