import Image from "next/image"
import CategoryMenuBar from "./categoryMenuBar"

export default function CategoryHeader(props:any){

    function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className="grid grid-cols-3 gap-10">
            <div className="col-span-1">

            <div  id="line1" className="flex flex-col gap-2 items-start">
                <p className="font-bold">{capitalizeFirstLetter(props.title)}</p>
                <p className="font-bold text-3xl redAlu">{capitalizeFirstLetter(props.subtitle)}</p>
                <p className="max-w-[420px]">{props.description}</p>
            </div>

            </div>

            <div className="col-span-2 flex flex-col gap-4">
                <Image src={props.image} alt="" width={600} height={150} className="h-[160px] w-full object-cover object-center-top rounded-lg"/>
                <CategoryMenuBar />
            </div>

        </div>
    )
}