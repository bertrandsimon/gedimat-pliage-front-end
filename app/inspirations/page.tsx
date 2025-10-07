import { Gallery } from './gallery'
import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'

export default function InspirationPage() {
  return (
    <div className="h-full">
      <DynamicBreadcrumb />
      <p className="uppercase oswald text-2xl text-center pt-20 pb-0">
        <span className="pr-2 font-semibold">Inspirations</span>
        <span className="font-light">pour vos projets</span>
      </p>
      <Gallery />
    </div>
  )
}
