
import Image from 'next/image'
import SingleProduct from '@/app/singleProduct/singleProduct'

export const dynamic = 'force-dynamic'

export async function fetchSingleProduct( {params}:any ) {
   
 
  // const response = await fetch(`${process.env.URL}/api/products/${params.id}`, { cache: 'no-store' })

  // const item = await response.json()

    return (
        
      params.id

    )
}

export default function productPage (){
  return (
    <div>
      <h1>test</h1>
    </div>
  )
}