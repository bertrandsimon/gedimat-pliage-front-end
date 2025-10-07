import SingleProduct from '@/app/singleProduct/singleProduct'

import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'
//export const dynamic = 'force-dynamic'
export const revalidate = 86400

export default async function Page({ params }: any) {
  // ex : http://localhost:3000/api/products/666adf1ac9493b71dbea1e4b
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}`,
    {
      // cache: 'force-cache',
      next: { revalidate: 86400 },
    }
  )
  const item = await response.json()

  // all materials
  const response2 = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/materials`, {
    next: { revalidate: 86400 },
  })
  const allMaterials = await response2.json()

  // materials specific to the product
  const response3 = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}`, {
    next: { revalidate: 86400 },
  })
  const productMaterials = await response3.json()
  const materialsFromProduct = productMaterials.product_materials

  const materials =
    productMaterials.product_materials?.length > 0
      ? productMaterials.product_materials
      : allMaterials

  //console.log('materials : ', materialsFromProduct)
  //console.log('materials length: ', materialsFromProduct.length)

  //console.log("single product :", item)

  return (
    <div className="w-full">
      <DynamicBreadcrumb
        customProductName={item?.name || 'Produit'}
        productCategory={item?.category}
        productSubCategory={item?.sub_category}
      />

      <SingleProduct item={item} materials={materials} />
    </div>
  )
}
