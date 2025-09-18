'use client'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@/hooks/use-toast'
import { startTransition } from 'react'

import {
  loggedStatus,
  loggedName,
  loggedSurname,
  userId,
  isPro,
} from '@/app/reducers/user'
import { cartItemCount } from '@/app/reducers/cart'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Login } from './login'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

export default function Toolbar() {
  const [isMounted, setIsMounted] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()
  const { toast } = useToast()

  const cartCount = useSelector(cartItemCount)
  const userConnected = useSelector((state: any) => state.user.userConnected)
  const surname = useSelector((state: any) => state.user.surname)
  const name = useSelector((state: any) => state.user.name)
  const customer_id = useSelector((state: any) => state.user.userId)
  const isProUser = useSelector((state: any) => state.user.is_pro)

  useEffect(() => {
    setIsMounted(true)

    // Prefetch dashboard pages for faster navigation
    if (customer_id) {
      router.prefetch(`/dashboard/${customer_id}?section=lists`)
      router.prefetch(`/dashboard/${customer_id}?section=userAccount`)
    }
  }, [customer_id, router])

  const handleDisconnect = () => {
    dispatch(loggedStatus(false))
    dispatch(loggedName(''))
    dispatch(loggedSurname(''))
    dispatch(userId(''))
    dispatch(isPro(false))
    router.push('/')
    toast({
      title: 'Déconnecté',
      description: 'Vous êtes bien deconnecté du site',
    })
  }

  const handleOrdersClick = () => {
    // Use startTransition for better UX - shows loading state
    startTransition(() => {
      router.push(`/dashboard/${customer_id}?section=lists`)
    })
  }

  const handleAccountClick = () => {
    startTransition(() => {
      router.push(`/dashboard/${customer_id}?section=userAccount`)
    })
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 sm:h-[64px] h-full items-center ">
      <div className="flex sm:justify-start sm:items-start justify-center mt-4 sm:mt-0">
        <Link href="/">
          <Image
            src="/images/logo-pliage-aluminium.png"
            alt=""
            width={178}
            height={63}
            className="mt-3"
          />
        </Link>
      </div>


      <div className="flex justify-center items-center gap-1 text-white sm:-mt-3 my-4 sm:my-0">
        <Link
          href="/presentation"
          className="relative group text-sm transition-all duration-300 ease-out hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap"
        >
          <span className="relative z-10">Présentation</span>
          <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
          <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
        </Link>
        <div className="text-white">|</div>
        <Link
          href="/inspirations"
          className="relative group text-sm transition-all duration-300 ease-out hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap"
        >
          <span className="relative z-10">Inspirations</span>
          <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
          <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
        </Link>
        <div className="text-white">|</div>
        <Link
          href="/faq"
          className="relative group text-sm transition-all duration-300 ease-out hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap"
        >
          <span className="relative z-10">Faq</span>
          <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
          <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
        </Link>

        <Link
          href="/contact"
          className="relative group hover:text-[#B51B1B] transition-all duration-300 ease-out p-2 rounded-md"
        >
          <ChatBubbleBottomCenterTextIcon className="size-6 relative z-10 group-hover:scale-110 transition-transform duration-300 ease-out" />
          <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300 ease-out"></div>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="relative group hover:text-[#B51B1B] transition-all duration-300 ease-out p-2 rounded-md">
            <UserCircleIcon className="size-6 relative z-10 group-hover:scale-110 transition-transform duration-300 ease-out" />
            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300 ease-out"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-4">
            {!userConnected && (
              <DropdownMenuLabel className="text-center uppercase text-xs">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Mon espace client</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-lg">
                    <AlertDialogHeader>
                      <AlertDialogDescription>
                        <Login />
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuLabel>
            )}
            <DropdownMenuSeparator />
            {userConnected && (
              <div>
                <DropdownMenuItem
                  onClick={handleOrdersClick}
                  className="flex justify-center text-xs uppercase cursor-pointer"
                >
                  Mes commandes
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleAccountClick}
                  className="flex justify-center text-xs uppercase cursor-pointer"
                >
                  Mes infos
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleDisconnect}
                  className="flex justify-center text-xs uppercase cursor-pointer"
                >
                  Déconnexion
                </DropdownMenuItem>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* {userConnected && <div className="text-white">|</div>} */}
        {userConnected && (
          <span className="text-xs capitalize cursor-pointer pl-4 pr-2">
            {name} {surname}
          </span>
        )}
        {userConnected && isProUser && (
          <div className="rounded-md bg-red-700 py-1 px-2 text-xs cursor-pointer">
            pro
          </div>
        )}
        {userConnected && (
          <div className="relative py-2">
            <div className="absolute top-6 left-5">
              <p className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B51B1B] text-xs text-white select-none">
                {cartCount}
              </p>
            </div>
            <Link
              href="/cart"
              className="relative group transition-all duration-300 ease-out p-2 rounded-md"
            >
              <ShoppingCartIcon className="size-6 hover:text-[#B51B1B] relative z-10 group-hover:scale-110 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
