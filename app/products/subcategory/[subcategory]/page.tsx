import { ProductsListing } from "../../productsListing"

export const dynamic = 'force-dynamic'


export default async function Page({params}:any) {
   
   //const response = await fetch(`${process.env.URL}/api/products/${params.id}`, { cache: 'no-store' })

   console.log ('params.subcategory :', params.subcategory)
   //const response = await fetch(`${process.env.URL}/api/products/${params.id}`)
 
   //const item = await response.json()
  
    return (
        
      <div>
        <ProductsListing />
      </div>

    )
}

