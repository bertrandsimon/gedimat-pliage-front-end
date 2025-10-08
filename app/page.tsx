import Image from 'next/image'
import Banner from '@/components/homepage/banner'
import Steps from '@/components/homepage/steps'
import Presentation from '@/components/homepage/presentation'
import Categories from '@/components/homepage/categories'
import Partners from '@/components/homepage/partners'
import Infos from '@/components/homepage/infos'
import MapText from '@/components/homepage/mapText'
// import Infos3blocks from '@/components/homepage/infos3blocks'
import StockText from '@/components/homepage/stockText'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Pliage Aluminium sur mesure - groupe Gedimat',
  description:
    'Expert en pliage aluminium sur mesure pour vos projets professionnels et résidentiels. Solutions adaptées et finitions durables.',
  openGraph: {
    title: 'Pliage Aluminium sur mesure - groupe Gedimat',
    description:
      'Expert en pliage aluminium sur mesure pour vos projets professionnels et résidentiels. Solutions adaptées et finitions durables.',
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 relative">


      <Banner />

      <Steps />
      <div className="py-3 sm:py-6" ><Presentation /></div>

      <MapText />
      <Categories />
      <div className="py-3 sm:py-6" ><StockText /></div>

      <Infos />
      {/* <Infos3blocks /> */}

      <br />

      <Partners />
    </main>
  )
}
