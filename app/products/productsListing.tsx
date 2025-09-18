import { getProducts } from '@/lib/products'
import { ProductsClientWrapper } from './ProductsClientWrapper'
import Product from '@/app/models/Product'

type ProductType = typeof Product extends { new(...args: any[]): infer T } ? T : never

interface ProductsListingProps {
  category?: string
  subcategory?: string
}

// Server component that fetches data
export async function ProductsListing({ category, subcategory }: ProductsListingProps) {
  // Fetch products on the server
  const products = await getProducts()

  return (
    <ProductsClientWrapper
      products={products}
      category={category}
      subcategory={subcategory}
    />
  )
}