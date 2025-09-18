import { getProducts } from '@/lib/products'
import { ProductsClientWrapper } from './ProductsClientWrapper'

// Define the product type based on what getProducts returns
type ProductType = {
  _id: string
  name: string
  main_image: string
  category: string
  sub_category: string
}

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