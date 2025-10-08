import Link from 'next/link'
import Image from 'next/image'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { PuzzlePieceIcon, Squares2X2Icon, ShieldCheckIcon, CubeIcon, RectangleStackIcon, WrenchScrewdriverIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

export default function StockText() {
    const tags = [
        { name: "Accessoires de bardage", href: "/products?category=couverture_etancheite" },
        { name: "Plis pour bac acier", href: "/products?category=couverture_etancheite" },
        { name: "Grilles anti-rongeurs", href: "/products?category=couverture_etancheite" },
        { name: "Cornières", href: "/products?category=facade_bardage&subcategory=cornieres" },
        { name: "Couvertines", href: "/products?category=couverture_etancheite&subcategory=couvertines" },
        { name: "Produits de finition pour couverture", href: "/products?category=couverture_etancheite" },
        { name: "Et bien d'autres éléments pré-pliés pour vos chantiers", href: "/products?category=couverture_etancheite" }
    ];
    const tagIcons = [
        <PuzzlePieceIcon className="w-4 h-4 mr-1 inline" key="icon1" />,
        <Squares2X2Icon className="w-4 h-4 mr-1 inline" key="icon2" />,
        <ShieldCheckIcon className="w-4 h-4 mr-1 inline" key="icon3" />,
        <CubeIcon className="w-4 h-4 mr-1 inline" key="icon4" />,
        <RectangleStackIcon className="w-4 h-4 mr-1 inline" key="icon5" />,
        <WrenchScrewdriverIcon className="w-4 h-4 mr-1 inline" key="icon6" />,
        <EllipsisHorizontalIcon className="w-4 h-4 mr-1 inline" key="icon7" />,
    ];
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
                            {tags.map((tag, idx) => (
                                <Link
                                    key={tag.name}
                                    href={tag.href}
                                    className="text-sm px-3 py-1 rounded-full cursor-pointer flex items-center hover:opacity-80 transition-opacity duration-200"
                                    style={{ backgroundColor: "#B51B1B", color: "#fff" }}
                                >
                                    {tagIcons[idx]}
                                    {tag.name}
                                </Link>
                            ))}
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
