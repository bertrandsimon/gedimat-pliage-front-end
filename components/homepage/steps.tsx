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
                    À partir de nos formes modélisées, vous personnalisez vos pièces.
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
                    Plus vous commandez de pièces identiques, plus le <strong>prix unitaire diminue</strong> ...
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" align="center" className="w-64 p-8 mb-2 text-justify">
                <ul className='list-disc space-y-2'>
                  <li>Plus vous commandez de pièces identiques, plus le prix unitaire diminue.</li>
                  <li>Vous avez plusieurs modèles différents, mais un volume important ? Bonne nouvelle : une <strong>remise automatique</strong> peut s’appliquer à la fin de votre commande ! </li>
                </ul>
              </TooltipContent>
            </Tooltip>

            <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

            {/* Step 3 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col gap-3 text-justify items-center -mt-4 group relative cursor-pointer">
                  <Image src="/images/3.png" alt="" height={30} width={30} />
                  <p className="font-bold">Nous vérifions</p>
                  <p className="text-sm w-[220px]">
                    Notre équipe vérifie avec soin la faisabilité technique...

                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" align="center" className="w-[220px] p-4 mb-2 text-justify">
                <div className="mb-2">Notre équipe vérifie avec soin la faisabilité technique de votre demande. <br /><br />
                  Si vous ne disposez pas d’un compte terme, un lien sécurisé vous sera envoyé pour procéder au règlement avant la mise en production.</div>

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
                    Nous vous communiquons délai de fabrication et modalités de retrait.
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" align="center" className="w-64 p-4 mb-2 text-justify">
                <div className="mb-2">Nous vous communiquons rapidement le délai de fabrication et les modalités de retrait ou de livraison de votre commande.</div>
              </TooltipContent>
            </Tooltip>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TooltipProvider>
    </>
  )
}
