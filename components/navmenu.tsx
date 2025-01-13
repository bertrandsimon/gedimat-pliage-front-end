'use client'

import * as React from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectedSubCategory } from '@/app/reducers/cart'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { menu1items, menu2items } from '@/app/datas/menuItems'
import { Menu, X } from 'lucide-react'

export function Navmenu() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const handleClick = (selectedSubCategoryLink: string) => {
    dispatch(selectedSubCategory(selectedSubCategoryLink))
    setIsOpen(false) // Close menu after clicking on mobile
  }

  return (
    <div className="w-full">
      <NavigationMenu className="w-max">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="uppercase">
              <Link href="/products?category=couverture_etancheite">
                Couverture et étanchéité
              </Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="z-90 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {menu1items.map((item) => (
                  <ListItem
                    onClick={() => handleClick(item.title)}
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="uppercase">
              <Link href="/products?category=facade_bardage">
                Façade et bardage
              </Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {menu2items.map((item) => (
                  <ListItem
                    onClick={() => handleClick(item.title)}
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} uppercase`}
              asChild
            >
              <Link href="/products">Aménagement intérieur</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} uppercase`}
              asChild
            >
              <Link href="/products">Aménagement extérieur</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} uppercase`}
              asChild
            >
              <Link href="/products">Quincaillerie et outillage</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  HTMLDivElement | HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'div'> & { title: string; href?: string }
>(({ className, title, children, href, ...props }, ref) => {
  const content = (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        className
      )}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </div>
  )

  return (
    <li>
      {href ? (
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink asChild className="cursor-pointer">
            {content}
            {/* <a ref={ref as React.Ref<HTMLAnchorElement>}>{content}</a> */}
          </NavigationMenuLink>
        </Link>
      ) : (
        content
      )}
    </li>
  )
})
ListItem.displayName = 'ListItem'
