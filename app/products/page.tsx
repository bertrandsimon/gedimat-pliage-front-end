'use client'
import { useSearchParams } from 'next/navigation'
import { ProductsListing } from './productsListing'
export const dynamic = 'force-dynamic'

import Ariane from '@/components/ariane'
import Steps from '@/components/homepage/steps'
import CategoryHeader from '@/components/products/categoryHeader'

export default function ProductsPage() {
  const searchParams = useSearchParams()

  //   URL -> `/dashboard?search=my-project`

  // http://localhost:3000/products?category=solins
  const category = searchParams.get('category')

  // http://localhost:3000/products?subcategory=solins
  const subcategory = searchParams.get('subcategory')
  //console.log(search)

  const ariane = {
    sub1: 'Couverture et étanchéité',
    sub2: 'Couvertines',
    sub3: '',
  }

  return (
    <div>
      <Ariane ariane={ariane} />
      <div className="px-2 sm:px-12 py-12">
        <ProductsListing category={category} subcategory={subcategory} />
      </div>
      <div className="px-2 py-18 mb-20">
        <Steps />
      </div>

    </div>
  )
}
