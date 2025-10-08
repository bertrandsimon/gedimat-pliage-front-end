import Link from 'next/link'
import Image from 'next/image'

function ImagesArea() {
  return (
    <div>
      <main className="isolate">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div
                id="line1"
                className="flex flex-col gap-2 pl-12 justify-center h-full mt-[300px]"
              >
                <p className="font-medium">Votre expert en</p>
                <p className="font-bold text-2xl">
                  Pliage aluminium sur mesure{' '}
                </p>
                <p className="text-md">
                  Optez pour le pliage aluminium sur mesure avec Gedimat, votre
                  expert en solutions adaptées à vos besoins. <br />
                  <br />
                  Que ce soit pour un projet résidentiel ou professionnel,
                  bénéficiez d’un service précis et fiable. Nous transformons
                  vos idées en réalisations concrètes, avec un aluminium de
                  qualité, parfaitement ajusté à vos attentes. <br />
                  <br />
                  Faites confiance à notre expertise et démarquez-vous grâce à
                  des finitions sur mesure, pensées pour durer dans le temps et
                  répondre à vos exigences.
                </p>
              </div>
              <div className="mt-24 pt-12 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative sm:hidden">
                    <Image
                      src="/images/medias/photos/1.jpg"
                      alt="Photo 1"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl object-cover "
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl " />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src="/images/medias/photos/2.jpg"
                      alt="Photo 2"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl object-cover "
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl " />
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/medias/photos/3.jpg"
                      alt="Photo 3"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl object-cover "
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl " />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src="/images/medias/photos/4.jpg"
                      alt="Photo 4"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl object-cover "
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl " />
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/medias/photos/5.jpg"
                      alt="Photo 5"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl object-cover "
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ImagesArea
