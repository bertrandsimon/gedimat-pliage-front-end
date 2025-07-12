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
      <section id="col1" className="pl-12 py-12">
        <div className="flex flex-col h-full justify-around">
          <div id="line1" className="flex flex-col gap-2">
            <p className="font-medium">Spécialiste du pliage</p>
            <p className="font-bold text-3xl">Aluminium et acier</p>
            <p className="max-w-[420px]">
              Découvrez notre service de pliage aluminium sur mesure, en
              partenariat avec Gedimat. Alliez précision et qualité pour tous
              vos projets de construction ou de rénovation.
            </p>
            <div className="lgBtn redBtn max-w-[124px] my-2">
              <Link href="/presentation">en savoir +</Link>
            </div>
            {/* <Button variant="outline">Button</Button> */}
          </div>

          <div
            id="line2"
            className="flex gap-8 justify-start items-center pt-6 sm:pt-0 "
          >
            <div className="rounded-md flex flex-col justify-center items-center text-center gap-4 dashed p-4">
              <Image
                src="/images/banner/gedimat.png"
                height={58}
                width={121}
                alt=""
              />
              <span className="text-sm">
                Toute l'expérience du groupe <br />
                Gedimat à votre service
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
        className="flex flex-col items-center justify-center sm:-mt-0 p-10 sm:p-0 sm:pr-12  h-max-[full] bg-[url('/images/banner/mobile-slice.jpg')] sm:bg-[url('/images/banner/slice.png')] bg-no-repeat sm:bg-right bg-top"
      >
        <div className="relative w-full max-w-[602px] mx-auto">
          <Image
            src="/images/banner/maison3@2x.png"
            alt="Maison interactive"
            width={602}
            height={443}
            className="w-full h-auto -mt-14 sm:mt-10"
          />

          {/* Profilés de finition */}
          <Link
            href="/products?category=facade_bardage&subcategory=profiles"
            title="Profilés de finition"
            className="absolute top-[27.2%] left-[1%] w-[26%] h-[7%] z-10 bg-red-500 bg-opacity-30 hover:ring-1 hover:ring-[black] rounded-md transition duration-150 flex items-center justify-center"
          >
            <span className="text-xs font-medium text-black uppercase">Profilés de finition</span>
          </Link>

          {/* Sous-faces */}
          <Link
            href="/products?category=menuiserie_fermeture&subcategory=sous-faces"
            title="Sous-faces"
            className="absolute top-[16.5%] left-[29%] w-[17%] h-[7.7%] z-10 bg-blue-500 bg-opacity-30 hover:ring-1 hover:ring-[black] rounded-md transition duration-150 flex items-center justify-center"
          >
            <span className="text-xs font-medium text-black uppercase">Sous-faces</span>
          </Link>

          {/* Faîtières */}
          <Link
            href="/products?category=couverture_etancheite&subcategory=faitieres"
            title="Faîtières"
            className="absolute top-[10%] left-[55%] w-[13.3%] h-[8.1%] z-10 bg-green-500 bg-opacity-30 hover:ring-1 hover:ring-[black] rounded-md transition duration-150 flex items-center justify-center"
          >
            <span className="text-xs font-medium text-black uppercase">Faîtières</span>
          </Link>

          {/* Solins */}
          <Link
            href="/products?category=couverture_etancheite&subcategory=solins"
            title="Solins"
            className="absolute top-[13%] left-[69%] w-[11%] h-[7.9%] z-10 bg-yellow-500 bg-opacity-30 hover:ring-1 hover:ring-[black] rounded-md transition duration-150 flex items-center justify-center"
          >
            <span className="text-xs font-medium text-black uppercase">Solins</span>
          </Link>

          {/* Couvertines */}
          <Link
            href="/products?category=couverture_etancheite&subcategory=couvertines"
            title="Couvertines"
            className="absolute top-[12.5%] left-[80.5%] w-[18.3%] h-[6.8%] z-10 bg-purple-500 bg-opacity-30 hover:ring-1 hover:ring-[black] rounded-md transition duration-150 flex items-center justify-center"
          >
            <span className="text-xs font-medium text-black uppercase">Couvertines</span>
          </Link>

          {/* Angles et cornières */}
          <Link
            href="/products?category=facade_bardage"
            title="Angles et cornières"
            className="absolute top-[80%] left-[5.6%] w-[27.2%] h-[7.7%] z-10 bg-pink-500 bg-opacity-30 hover:ring-1 hover:ring-[black] rounded-md transition duration-150 flex items-center justify-center"
          >
            <span className="text-xs font-medium text-black uppercase">Angles et cornières</span>
          </Link>

          {/* Tablettes de fenêtre */}
          <Link
            href="/products?category=menuiserie_fermeture&subcategory=appuis_de_fenetre"
            title="Tablettes de fenêtre"
            className="absolute top-[76.2%] left-[81.7%] w-[18.1%] h-[13.1%] z-10 bg-orange-500 bg-opacity-30 hover:ring-1 hover:ring-[black] hover:shadow-md rounded-md transition duration-150 flex items-center justify-center"
          >
            <span className="text-xs font-medium text-black uppercase">Tablettes de fenêtre</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
