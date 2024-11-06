import Faq from './faq'
import Ariane from '@/components/ariane'

export default function FaqPage() {
  const ariane = {
    sub1: 'FAQ',
    sub2: '',
    sub3: '',
  }

  return (
    <div>
      <div className="w-full">
        <Ariane ariane={ariane} />

        <div className="px-12 py-12">
          <Faq />
        </div>
      </div>
    </div>
  )
}
