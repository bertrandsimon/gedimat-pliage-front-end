import SingleProduct from '@/app/singleProduct/singleProduct'

import Ariane from '@/components/ariane'
export const dynamic = 'force-dynamic'

export default async function Page({ params }: any) {
  // ex : http://localhost:3000/api/products/666adf1ac9493b71dbea1e4b
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}`
  )
  const item = await response.json()

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/materials`)
  const materials = await response2.json()

  const ariane = {
    sub1: 'Couverture et étanchéité',
    sub2: 'Couvertines',
    sub3: '',
    link1: '/products?category=couverture_etancheite',
    link2: '/products?category=couverture_etancheite&subcategory=couvertines',
  }

  //console.log("single product :", item)

  return (
    <div className="w-full">
      <Ariane ariane={ariane} />

      <SingleProduct item={item} materials={materials} />
    </div>
  )
}
