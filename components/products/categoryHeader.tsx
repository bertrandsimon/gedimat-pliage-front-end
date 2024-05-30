import Image from "next/image"

export default function CategoryHeader(props:any){
    return (
        <div className="grid grid-cols-3 gap-10">
            <div className="col-span-1">

            <div  id="line1" className="flex flex-col gap-2 items-start">
                <p className="font-bold">{props.title}</p>
                <p className="font-bold text-3xl redAlu">{props.subtitle}</p>
                <p className="max-w-[420px]">{props.description}</p>
            </div>

            </div>
            <div className="col-span-2"><Image src={props.image} alt="" width={600} height={150} className="h-[160px] w-full object-cover object-center-top rounded-lg"/></div>
        </div>
    )
}