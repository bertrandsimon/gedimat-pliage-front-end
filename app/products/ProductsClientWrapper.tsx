'use client'

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { selectedSubCategory as setSelectedSubCategoryAction } from '@/app/reducers/cart'
import Image from 'next/image'
import Link from 'next/link'
import CategoryHeader from '@/components/products/categoryHeader'
// Define the product type based on what getProducts returns
type ProductType = {
    _id: string
    name: string
    main_image: string
    category: string
    sub_category: string
}

interface ProductsClientWrapperProps {
    products: ProductType[]
    category?: string
    subcategory?: string
}

export function ProductsClientWrapper({ products, category, subcategory }: ProductsClientWrapperProps) {
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([])
    const [selectedSubCategory, setSelectedSubCategory] = useState('')
    const [previousCategory, setPreviousCategory] = useState(category)
    const dispatch = useDispatch()

    // Clear selectedSubCategory when category changes
    useEffect(() => {
        if (category !== previousCategory) {
            setSelectedSubCategory('')
            dispatch(setSelectedSubCategoryAction(''))
            setPreviousCategory(category)
        }
    }, [category, previousCategory, dispatch])

    // Initial filtering based on category and subcategory
    useEffect(() => {
        let filtered = products
        if (category && subcategory) {
            filtered = products.filter(
                (product) =>
                    product.category === category &&
                    product.sub_category === subcategory
            )
        } else if (category) {
            filtered = products.filter(
                (product) => product.category === category
            )
        } else if (subcategory) {
            filtered = products.filter(
                (product) => product.sub_category === subcategory
            )
        }
        setFilteredProducts(filtered)
    }, [products, category, subcategory])

    // Filter products by selectedSubCategory
    useEffect(() => {
        if (selectedSubCategory) {
            const filtered = products.filter(
                (product) => product.sub_category === selectedSubCategory
            )
            setFilteredProducts(filtered)
        } else {
            // Reset to filtered products based on initial category and subcategory filter
            let filtered = products
            if (category && subcategory) {
                filtered = products.filter(
                    (product) =>
                        product.category === category &&
                        product.sub_category === subcategory
                )
            } else if (category) {
                filtered = products.filter(
                    (product) => product.category === category
                )
            } else if (subcategory) {
                filtered = products.filter(
                    (product) => product.sub_category === subcategory
                )
            }
            setFilteredProducts(filtered)
        }
    }, [selectedSubCategory, category, subcategory, products])

    const selectSubCategory = (selectedSubCategoryValue: string) => {
        if (selectedSubCategoryValue) {
            setSelectedSubCategory(selectedSubCategoryValue)
            dispatch(setSelectedSubCategoryAction(selectedSubCategoryValue))
        }
    }

    return (
        <>
            <div className="mb-8 sm:py-4">
                <CategoryHeader
                    title={category}
                    subtitle={subcategory}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis dui et ipsum tempus sollicitudin. Etiam dapibus nec nulla sit amet viverra."
                    image="/images/inspirations/inspirations/7.jpg"
                    selectSubCategory={selectSubCategory}
                />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
                {filteredProducts.map((product: ProductType, i: number) => (
                    <div key={product._id}>
                        <div className="min-h-[300px] flex flex-col justify-start items-center rounded-sm gap-2 cursor-pointer transition duration-300 ease-in-out border border-1 border-grey p-4 hover:shadow-lg">
                            <div className="overflow-hidden">
                                <Link href={`/products/${product._id}`}>
                                    <Image
                                        src={`/images/products/${product.main_image}`}
                                        alt={product.name}
                                        width={180}
                                        height={125}
                                        className="object-cover rounded hover:scale-125 transition-transform duration-300 ease-in-out"
                                        priority={i < 6} // Prioritize first 6 images
                                        loading={i < 6 ? 'eager' : 'lazy'} // Lazy load images below the fold
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                    />
                                </Link>
                            </div>
                            <p className="cursor-pointer pb-2 text-sm text-center">
                                {product.name}
                            </p>
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
    )
}
