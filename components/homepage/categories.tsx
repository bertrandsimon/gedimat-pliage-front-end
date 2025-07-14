import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function Categories() {
  return (
    <div className="w-full px-4">
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
        <div className="flex flex-col justify-center items-center gap-4 ">
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

          <Link href="/products?category=couverture_etancheite">
            <p className="uppercase cursor-pointer text-sm font-medium">
              couverture et étanchéité
            </p>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
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
          <Link href="/products?category=facade_bardage">
            <p className="uppercase cursor-pointer text-sm font-medium">
              façade et bardage
            </p>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
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
          <Link href="/products?category=menuiserie_fermeture">
            <p className="uppercase cursor-pointer text-sm font-medium">
              menuiserie et fermeture
            </p>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
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
          <Link href="/products">
            <p className="uppercase cursor-pointer text-sm font-medium">
              quincaillerie et outillage
            </p>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
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
          <Link href="/products">
            <p className="uppercase cursor-pointer text-sm font-medium">
              produits en stock
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
