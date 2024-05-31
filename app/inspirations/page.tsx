import { Gallery } from "./gallery"
import Ariane from "@/components/ariane"

export default function InspirationPage (){

    const ariane = {
        sub1 : "Inspirations",
        sub2 : "",
        sub3 : "",
    }

    return (
        <div className="h-full">
            <Ariane ariane={ariane}/>
            <Gallery />
        </div>
    )
}