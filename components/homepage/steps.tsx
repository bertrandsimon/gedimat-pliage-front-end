import Link from 'next/link'
import Image from 'next/image'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function Steps() {
  return (
    <>
      {/* <div className="rounded-md bg-[#F3F4F6] pb-6 w-full">
        <div className="flex justify-around items-center px-20 ">
          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/1.png" alt="" height={30} width={30} />
            <p className="font-bold">Ajoutez des produits</p>
            <p className="text-sm w-[220px]">
              Configurez simplement vos pièces sur mesure.
            </p>
          </div>

          <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/2.png" alt="" height={30} width={30} />
            <p className="font-bold">Votre liste est crée</p>
            <p className="text-sm w-[220px]">
              Contactez un de nos experts pour vérifier votre commande.
            </p>
          </div>

          <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/3.png" alt="" height={30} width={30} />
            <p className="font-bold">Paiement en magasin</p>
            <p className="text-sm w-[220px]">
              Vous pouvez payer par téléphone ou en magasin.
            </p>
          </div>

          <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/4.png" alt="" height={30} width={30} />
            <p className="font-bold">Livraison ou enlèvement</p>
            <p className="text-sm w-[220px]">
              Venez récupérer votre commande ou faites vous livrer.
            </p>
          </div>
        </div>
      </div> */}

      <ScrollArea className="w-full flex justify-center items-center rounded-md py-2  bg-[url('/images/steps/steps-bg.jpg')] bg-bottom bg-repeat-x text-center">
        <div className="flex w-max sm:w-full space-x-0 p-4 justify-center items-center ">
          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/1.png" alt="" height={30} width={30} />
            <p className="font-bold">Ajoutez des produits</p>
            <p className="text-sm w-[220px]">
              Configurez simplement vos pièces sur mesure.
            </p>
          </div>

          <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/2.png" alt="" height={30} width={30} />
            <p className="font-bold">Votre liste est créée</p>
            <p className="text-sm w-[220px]">
              Contactez un de nos experts pour vérifier votre commande.
            </p>
          </div>

          <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/3.png" alt="" height={30} width={30} />
            <p className="font-bold">Paiement en magasin</p>
            <p className="text-sm w-[220px]">
              Vous pouvez payer par téléphone ou en magasin.
            </p>
          </div>

          <Image src="/images/arrow.png" alt="fleche" height={30} width={100} />

          <div className="flex flex-col gap-3 text-center items-center -mt-4">
            <Image src="/images/4.png" alt="" height={30} width={30} />
            <p className="font-bold">Livraison ou enlèvement</p>
            <p className="text-sm w-[220px]">
              Venez récupérer votre commande ou faites vous livrer.
            </p>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  )
}
