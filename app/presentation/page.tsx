'use client'
import Ariane from '@/components/ariane'

import Presentation from '@/components/homepage/presentation'
export default function PresentationPage() {
  const ariane = {
    sub1: 'Couverture et étanchéité',
    sub2: 'Couvertines',
    sub3: '',
  }

  return (
    <div>
      <Ariane ariane={ariane} />
      <div className="px-2 py-4">
        <Presentation />
      </div>
      <div className="px-2 sm:px-12 py-12">
        <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            tenetur, incidunt accusantium explicabo unde molestiae ea id iusto
            cum corrupti ut qui, at maxime voluptatum illo dicta magnam laborum
            impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quam tenetur, incidunt accusantium explicabo unde molestiae ea id
            iusto cum corrupti ut qui, at maxime voluptatum illo dicta magnam
            laborum impedit.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            tenetur, incidunt accusantium explicabo unde molestiae ea id iusto
            cum corrupti ut qui, at maxime voluptatum illo dicta magnam laborum
            impedit.
          </p>
        </div>
      </div>
    </div>
  )
}
