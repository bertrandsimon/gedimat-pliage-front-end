'use client'
import Link from 'next/link'
import Image from 'next/image'
// import gedimat from "@/public/images/banner/gedimat.png"
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Banner() {
  const animationURL =
    'https://lottie.host/41da3a58-1dbc-4c61-825a-c99cae128776/GiXbQZVXO1.json'

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
                Toute l’expérience du groupe <br />
                Gedimat à votre service
              </span>
            </div>

            <div className="rounded-md flex flex-col justify-center items-center text-center gap-4 dashed p-4">
              <Image
                src="/images/banner/delivery.png"
                height={58}
                width={71}
                alt=""
              />

              {/* <div w-24 h-24 overflow-hidden>
            <DotLottieReact
              src={animationURL}
              loop
              autoplay
              autoResizeCanvas={false}
             className="w-96 h-48 object-contain"
              />
            </div> */}
              <span className="text-sm">
                Toute l’expérience du groupe <br />
                Gedimat à votre service
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="col2"
        className="sm:-mt-0 p-10 sm:p-0 sm:pr-12 sm:py-12 h-full bg-[url('/images/banner/mobile-slice.jpg')] sm:bg-[url('/images/banner/slice.png')] bg-no-repeat sm:bg-right bg-bottom"
      >
        <Image
          src="/images/banner/house.png"
          height={497}
          width={592}
          alt=""
          className="-mt-14 sm:-mt-0"
        />
      </section>
    </div>
  )
}
