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
        className="sm:-mt-0 p-10 sm:p-0 sm:pr-12  h-max-[full] bg-[url('/images/banner/mobile-slice.jpg')] sm:bg-[url('/images/banner/slice.png')] bg-no-repeat sm:bg-right bg-top"
      >
        <div className="relative">
          <Image
            src="/images/banner/maison2.png"
            width={592}
            height={512}
            alt="House Diagram"
            useMap="#house-map"
            style={{ width: '100%', height: 'auto' }}
            className="-mt-14 sm:mt-10"
          />
          <map name="house-map">
            <area
              target="_self"
              alt="Couvertines"
              title="Couvertines"
              href="/products?category=couverture_etancheite&subcategory=couvertines"
              coords="38,42,140,140"
              shape="rect"
            />
            <area
              target="_self"
              alt="Faîtières"
              title="Faîtières"
              href="/products?category=couverture_etancheite&subcategory=faitieres"
              coords="235,0,324,68"
              shape="rect"
            />
            <area
              target="_self"
              alt="Solins"
              title="Solins"
              href="/products?category=couverture_etancheite&subcategory=solins"
              coords="417,30,517,130"
              shape="rect"
            />
            <area
              target="_self"
              alt="Tablettes"
              title="Tablettes"
              href="/products?category=couverture_etancheite&subcategory=tablettes"
              coords="504,123,594,213"
              shape="rect"
            />
            <area
              target="_self"
              alt="Sous-face"
              title="Sous-face"
              href="/products?category=couverture_etancheite&subcategory=couvertines"
              coords="503,349,603,450"
              shape="rect"
            />
          </map>
        </div>
      </section>
    </div>
  )
}
