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
            className="absolute top-[133px] left-[6px] w-[156px] h-[31px] z-10  hover:ring-1 hover:ring-[black] rounded-md transition duration-150"
          />

          {/* Sous-faces */}
          <Link
            href="/products?category=menuiserie_fermeture&subcategory=sous-faces"
            title="Sous-faces"
            className="absolute top-[82px] left-[174px] w-[102px] h-[34px] z-10  hover:ring-1 hover:ring-[black] rounded-md transition duration-150"
          />

          {/* Faîtières */}
          <Link
            href="/products?category=couverture_etancheite&subcategory=faitieres"
            title="Faîtières"
            className="absolute top-[49px] left-[330px] w-[80px] h-[36px] z-10  hover:ring-1 hover:ring-[black] rounded-md transition duration-150"
          />

          {/* Solins */}
          <Link
            href="/products?category=couverture_etancheite&subcategory=solins"
            title="Solins"
            className="absolute top-[64px] left-[416px] w-[66px] h-[35px] z-10  hover:ring-1 hover:ring-[black] rounded-md transition duration-150"
          />

          {/* Couvertines */}
          <Link
            href="/products?category=couverture_etancheite&subcategory=couvertines"
            title="Couvertines"
            className="absolute top-[63px] left-[485px] w-[110px] h-[30px] z-10  hover:ring-1 hover:ring-[black] rounded-md transition duration-150"
          />

          {/* Angles et cornières */}
          <Link
            href="/products?category=facade_bardage"
            title="Angles et cornières"
            className="absolute top-[388px] left-[34px] w-[164px] h-[34px] z-10  hover:ring-1 hover:ring-[black] rounded-md transition duration-150"
          />

          {/* Tablettes de fenêtre */}
          <Link
            href="/products?category=menuiserie_fermeture&subcategory=appuis_de_fenetre"
            title="Tablettes de fenêtre"
            className="absolute top-[372px] left-[492px] w-[109px] h-[58px] z-10  hover:ring-1 hover:ring-[black] hover:shadow-md rounded-md transition duration-150"
          />
        </div>
      </section>
    </div>
  )
}
