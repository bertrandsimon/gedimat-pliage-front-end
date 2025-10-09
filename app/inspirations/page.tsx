import { Gallery } from './gallery'
import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'
import { generatePageMetadata } from '@/lib/seo'
import Top from '@/components/presentation/top'

export const metadata = generatePageMetadata('inspirations')

export default function InspirationPage() {
  return (
    <div className="h-full">
      <DynamicBreadcrumb />
      <div className="px-4 sm:px-12 py-6 sm:py-12">
        <Top
          title="INSPIRATIONS"
          subtitle="Pour votre projet"
          sliderOn={true}
          imageTop="house.png"
        ></Top>
      </div>
      <div className="grid grid-cols-2 px-12">
        <div className="col-span-1"></div>
        <div className="text-md col-span-1">      <p >
          Inspirez vos projets avec des solutions en pliage aluminium sur mesure signées Gedimat — l’expertise au service de votre habitation.
        </p></div>
      </div>

      <Gallery />
    </div>
  )
}
