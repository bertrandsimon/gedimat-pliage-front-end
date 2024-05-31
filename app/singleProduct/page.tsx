'use client'
import SingleProduct from "./singleProduct"
import Ariane from "@/components/ariane"
import Steps from "@/components/homepage/steps"
import Image from "next/image"

export default function singleProductPage (){

    const ariane = {
        sub1 : "Couverture et étanchéité",
        sub2 : "Couvertines",
        sub3 : "Couvertine à coller",
    }

    return (
        <div>
            <Ariane ariane={ariane}/>
            <SingleProduct />
            <div className="grid grid-cols-4 h-[160px]">
                <div className="flex justify-end">
                    <Image src="/images/help.png" width={231} height={152} alt="" className="pb-4"></Image>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Steps />
        </div>
    )
}