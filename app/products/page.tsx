import { ProductsListing } from './productsListing'
import Ariane from '@/components/ariane'
import Steps from '@/components/homepage/steps'
import { Suspense } from 'react'

// Enable static generation with revalidation
export const revalidate = 3600 // Revalidate every hour

interface ProductsPageProps {
  searchParams: {
    category?: string
    subcategory?: string
  }
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category, subcategory } = searchParams

  const ariane = {
    sub1: 'Couverture et étanchéité',
    sub2: 'Couvertines',
    sub3: '',
  }

  return (
    <div>
      <Ariane ariane={ariane} />
      <div className="px-2 sm:px-12 py-12">
        <Suspense fallback={<ProductsLoadingSkeleton />}>
          <ProductsListing category={category} subcategory={subcategory} />
        </Suspense>
      </div>
      <div className="px-2 py-18 mb-20">
        <Steps />
      </div>
    </div>
  )
}

// Loading skeleton component
function ProductsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="min-h-[300px] border p-4 rounded-sm animate-pulse">
          <div className="w-full h-[125px] bg-gray-300 mb-4 rounded" />
          <div className="h-4 bg-gray-300 rounded mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
      ))}
    </div>
  )
}
