import Link from 'next/link'
import Image from 'next/image'
import Swiperfirstbis from '../swiper/swiperfirstbis'
import Swiperfirst from '../swiper/swiperfirst'
import MaterialSlider from '../swiper/swipersecond'

// import "@/public/styles/index.css"

export default function Presentation() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
      <div id="col1">
        <div
          id="line1"
          className="flex flex-col gap-2 pl-12 justify-center h-full"
        >
          <p className="font-medium">Votre expert en</p>
          <p className="font-bold text-2xl">Pliage aluminium sur mesure </p>
          <p className="text-md">
            Optez pour le pliage aluminium sur mesure avec Gedimat, votre expert
            en solutions adaptées à vos besoins. <br />
            <br />
            Que ce soit pour un projet résidentiel ou professionnel, bénéficiez
            d’un service précis et fiable. Nous transformons vos idées en
            réalisations concrètes, avec un aluminium de qualité, parfaitement
            ajusté à vos attentes. <br />
            <br />
            Faites confiance à notre expertise et démarquez-vous grâce à des
            finitions sur mesure, pensées pour durer dans le temps et répondre à
            vos exigences.
          </p>
          {/* <div className="lgBtn greyBtn max-w-[124px] my-2">
            <Link href="/presentation">en savoir +</Link>
          </div> */}
        </div>
      </div>

      <div id="col2 flex flex-col pr-12 gap-2">
        <div className="flex items-center justify-end gap-2 pb-4">
          <Image
            src="/images/arrow-small.jpg"
            width={19}
            height={19}
            alt=""
            className="mt-4"
          />
          <p className="text-xl">Besoin</p>
          <p className="text-xl font-bold">d&apos;inspirations ?</p>
        </div>

        {/* <Swiperfirstbis /> */}
        <Link href="/inspirations">
          <Swiperfirst />
        </Link>
        <Link href="/inspirations">
          <MaterialSlider />
        </Link>
      </div>
    </div>
  )
}
