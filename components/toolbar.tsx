'use client'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { addFriendToStore } from "@/app/reducers/friends"
import { loggedStatus, loggedName, loggedSurname, userId } from "@/app/reducers/user"
import { cartItemCount } from "@/app/reducers/cart"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { UserCircleIcon, ChatBubbleBottomCenterTextIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { Login } from "./login"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function Toolbar() {
  const [isMounted, setIsMounted] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDisconnect = () => { 
    dispatch(loggedStatus(false))
    dispatch(loggedName(""))
    dispatch(loggedSurname(""))
    dispatch(userId(""))
    router.push('/');
  }

  const friends = useSelector((state: any) => state.friends.value)
  const cartCount = useSelector(cartItemCount)
  const userConnected = useSelector((state: any) => state.user.userConnected)
  const surname = useSelector((state: any) => state.user.surname)
  const name = useSelector((state: any) => state.user.name)

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-14 bg-black">
      <div className="flex justify-between items-center h-[64px] bg-black">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="" width={174} height={63} className="mt-7"/>
          </Link>
        </div>

        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            className="w-[300px] h-[30px] rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Recherche"
          />
        </div>

        <div className="flex justify-center items-center gap-6 text-white uppercase">
          <Link href="" className="text-sm transition duration-300 ease-in-out hover:bg-[#B51B1B] hover:rounded-md p-2">présentation</Link>
          <Link href="/inspirations" className="text-sm transition duration-300 ease-in-out hover:bg-[#B51B1B] hover:rounded-md p-2">inspirations</Link>
          <Link href="/faq" className="text-sm transition duration-300 ease-in-out hover:bg-[#B51B1B] hover:rounded-md p-2">faq</Link>
          <Link href="/contact" className="hover:text-[#B51B1B] transition duration-300 ease-in-out">
            <ChatBubbleBottomCenterTextIcon className="size-6" />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger><UserCircleIcon className="size-6"/></DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4">
              {!userConnected &&
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
              }
              <DropdownMenuSeparator />
              {userConnected &&
                <div>
                  <DropdownMenuItem className="flex justify-center text-xs uppercase cursor-pointer">Mes listes</DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center text-xs uppercase cursor-pointer">Mes infos</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleDisconnect} className="flex justify-center text-xs uppercase cursor-pointer">Déconnection</DropdownMenuItem>
                </div>
              }
            </DropdownMenuContent>
          </DropdownMenu>

          {userConnected &&
            <div className="relative py-2">
              <div className="t-2 absolute left-5">
                <p className="flex h-1 w-1 items-center justify-center rounded-full bg-[#B51B1B] p-2 text-xs text-white">{cartCount}</p>
              </div>
              <Link href="/cart" className="hover:text-[#B51B1B] transition duration-300 ease-in-out">
                <ShoppingCartIcon className="size-6" />
              </Link>
            </div>
          }

          {userConnected && <span className='text-xs capitalize'>{name} {surname}</span>}
        </div>
      </div>
    </div>
  );
}
