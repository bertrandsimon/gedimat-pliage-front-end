'use client'

import * as React from 'react'
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
    <div>
      {/* Mobile Navigation Toggle */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <span className="text-md uppercase">Menu</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="focus:outline-none"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md rounded-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                href="/products?category=couverture_etancheite"
                onClick={() => handleClick('Couverture et étanchéité')}
                className="text-gray-700 hover:font-semibold uppercase text-sm"
              >
                Couverture et étanchéité
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=facade_bardage"
                onClick={() => handleClick('Façade et bardage')}
                className="text-gray-700 hover:font-semibold uppercase text-sm"
              >
                Façade et bardage
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={() => handleClick('Aménagement intérieur')}
                className="text-gray-700 hover:font-semibold uppercase text-sm"
              >
                Aménagement intérieur
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={() => handleClick('Aménagement extérieur')}
                className="text-gray-700 hover:font-semibold uppercase text-sm"
              >
                Aménagement extérieur
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={() => handleClick('Quincaillerie et outillage')}
                className="text-gray-700 hover:font-semibold uppercase text-sm"
              >
                Quincaillerie et outillage
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop NavigationMenu */}
      {/* hidden */}
      <div className="md:block hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/products?category=couverture_etancheite">
                <NavigationMenuTrigger className="uppercase">
                  Couverture et étanchéité
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
              <Link href="/products?category=facade_bardage">
                <NavigationMenuTrigger className="uppercase">
                  Façade et bardage
                </NavigationMenuTrigger>
              </Link>
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
              <Link href="/products" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} uppercase`}
                >
                  Aménagement intérieur
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/products" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} uppercase`}
                >
                  Aménagement extérieur
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/products" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} uppercase`}
                >
                  Quincaillerie et outillage
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
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
          <NavigationMenuLink asChild>
            <a ref={ref as React.Ref<HTMLAnchorElement>}>{content}</a>
          </NavigationMenuLink>
        </Link>
      ) : (
        content
      )}
    </li>
  )
})
ListItem.displayName = 'ListItem'
