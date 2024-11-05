import { useState, useEffect } from "react";
import Image from "next/image"
import CategoryMenuBar from "./categoryMenuBar"
import { categoryDescriptions } from "@/app/datas/categoryHeaderDescriptions";

export default function CategoryHeader(props:any){

    function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      // Define the type for the category description
        interface CategoryDescription {
            category: string;
            category_title: string;
            category_image: string;
            category_description: string;
        }

        const [categoryDescription, setCategoryDescription] = useState<CategoryDescription>({
            category: "",
            category_title: "",
            category_image: "",
            category_description: ""
          });
    
   
    
    
    useEffect(() => {
        const description = categoryDescriptions.find(item => item.category === props.title);
        if (description) {
          setCategoryDescription(description);
        }
      }, [props.title]);

      

    return (
        <div className="grid grid-cols-3 gap-10">
            <div className="col-span-1">

            <div  id="line1" className="flex flex-col gap-2 items-start">
                <p className="font-bold">{categoryDescription.category_title}</p>
                { props.subtitle && (<p className="font-bold text-3xl redAlu">{capitalizeFirstLetter(props.subtitle)}</p>) }
                <p className="max-w-[420px]">{props.description}</p>
            </div>

            </div>

            <div className="col-span-2 flex flex-col gap-4">
                { categoryDescription.category_image &&
                <Image src={categoryDescription.category_image} alt="" width={600} height={150} className="h-[160px] w-full object-cover object-center-top rounded-lg"/>
                }

                { !categoryDescription.category_image &&
                <Image src="/images/categories/cate-2.jpg" alt="" width={600} height={150} className="h-[160px] w-full object-cover object-center-top rounded-lg"/>
                }
                <CategoryMenuBar selectSubCategory={props.selectSubCategory}/>

            </div>

        </div>
    )
}