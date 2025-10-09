import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function Categories() {
  return (
    <div className="w-full px-4 bg-[#F2EDEA] bg-bottom bg-repeat-x rounded-md pb-10">
      <div className="flex justify-end items-center gap-2 hover:text-red-700">
        <div className="py-4">
          <Link href="/products" className="text-sm cursor-pointer">
            Voir tous les produits
          </Link>
        </div>
        <div>
          <ArrowRightIcon className="size-4 " />
        </div>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-5 gap-10
  "
      >
        <div className="flex flex-col justify-center items-center gap-4 group">
          <div className="overflow-hidden rounded">
            <Link href="/products?category=couverture_etancheite">
              <Image
                src="/images/categories/cate-1.jpg"
                alt=""
                width={279}
                height={174}
                className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>

          <Link href="/products?category=couverture_etancheite" className="relative text-sm transition-all duration-300 ease-out group-hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap">
            <span className="relative z-10 uppercase cursor-pointer text-sm font-medium">
              couverture et étanchéité
            </span>
            <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 group">
          <div className="overflow-hidden rounded">
            <Link href="/products?category=facade_bardage">
              <Image
                src="/images/categories/cate-2.jpg"
                alt=""
                width={279}
                height={174}
                className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>
          <Link href="/products?category=facade_bardage" className="relative text-sm transition-all duration-300 ease-out group-hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap">
            <span className="relative z-10 uppercase cursor-pointer text-sm font-medium">
              façade et bardage
            </span>
            <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 group">
          <div className="overflow-hidden rounded">
            <Link href="/products">
              <Image
                src="/images/categories/cate-3.jpg"
                alt=""
                width={279}
                height={174}
                className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>
          <Link href="/products?category=menuiserie_fermeture" className="relative text-sm transition-all duration-300 ease-out group-hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap">
            <span className="relative z-10 uppercase cursor-pointer text-sm font-medium">
              menuiserie et fermeture
            </span>
            <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 group">
          <div className="overflow-hidden rounded">
            <Link href="/products">
              <Image
                src="/images/categories/cate-4.jpg"
                alt=""
                width={279}
                height={174}
                className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>
          <Link href="/products" className="relative text-sm transition-all duration-300 ease-out group-hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap">
            <span className="relative z-10 uppercase cursor-pointer text-sm font-medium">
              quincaillerie et outillage
            </span>
            <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 group">
          <div className="overflow-hidden rounded">
            <Link href="/products">
              <Image
                src="/images/categories/cate-5.jpg"
                alt=""
                width={279}
                height={174}
                className="rounded w-full hover:drop-shadow-xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>
          <Link href="/products" className="relative text-sm transition-all duration-300 ease-out group-hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap">
            <span className="relative z-10 uppercase cursor-pointer text-sm font-medium">
              produits en stock
            </span>
            <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}
