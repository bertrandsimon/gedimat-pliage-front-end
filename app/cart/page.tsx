
import Ariane from "@/components/ariane"
import Cart from "./cart"

export default function CartPage (){

    const ariane = {
        sub1 : "Panier",
        sub2 : "",
        sub3 : "",
    }

    return (
        <div>
            <Ariane ariane={ariane}/>
            <div className="px-12 py-12"><Cart /></div>
            
        </div>
    )
}