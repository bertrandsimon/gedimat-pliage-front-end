import Contact from "./contact"
import Ariane from "@/components/ariane"

export default function ContactPage (){

    const ariane = {
        sub1 : "Contact",
        sub2 : "",
        sub3 : "",
    }

    return (
        <div>
            <Ariane ariane={ariane}/>
            <div className="px-12 py-12"><Contact /></div>
            
        </div>
    )
}