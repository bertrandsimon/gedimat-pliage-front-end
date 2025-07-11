import Link from 'next/link'
import Image from 'next/image'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function StockText() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div id="col1">
                <div
                    id="line1"
                    className="flex flex-col gap-2 pl-12 justify-center h-full"
                >
                    <p className="font-medium">Une large gamme de</p>
                    <p className="font-bold text-2xl">Produits en stock </p>
                    <p className="text-md">Nous disposons également d’une sélection de produits standards prêts à l’emploi, disponibles immédiatement dans nos agences. <br /><br /> <Link href={"/stock"}>Cliquez sur “Produits en stock”</Link> pour découvrir toute notre gamme disponible immédiatement.
                    </p>

                </div>
            </div>

            <div id="col2">
                <div className="flex items-center h-full">
                    <div className="flex items-center justify-center w-full h-full mt-8">

                        <div className="flex flex-wrap gap-2">
                            <span className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
                                Accessoires de bardage
                            </span>
                            <span className="text-sm px-3 py-1 rounded-full bg-blue-100 hover:bg-blue-200 cursor-pointer">
                                Plis pour bac acier
                            </span>
                            <span className="text-sm px-3 py-1 rounded-full bg-green-100 hover:bg-green-200 cursor-pointer">
                                Grilles anti-rongeurs
                            </span>
                            <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 hover:bg-yellow-200 cursor-pointer">
                                Cornières
                            </span>
                            <span className="text-sm px-3 py-1 rounded-full bg-purple-100 hover:bg-purple-200 cursor-pointer">
                                Couvertines
                            </span>
                            <span className="text-sm px-3 py-1 rounded-full bg-pink-100 hover:bg-pink-200 cursor-pointer">
                                Produits de finition pour couverture
                            </span>
                            <span className="text-sm px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
                                Et bien d’autres éléments pré-pliés pour vos chantiers
                            </span>
                        </div>
                    </div>

                    {/* <ScrollArea className="h-[180px] w-96 rounded-md border">
                        <div className="p-4">

                            <div className="text-sm cursor-pointer">Accessoires de bardage</div>
                            <Separator className="my-2" />
                            <div className="text-sm cursor-pointer">Plis pour bac acier</div>
                            <Separator className="my-2" />
                            <div className="text-sm cursor-pointer">Grilles anti-rongeurs</div>
                            <Separator className="my-2" />
                            <div className="text-sm cursor-pointer">Cornières</div>
                            <Separator className="my-2" />
                            <div className="text-sm cursor-pointer">Couvertines</div>
                            <Separator className="my-2" />
                            <div className="text-sm cursor-pointer">Produits de finition pour couverture</div>
                            <Separator className="my-2" />
                            <div className="text-sm cursor-pointer">Et bien d’autres éléments pré-pliés pour vos chantiers</div>
                            <Separator className="my-2" />

                        </div>
                    </ScrollArea> */}
                </div>


            </div>
        </div>
    )
}
