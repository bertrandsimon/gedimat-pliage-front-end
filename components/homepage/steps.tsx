import Link from 'next/link'
import Image from 'next/image'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function Steps() {
  return (
    <>
     

      <ScrollArea className="w-full flex justify-center items-center rounded-md py-2  bg-[url('/images/steps/steps-bg.jpg')] bg-bottom bg-repeat-x text-center">
        <div className="flex w-max sm:w-full space-x-0 p-4 justify-center items-center ">
          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/1.png" alt="" height={30} width={30} />
            <p className="font-bold">Vous configurez</p>
            <p className="text-sm w-[220px]">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/2.png" alt="" height={30} width={30} />
            <p className="font-bold">Vous commandez</p>
            <p className="text-sm w-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/3.png" alt="" height={30} width={30} />
            <p className="font-bold">Nous vérifions</p>
            <p className="text-sm w-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/4.png" alt="" height={30} width={30} />
            <p className="font-bold">Nous vous confirmons</p>
            <p className="text-sm w-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
              <div>
              
            </div>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  )
}
