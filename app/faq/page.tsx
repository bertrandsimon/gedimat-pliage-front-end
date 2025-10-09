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
            imageTop="help3.png"
          ></Top>
        </div>
        <div className="grid grid-cols-2 px-12">
          <div className="col-span-1"></div>
          <div className="text-md col-span-1">      <p >
            Vous avez des questions ? Nous sommes là pour vous aider.
          </p></div>
        </div>
        <div className="px-4 sm:px-12 py-6 sm:py-12">
          <Faq />
        </div>
      </div>
    </div>
  )
}
