'use client'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@/hooks/use-toast'

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

  useEffect(() => {
    setIsMounted(true)
  }, [])

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

  const cartCount = useSelector(cartItemCount)
  const userConnected = useSelector((state: any) => state.user.userConnected)
  const surname = useSelector((state: any) => state.user.surname)
  const name = useSelector((state: any) => state.user.name)
  const customer_id = useSelector((state: any) => state.user.userId)
  const isProUser = useSelector((state: any) => state.user.is_pro)

  if (!isMounted) {
    return null
  }

  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 sm:h-[64px] h-full items-center ">
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
      <div className="flex justify-center items-center my-2 sm:my-0">
        {/* <div className="relative rounded-md shadow-sm sm:-mt-3 ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            className="text-sm w-[200px] h-[28px] focus:outline-none rounded-md border-0 py-1.5 pl-10 bg-[#191919] text-gray-400 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Recherche"
          />
        </div> */}
      </div>

      <div className="flex justify-center items-center gap-1 text-white sm:-mt-3 my-4 sm:my-0">
        <Link
          href="/presentation"
          className="text-sm transition duration-300 ease-in-out hover:bg-[#B51B1B] rounded-md hover:rounded-md p-2"
        >
          Présentation
        </Link>
        <div className="text-white">|</div>
        <Link
          href="/inspirations"
          className="text-sm transition duration-300 ease-in-out hover:bg-[#B51B1B] rounded-md hover:rounded-md p-2 "
        >
          Inspirations
        </Link>
        <div className="text-white">|</div>
        <Link
          href="/faq"
          className="text-sm transition duration-300 ease-in-out hover:bg-[#B51B1B]  hover:rounded-md p-2"
        >
          Faq
        </Link>

        <Link
          href="/contact"
          className="hover:text-[#B51B1B] transition duration-300 ease-in-out p-2"
        >
          <ChatBubbleBottomCenterTextIcon className="size-6" />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-[#B51B1B]">
            <UserCircleIcon className="size-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-4">
            {!userConnected && (
              <DropdownMenuLabel className="text-center uppercase text-xs">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Mon compte</Button>
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
                <Link href={`/dashboard/${customer_id}`}>
                  <DropdownMenuItem className="flex justify-center text-xs uppercase cursor-pointer">
                    Mes listes
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="flex justify-center text-xs uppercase cursor-pointer">
                  Mes infos
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleDisconnect}
                  className="flex justify-center text-xs uppercase cursor-pointer"
                >
                  Déconnection
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
            <div className="t-2 absolute left-5">
              <p className="flex h-1 w-1 items-center justify-center rounded-full bg-[#B51B1B] p-2 text-xs text-white">
                {cartCount}
              </p>
            </div>
            <Link
              href="/cart"
              className="hover:text-[#B51B1B] transition duration-300 ease-in-out"
            >
              <ShoppingCartIcon className="size-6" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
