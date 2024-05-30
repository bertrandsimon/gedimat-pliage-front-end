'use client'
import SingleProduct from "./singleProduct"
import Ariane from "@/components/ariane"
import Steps from "@/components/homepage/steps"

export default function singleProductPage (){
    return (
        <div>
            <Ariane />
            <SingleProduct />
            <Steps />
        </div>
    )
}