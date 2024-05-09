import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"

import { BeakerIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

export default function Toolbar() {
  return (
  
    <div className="flex justify-between items-center bg-black w-full h-[64px] px-12">

        <div>
          <Image src="/images/logo.png" alt="" width={174} height={63} className="mt-7"/>
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

          <Link href="/">présentation</Link>

          <Link href="/">faq</Link>

          <Link href="/#">
            <ChatBubbleBottomCenterTextIcon className="size-6" />
          </Link>

          <Link href="/#">
            <UserCircleIcon className="size-6"/>
          </Link>

        </div>

    </div>
  
  
  )
}
