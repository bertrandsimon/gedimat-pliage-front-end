'use client'
import Link from 'next/link'
import Image from 'next/image'
// import gedimat from "@/public/images/banner/gedimat.png"
// import { CheckCircleIcon } from '@heroicons/react/20/solid'
// import { Button } from '@/components/ui/button'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Banner() {
  // const animationURL =
  //   'https://lottie.host/41da3a58-1dbc-4c61-825a-c99cae128776/GiXbQZVXO1.json'

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 bg-[#F2EDEA] rounded-md h-full sm:h-[600px] gap-10">
      <section id="col1" className="sm:pl-12 py-12 px-4 ">
        <div className="flex flex-col h-full justify-around">
          <div id="line1" className="flex flex-col gap-2 text-center sm:text-left">
            <p className="font-medium">Spécialiste du pliage</p>
            <p className="font-bold text-3xl">Aluminium et acier</p>
            <p className="max-w-[420px] mx-auto sm:mx-0">
              {/* Découvrez notre service de pliage aluminium sur mesure, en
              partenariat avec Gedimat. Alliez précision et qualité pour tous
              vos projets de construction ou de rénovation. */}
              Nous mettons notre expertise au service des professionnels comme des particuliers, pour le pliage de métaux fins (aluminium, acier, zinc jusqu’à 2 mm).
            </p>
            <div className="max-w-[124px] my-2 mx-auto sm:mx-0">
              <Link
                href="/presentation"
                className="group relative inline-flex items-center overflow-hidden rounded-md border-2 border-[#B51B1B] px-6 py-2 text-sm font-medium text-[#B51B1B] bg-white hover:bg-gray-50 hover:text-white"
              >
                <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#B51B1B] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
                <span className="ease absolute right-0 flex h-6 w-6 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="relative transform duration-700 group-hover:-translate-x-2">en savoir +</span>
              </Link>
            </div>
            {/* <Button variant="outline">Button</Button> */}
          </div>

          <div
            id="line2"
            className="flex gap-8 justify-center sm:justify-start items-center pt-6 sm:pt-0 "
          >
            <div className="rounded-md flex flex-col justify-center items-center text-center gap-4 dashed p-4">
              <Image
                src="/images/banner/gedimat.png"
                height={58}
                width={121}
                alt=""
              />
              <span className="text-sm">
                Toute notre expérience<br />
                à votre service
              </span>
            </div>

            <div className="rounded-md flex flex-col justify-center items-center text-center gap-4 dashed p-4">
              <Image
                src="/images/banner/livraison.png"
                height={58}
                width={71}
                alt=""
              />

              <span className="text-sm">
                Livraison ou enlèvement
                <br />
                dans nos magasins
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="col2"
        className="flex flex-col hidden sm:flex items-center justify-center sm:-mt-0 p-10 sm:p-0 sm:pr-12  h-max-[full] bg-[url('/images/banner/mobile-slice.jpg')] sm:bg-[url('/images/banner/slice.png')] bg-no-repeat sm:bg-right bg-top"
      >
        <div className="relative  w-full max-w-[602px] mx-auto">
          <Image
            src="/images/banner/maison4.png"
            alt="Maison interactive"
            width={602}
            height={443}
            className="w-full h-auto -mt-8 sm:mt-10"
          />

          {/* Profilés de finition */}
          <Link
            href="/products?category=facade_bardage&subcategory=profiles"
            title="Profilés de finition"
            className="group absolute top-[27.8%] left-[1%] w-[26%] h-[7%] z-10 inline-flex items-center overflow-hidden rounded-md border border-transparent px-3 py-1 text-xs font-medium text-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-300 ease-in-out"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-white opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-4 w-4 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase">Profilés de finition</span>
          </Link>

          {/* Sous-faces */}
          <Link
            href="/products?category=menuiserie_fermeture&subcategory=sous-faces"
            title="Sous-faces"
            className="group absolute top-[16.5%] left-[29%] w-[17%] h-[7.7%] z-10 inline-flex items-center overflow-hidden rounded-md border border-transparent px-3 py-1 text-xs font-medium text-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-300 ease-in-out"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-white opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-4 w-4 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase">Sous-faces</span>
          </Link>

          {/* Faîtières */}
          <Link
            href="/products?category=couverture_etancheite&subcategory=faitieres"
            title="Faîtières"
            className="group absolute top-[9.2%] left-[55%] w-[13.3%] h-[8.1%] z-10 inline-flex items-center overflow-hidden rounded-md border border-transparent px-3 py-1 text-xs font-medium text-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-300 ease-in-out"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-white opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="relative uppercase">Faîtières</span>
          </Link>

          {/* Solins */}
          <Link
            href="/products?category=couverture_etancheite&subcategory=solins"
            title="Solins"
            className="group absolute top-[12.3%] left-[69%] w-[11%] h-[7.9%] z-10 inline-flex items-center overflow-hidden rounded-md border border-transparent px-3 py-1 text-xs font-medium text-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-300 ease-in-out"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-white opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="relative uppercase">Solins</span>
          </Link>

          {/* Couvertines */}
          <Link
            href="/products?category=couverture_etancheite&subcategory=couvertines"
            title="Couvertines"
            className="group absolute top-[12.5%] left-[80.5%] w-[18.3%] h-[6.8%] z-10 inline-flex items-center overflow-hidden rounded-md border border-transparent px-3 py-1 text-xs font-medium text-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-300 ease-in-out"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-white opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-4 w-4 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase">Couvertines</span>
          </Link>

          {/* Angles et cornières */}
          <Link
            href="/products?category=facade_bardage"
            title="Angles et cornières"
            className="group absolute top-[80%] left-[5.6%] w-[27.2%] h-[7.7%] z-10 inline-flex items-center overflow-hidden rounded-md border border-transparent px-3 py-1 text-xs font-medium text-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-300 ease-in-out"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-white opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-4 w-4 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase">Angles et cornières</span>
          </Link>

          {/* Tablettes de fenêtre */}
          <Link
            href="/products?category=menuiserie_fermeture&subcategory=appuis_de_fenetre"
            title="Tablettes de fenêtre"
            className="group absolute top-[76.2%] left-[81.7%] w-[18.1%] h-[13.1%] z-10 inline-flex items-center overflow-hidden rounded-md border border-transparent px-3 py-1 text-xs font-medium text-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-300 ease-in-out"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-white opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-4 w-4 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-2 uppercase text-center">Tablettes de fenêtre</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
