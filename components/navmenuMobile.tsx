'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectedSubCategory } from '@/app/reducers/cart'
import { menu1items, menu2items, menu3items } from '@/app/datas/menuItems'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export function NavmenuMobile() {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (selectedSubCategoryLink: string) => {
        dispatch(selectedSubCategory(selectedSubCategoryLink))
        setOpen(false) // Close the sheet when a link is clicked
    }

    // Single source of truth for navigation structure
    const nav = [
        {
            label: "Couverture & étanchéité",
            href: "/products?category=couverture_etancheite",
            items: menu1items
        },
        {
            label: "Façade & bardage",
            href: "/products?category=facade_bardage",
            items: menu2items
        },
        {
            label: "Menuiserie & fermeture",
            href: "/products?category=menuiserie_fermeture",
            items: menu3items
        },
        {
            label: "Quincaillerie & outillage",
            href: "#"
        },
        {
            label: "Produits en stock",
            href: "#"
        }
    ]

    return (
        <div className="md:hidden flex justify-center">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger aria-label="Open menu" className="p-2">
                    <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="bottom" className="w-full h-[80vh]">
                    <div className="mt-8">
                        <Accordion type="single" collapsible>
                            {nav.map((group) =>
                                "items" in group && group.items ? (
                                    <AccordionItem key={group.label} value={group.label}>
                                        <AccordionTrigger className="uppercase font-semibold">
                                            {group.label}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2">
                                                {group.items.map((item) => (
                                                    <li key={item.title}>
                                                        <Link
                                                            href={item.href}
                                                            className="block py-2 px-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                                                            onClick={() => handleClick(item.title)}
                                                        >
                                                            <div className="font-medium text-sm">{item.title}</div>
                                                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                                                {item.description}
                                                            </p>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                ) : (
                                    <div key={group.label} className="py-2">
                                        <Link
                                            href={group.href!}
                                            className="block py-2 px-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors uppercase font-semibold cursor-pointer"
                                            onClick={() => setOpen(false)}
                                        >
                                            {group.label}
                                        </Link>
                                    </div>
                                )
                            )}
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
