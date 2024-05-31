export const dynamic = 'force-dynamic'
import Image from "next/image"
import Link from "next/link"


export async function ProductsListing () {

    // const response = await fetch(`http://localhost:3000/api/products`, { cache: 'force-cache' })
    const response = await fetch(process.env.URL +`/api/products`, { cache: 'no-store' })
    const products = await response.json()

    return (

        <div className="grid grid-cols-6 gap-4">

       

            { products.map((product:any) => 
            <div key={product._id} >
                
                <div className="min-h-[300px] flex flex-col justify-start items-center rounded-sm gap-2 cursor-pointer transition duration-300 ease-in-out border border-1 borde-black p-4 hover:shadow-lg">
                    <div className="overflow-hidden">
                    <Image src={`/images/products/${product.main_image}`} alt="" width={180} height={125} className="object-cover rounded hover:scale-125 transition-transform duration-300 ease-in-out"></Image>
                    </div>
                    <p className="cursor-pointer pb-2 text-sm text-center">{product.name}</p>
                    <Link href='/singleProduct'><div className="thinBtn greyBtn"><span className="text-xs">voir</span></div></Link>
                  
                

                </div>

                </div>

            )}


        </div>

    )
}