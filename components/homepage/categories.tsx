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

          <Link href="/products?category=couverture_etancheite" className="relative inline-flex items-center overflow-hidden rounded-md border-2 border-[#B51B1B] px-6 py-2 text-sm font-medium text-[#B51B1B] bg-white group-hover:bg-gray-50 group-hover:text-white">
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#B51B1B] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-6 w-6 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase text-xs tracking-tight">couverture & étanchéité</span>
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
          <Link href="/products?category=facade_bardage" className="relative inline-flex items-center overflow-hidden rounded-md border-2 border-[#B51B1B] px-6 py-2 text-sm font-medium text-[#B51B1B] bg-white group-hover:bg-gray-50 group-hover:text-white">
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#B51B1B] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-6 w-6 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase text-xs tracking-tight">façade & bardage</span>
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
          <Link href="/products?category=menuiserie_fermeture" className="relative inline-flex items-center overflow-hidden rounded-md border-2 border-[#B51B1B] px-6 py-2 text-sm font-medium text-[#B51B1B] bg-white group-hover:bg-gray-50 group-hover:text-white">
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#B51B1B] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-6 w-6 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase text-xs tracking-tight">menuiserie & fermeture</span>
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
          <Link href="/products" className="relative inline-flex items-center overflow-hidden rounded-md border-2 border-[#B51B1B] px-6 py-2 text-sm font-medium text-[#B51B1B] bg-white group-hover:bg-gray-50 group-hover:text-white">
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#B51B1B] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-6 w-6 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase text-xs tracking-tight">quincaillerie & outillage</span>
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
          <Link href="/products" className="relative inline-flex items-center overflow-hidden rounded-md border-2 border-[#B51B1B] px-6 py-2 text-sm font-medium text-[#B51B1B] bg-white group-hover:bg-gray-50 group-hover:text-white">
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#B51B1B] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-6 w-6 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase text-xs tracking-tight">produits en stock</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
