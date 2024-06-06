
import Image from 'next/image'
import SingleProduct from '@/app/singleProduct/singleProduct'

export const dynamic = 'force-dynamic'

export default function Page( {params}:any ) {
   
 
  // const response = await fetch(`${process.env.URL}/api/products/${params.id}`, { cache: 'no-store' })

  // const item = await response.json()

    return (
        
      <div></div>

    )
}

// export default function productPage (){
//   return (
//     <div>
//       <h1>test</h1>
//     </div>
//   )
// }