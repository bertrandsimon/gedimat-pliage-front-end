'use client'
import { useDispatch, useSelector } from 'react-redux';
import { addFriendToStore } from "@/app/reducers/friends"


import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"

import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
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
  const dispatch = useDispatch();

  const addFriend = (newFriend:any) => {
    dispatch(addFriendToStore(newFriend));
  };

  

 const friends = useSelector((state:any) => state.friends.value)

  return (
  
    <div className="flex justify-between items-center h-[64px]">

        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="" width={174} height={63} className="mt-7"/>
          </Link>
          <button onClick={() => addFriend('Sheldon')}>ADD SHELDON</button>
          <div>from STORE <h1>Friends : {friends.join(' - ')}</h1></div>
        </div>

        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
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
              <DropdownMenuLabel className="text-center uppercase text-xs ">

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
                  {/* <AlertDialogAction>Continuer</AlertDialogAction> */}
                </AlertDialogFooter>
            </AlertDialogContent>
           </AlertDialog>

              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex justify-center text-xs uppercase cursor-pointer">Mes listes</DropdownMenuItem>
              <DropdownMenuItem className="flex justify-center text-xs uppercase cursor-pointer">Mes infos</DropdownMenuItem>
             
            </DropdownMenuContent>

          </DropdownMenu>

          

        </div>

    </div>
  
  
  )
}
