import Image from 'next/image'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'


import partner1 from '@/public/images/partners/partner1.jpg'
import partner2 from '@/public/images/partners/partner2.jpg'
import partner3 from '@/public/images/partners/partner3.jpg'
import partner4 from '@/public/images/partners/partner4.jpg'
import partner5 from '@/public/images/partners/partner5.jpg'

export default function Partners() {
  return (
    <>


      <ScrollArea className="w-full flex justify-center items-center rounded-md border p-4 py-2 mb-20">
        <div className="flex w-full space-x-10 p-4 justify-around items-center">
          <div className="grayscale hover:grayscale-0 cursor-pointer flex  ">
            <Image src={partner1} alt="" width={85} height={94} />
          </div>

          <div className="grayscale hover:grayscale-0 cursor-pointer flex">
            <Image src={partner3} alt="" width={173} height={40} />
          </div>
          <div className="grayscale hover:grayscale-0 cursor-pointer flex -mt-4">
            <Image src={partner4} alt="" width={176} height={41} />
          </div>
          <div className="grayscale hover:grayscale-0 cursor-pointer flex -mt-2">
            <Image src={partner5} alt="" width={205} height={32} />
          </div>

        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  )
}
