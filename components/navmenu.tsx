"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { menu1items, menu2items } from "@/app/datas/menuItems"

export function Navmenu() {
  return (
    <div>
    <NavigationMenu>
      <NavigationMenuList className="flex justify-between items-center gap-6 bg-red w-full">
        <NavigationMenuItem>
          <Link href="/products?category=couverture_etancheite">
            <NavigationMenuTrigger className="uppercase">Couverture et étanchéité</NavigationMenuTrigger>
          </Link>
          
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {menu1items.map((menu1item) => (
                <ListItem
                  key={menu1item.title}
                  title={menu1item.title}
                  href={menu1item.href}
                >
                  {menu1item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/products?category=facade_bardage">
             <NavigationMenuTrigger className="uppercase">Façade et bardage</NavigationMenuTrigger>
          </Link>
          
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {menu2items.map((menu2item) => (
                <ListItem
                  key={menu2item.title}
                  title={menu2item.title}
                  href={menu2item.href}
                >
                  {menu2item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} uppercase`} >
              Aménagement intérieur
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} uppercase`}>
              Aménagement extérieur
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} uppercase`}>
              Quincaillerie et outillage
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
