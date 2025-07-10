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
                <div className="flex items-center justify-end gap-2 pb-4">
                    <ScrollArea className="h-72 w-96 rounded-md border">
                        <div className="p-4">
                            <h4 className="mb-4 text-sm leading-none font-medium">Produits en stock</h4>


                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />
                            <div className="text-sm">nom du produit</div>
                            <Separator className="my-2" />



                        </div>
                    </ScrollArea>
                </div>


            </div>
        </div>
    )
}
