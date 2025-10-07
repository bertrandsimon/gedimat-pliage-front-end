import Faq from './faq'
import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'

export default function FaqPage() {
  return (
    <div>
      <div className="w-full">
        <DynamicBreadcrumb />

        <div className="sm:px-12 py-12">
          <Faq />
        </div>
      </div>
    </div>
  )
}
