import { ProductsListing } from './productsListing'
import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'
import Steps from '@/components/homepage/steps'
import { Suspense } from 'react'
import { generateCategoryMetadata } from '@/lib/seo'

// Force dynamic rendering to avoid build-time database issues
export const dynamic = 'force-dynamic'

interface ProductsPageProps {
  searchParams: {
    category?: string
    subcategory?: string
  }
}

export async function generateMetadata({ searchParams }: ProductsPageProps) {
  const { category, subcategory } = searchParams

  if (category) {
    return generateCategoryMetadata(category, subcategory)
  }

  return {
    title: 'Produits - Pliage Aluminium',
    description: 'Découvrez notre gamme complète de produits en aluminium : couverture, façade, menuiserie. Solutions sur mesure pour vos projets.',
    keywords: 'produits aluminium, couverture, façade, menuiserie, pliage aluminium, sur mesure',
  }
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category, subcategory } = searchParams

  return (
    <div>
      <DynamicBreadcrumb />
      <div className="px-4 sm:px-12 py-6 sm:py-12">
        <Suspense fallback={<ProductsLoadingSkeleton />}>
          <ProductsListing category={category} subcategory={subcategory} />
        </Suspense>
      </div>
      <div className="px-4 sm:px-2 py-9 sm:py-18 mb-10 sm:mb-20">
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
