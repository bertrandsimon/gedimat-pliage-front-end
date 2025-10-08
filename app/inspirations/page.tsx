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
          imageTop="man.png"
        ></Top>
      </div>

      <p className="uppercase oswald text-xl sm:text-2xl text-center pt-10 sm:pt-20 pb-0 px-4">
        <span className="pr-2 font-semibold">Inspirations</span>
        <span className="font-light">pour vos projets</span>
      </p>
      <Gallery />
    </div>
  )
}
