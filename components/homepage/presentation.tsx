
import Link from "next/link"
import Image from "next/image"
import Swiperfirstbis from "../swiper/swiperfirstbis"
import Swiperfirst from "../swiper/swiperfirst"

// import "@/public/styles/index.css"

export default function Presentation() {
  return (
  
    
  <div className="grid grid-cols-2 gap-12">

    <div id="col1">
      
      <div  id="line1" className="flex flex-col gap-2 pl-12 justify-center h-full">
        <p className="font-bold">Lorem ipsum dolor</p>
        <p className="font-bold text-2xl">Texte présentation</p>
        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis dui et ipsum tempus sollicitudin. Etiam dapibus nec nulla sit amet viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis dui et ipsum tempus sollicitudin. Etiam dapibus nec nulla sit amet viverra. </p>
        <div className="lgBtn greyBtn max-w-[124px] my-2">en savoir +</div>
       </div>

    </div>

    <div id="col2 flex flex-col pr-12 gap-2">

      <div className="flex items-center justify-end gap-2 pb-4">
        <Image src="/images/arrow-small.jpg" width={19} height={19} alt="" className="mt-4"/>
        <p className="text-xl">Besoin</p>
        <p className="text-xl font-bold">d&apos;inspirations ?</p>
      </div>

     {/* <Swiperfirstbis /> */}
     <Swiperfirst />
     <Swiperfirst />

    </div>

  </div>
  
  
  )
}
