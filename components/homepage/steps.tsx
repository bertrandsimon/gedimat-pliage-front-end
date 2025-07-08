import Link from 'next/link'
import Image from 'next/image'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
export default function Steps() {
  return (
    <>
      <TooltipProvider delayDuration={0}>
        <ScrollArea className="w-full flex justify-center items-center rounded-md py-2  bg-[url('/images/steps/steps-bg.jpg')] bg-bottom bg-repeat-x text-center">
          <div className="flex w-max sm:w-full space-x-0 p-4 justify-center items-center ">
            {/* Step 1 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col gap-3 text-justify items-center -mt-4 group relative cursor-pointer">
                  <Image src="/images/1.png" alt="" height={30} width={30} />
                  <p className="font-bold">Vous configurez</p>
                  <p className="text-sm w-[220px]">
                    Personnalisez vos pièces...
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" align="start" className="w-64 p-4 mb-2 text-justify">
                À partir de nos formes modélisées, vous personnalisez vos pièces en choisissant la matière et le coloris adaptés à votre projet.
              </TooltipContent>
            </Tooltip>

            <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

            {/* Step 2 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col gap-3 text-justify items-center -mt-4 group relative cursor-pointer">
                  <Image src="/images/2.png" alt="" height={30} width={30} />
                  <p className="font-bold">Vous commandez</p>
                  <p className="text-sm w-[220px]">
                    Passez votre commande...
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" align="center" className="w-64 p-4 mb-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </TooltipContent>
            </Tooltip>

            <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

            {/* Step 3 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col gap-3 text-justify items-center -mt-4 group relative cursor-pointer">
                  <Image src="/images/3.png" alt="" height={30} width={30} />
                  <p className="font-bold">Nous vérifions</p>
                  <ul className="text-sm w-[220px]">
                    <li>
                      Prix dégressif...
                    </li>
                    <li>
                      Remise automatique...
                    </li>
                  </ul>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" align="center" className="w-[220px] p-4 mb-2 text-justify">
                <div className="mb-2">Plus vous commandez de pièces identiques, plus le prix unitaire diminue.</div>
                <div>Vous avez plusieurs modèles différents, mais un volume important ? Bonne nouvelle : une remise automatique peut s'appliquer à la fin de votre commande !</div>
              </TooltipContent>
            </Tooltip>

            <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

            {/* Step 4 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col gap-3 text-justify items-center -mt-4 group relative cursor-pointer">
                  <Image src="/images/4.png" alt="" height={30} width={30} />
                  <p className="font-bold">Nous vous confirmons</p>
                  <p className="text-sm w-[220px]">
                    Confirmation rapide...
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" align="center" className="w-64 p-4 mb-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </TooltipContent>
            </Tooltip>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TooltipProvider>
    </>
  )
}
