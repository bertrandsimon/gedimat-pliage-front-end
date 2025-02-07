'use client'
import Ariane from '@/components/ariane'
import Stats from '@/components/presentation/stats'
import Presentation from '@/components/homepage/presentation'
import Top from '@/components/presentation/top'

export default function PresentationPage() {
  const ariane = {
    sub1: 'Présentation',
    sub2: '',
    sub3: '',
  }

  return (
    <div>
      <Ariane ariane={ariane} />
      <div className="px-2 py-4">
        <Presentation />
      </div>
      <div className="px-4 py-12">
        <Top
          title="Spécialiste du pliage"
          subtitle="Aluminium et acier"
          sliderOn={true}
          imageTop="man.png"
        ></Top>
        <Stats />
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
