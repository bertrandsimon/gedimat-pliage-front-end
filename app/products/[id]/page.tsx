import SingleProduct from '@/app/singleProduct/singleProduct'

import Ariane from '@/components/ariane'
export const dynamic = 'force-dynamic'

export default async function Page({ params }: any) {
  // ex : http://localhost:3000/api/products/666adf1ac9493b71dbea1e4b
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}`,
    {
      cache: 'no-store',
      next: {
        //revalidate: 3600,
      },
    }
  )
  const item = await response.json()

  // all materials
  const response2 = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/materials`)
  const allMaterials = await response2.json()

  // materials specific to the product
  const response3 = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}`
  )
  const productMaterials = await response3.json()
  const materialsFromProduct = productMaterials.product_materials

  const materials =
    productMaterials.product_materials?.length > 0
      ? productMaterials.product_materials
      : allMaterials

  //console.log('materials : ', materialsFromProduct)
  //console.log('materials length: ', materialsFromProduct.length)

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
