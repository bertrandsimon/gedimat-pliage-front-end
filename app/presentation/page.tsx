'use client'

import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'
import Stats from '@/components/presentation/stats'
import Presentation from '@/components/homepage/presentation'
import Top from '@/components/presentation/top'
import ImagesArea from '@/components/presentation/imagesArea'

export default function PresentationPage() {
  return (
    <div>
      <DynamicBreadcrumb />

      <div className="px-4 sm:px-12 py-6 sm:py-12">
        <Top
          title="SPECIALISTE DU PLIAGE"
          subtitle="Aluminium et acier"
          sliderOn={true}
          imageTop="man.png"
        ></Top>
        <div className="-mt-60">
          <ImagesArea></ImagesArea>
        </div>

        <Stats />
        <div className="grid grid-cols-1 sm:grid-cols-3 py-8 sm:py-16 px-4 sm:px-12 gap-6 sm:gap-12">
          <p>
            Le pliage d'aluminium offre une précision exceptionnelle pour vos projets architecturaux.
            Nos techniques avancées garantissent des angles parfaits et une finition de qualité supérieure,
            adaptés aux exigences les plus strictes de l'industrie.
          </p>

          <p>
            Bénéficiez de la légèreté et de la résistance de l'aluminium plié. Matériau durable et
            résistant à la corrosion, il s'adapte parfaitement aux contraintes climatiques tout en
            conservant ses propriétés mécaniques exceptionnelles dans le temps.
          </p>
          <p>
            Notre expertise en pliage d'aluminium vous permet de réaliser des formes complexes et
            personnalisées. De la conception à la livraison, nous maîtrisons tous les aspects techniques
            pour transformer vos idées en réalisations concrètes et fonctionnelles.
          </p>
        </div>
      </div>
    </div>
  )
}
