export const dynamic = 'force-dynamic'
import Image from "next/image"
import Link from "next/link"

export async function ProductsListing () {

    // const response = await fetch(`http://localhost:3000/api/products`, { cache: 'force-cache' })
    const response = await fetch(process.env.URL +`/api/products`, { cache: 'no-store' })
    const products = await response.json()

    return (

        <div className="grid grid-cols-6 gap-10">

       

            { products.map((product:any) => 
            <Link key={product._id} href='/singleProduct'>
                
                <div className="min-h-[220px] flex flex-col justify-start items-center rounded-md gap-4 cursor-pointer transition duration-300 ease-in-out">
      
                <Image src={`/images/products/${product.images[0]}`} alt="" width={180} height={125} className="object-cover rounded"></Image>

                <p className="cursor-pointer pb-4">{product.name}</p>
                </div>

            </Link>

            )}


        </div>

    )
}