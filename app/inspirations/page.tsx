import { Gallery } from './gallery'
import Ariane from '@/components/ariane'

export default function InspirationPage() {
  const ariane = {
    sub1: 'Inspirations',
    sub2: '',
    sub3: '',
  }

  return (
    <div className="h-full">
      <Ariane ariane={ariane} />
      <p className="uppercase oswald text-2xl text-center pt-20 pb-0">
        <span className="pr-2 font-semibold">Inspirations</span>
        <span className="font-light">pour vos projets</span>
      </p>
      <Gallery />
    </div>
  )
}
