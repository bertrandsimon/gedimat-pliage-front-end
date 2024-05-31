
import { ProductsListing } from "./productsListing";
export const dynamic = 'force-dynamic'

import Ariane from "@/components/ariane";
import Steps from "@/components/homepage/steps";
import CategoryHeader from "@/components/products/categoryHeader";


export default function ProductsPage() {


  return (
    <div>

    <Ariane />

    <div className="px-12 pt-12">
      <CategoryHeader 
        title="Couverture et étanchéité" 
        subtitle="Couvertines" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis dui et ipsum tempus sollicitudin. Etiam dapibus nec nulla sit amet viverra."
        image="/images/inspirations/inspirations/7.jpg"
        />
        
      </div>

      
    
    
    <div className="px-12 py-12"><ProductsListing /></div>
    <div className="px-12 py-12"><Steps /></div>

    </div>
  );
}
