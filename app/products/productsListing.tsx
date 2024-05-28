
import Image from "next/image"
import Link from "next/link"

export async function ProductsListing () {

    const response = await fetch(`http://localhost:3000/api/products`, { cache: 'force-cache' })
    const products = await response.json()

    return (

        <div className="grid grid-cols-5 gap-8">

            
            {/* <div className="min-h-[220px] flex flex-col justify-start items-center rounded-md gap-4">

             
                    <Image src="/images/products/bande.jpg" alt="" width={180} height={125} className="object-cover rounded-md"></Image>

                <p>Profil aluminium</p>
            </div> */}

            { products.map((product:any) => 
            <Link key={product._id} href='/singleProduct'>
                
                <div className="min-h-[220px] flex flex-col justify-start items-center rounded-md gap-4 cursor-pointer shadow-md hover:shadow-2xl transition duration-300 ease-in-out">
      
                <Image src={`/images/products/${product.images[0]}`} alt="" width={180} height={125} className="object-cover rounded-md"></Image>

                <p className="cursor-pointer pb-4">{product.name}</p>
                </div>

            </Link>

            )}


            {/* { products.map((product:any) => <div key={product._id}>{product.name}</div>

            )} */}
        </div>

    )
}