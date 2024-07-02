import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CategoryHeader from "@/components/products/categoryHeader";

export const dynamic = 'force-dynamic';

export function ProductsListing({ category, subcategory }: any) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");


  // Filtres categories

  const selectSubCategory = (selectedSubCategory:any) => {
    if (selectedSubCategory) {
      setSelectedSubCategory(selectedSubCategory);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`, { cache: 'force-cache' });
        const data = await response.json();
        setProducts(data);

        // Initial filtering based on category and subcategory
        let filtered = data;
        if (category && subcategory) {
          filtered = data.filter((product: any) => product.category === category && product.sub_category === subcategory);
        } else if (category) {
          filtered = data.filter((product: any) => product.category === category);
        } else if (subcategory) {
          filtered = data.filter((product: any) => product.sub_category === subcategory);
        }

        setFilteredProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, [category, subcategory]);

  // Filter products by selectedSubCategory
  useEffect(() => {
    if (selectedSubCategory) {
      const filtered = products.filter((product: any) => product.sub_category === selectedSubCategory);
      setFilteredProducts(filtered);
    } else {
      // Reset to filtered products based on initial category and subcategory filter
      let filtered = products;
      if (category && subcategory) {
        filtered = products.filter((product: any) => product.category === category && product.sub_category === subcategory);
      } else if (category) {
        filtered = products.filter((product: any) => product.category === category);
      } else if (subcategory) {
        filtered = products.filter((product: any) => product.sub_category === subcategory);
      }
      setFilteredProducts(filtered);
    }
  }, [selectedSubCategory, category, subcategory, products]);

  return (
    <>
      <div className="py-12">
        <CategoryHeader 
          title="Couverture et étanchéité" 
          subtitle={subcategory} 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis dui et ipsum tempus sollicitudin. Etiam dapibus nec nulla sit amet viverra."
          image="/images/inspirations/inspirations/7.jpg"
          selectSubCategory={selectSubCategory}
        />
      </div>

      <div className="grid grid-cols-6 gap-4">
        {filteredProducts.map((product: any) => (
          <div key={product._id}>
            <div className="min-h-[300px] flex flex-col justify-start items-center rounded-sm gap-2 cursor-pointer transition duration-300 ease-in-out border border-1 border-grey p-4 hover:shadow-lg">
              <div className="overflow-hidden">
                <Link href={`/products/${product._id}`}>
                  <Image
                    src={`/images/products/${product.main_image}`}
                    alt=""
                    width={180}
                    height={125}
                    className="object-cover rounded hover:scale-125 transition-transform duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <p className="cursor-pointer pb-2 text-sm text-center">{product.name}</p>
              <Link href={`/products/${product._id}`}>
                <div className="thinBtn greyBtn">
                  <span className="text-xs">voir</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
