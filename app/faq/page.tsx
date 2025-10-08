import Faq from './faq'
import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'
import { generatePageMetadata } from '@/lib/seo'
import Top from '@/components/presentation/top'

export const metadata = generatePageMetadata('faq')

export default function FaqPage() {
  return (
    <div>
      <div className="w-full">
        <DynamicBreadcrumb />
        <div className="px-4 sm:px-12 py-6 sm:py-12">
          <Top
            title="F.A.Q"
            subtitle="Foire aux questions"
            sliderOn={true}
            imageTop="man.png"
          ></Top>
        </div>
        <div className="px-4 sm:px-12 py-6 sm:py-12">
          <Faq />
        </div>
      </div>
    </div>
  )
}
