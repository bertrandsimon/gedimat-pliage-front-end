import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CategoryHeader from '@/components/products/categoryHeader'
import dynamicImport from 'next/dynamic';
//const Lottie = dynamicImport(() => import('lottie-react'), { ssr: false });

export const dynamic = 'force-dynamic'

//const lottieJson = { "nm": "Loading ", "ddd": 0, "h": 500, "w": 500, "meta": { "g": "LottieFiles AE 1.0.0" }, "layers": [{ "ty": 4, "nm": "Rectangle_1", "sr": 1, "st": 0, "op": 90.0000036657751, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [-125, -107, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [250, 157.375, 0], "t": 0, "ti": [0.031, -0.052, 0], "to": [15.448, 15.438, 0] }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [342.688, 250, 0], "t": 15, "ti": [15.448, -15.427, 0], "to": [-0.059, 0.098, 0] }, { "s": [250, 342.563, 0], "t": 30.0000012219251 }], "ix": 2 }, "r": { "a": 0, "k": 45, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "hd": false, "mn": "ADBE Vector Group", "nm": "Rectangle 1", "ix": 1, "cix": 2, "np": 3, "it": [{ "ty": "sh", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[57, -57], [57, 57], [-57, 57], [-57, -57]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 4, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "c": { "a": 0, "k": [1, 0, 0], "ix": 3 } }, { "ty": "fl", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.6784, 0, 0.149], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-125, -107], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 1 }, { "ty": 4, "nm": "Rectangle_2", "sr": 1, "st": 0, "op": 90.0000036657751, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [-125, -107, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [342.688, 250, 0], "t": 0, "ti": [-0.01, 0, 0], "to": [0.052, -0.073, 0] }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [250, 342.563, 0], "t": 15, "ti": [0.198, -0.073, 0], "to": [0.104, 0, 0] }, { "s": [157.313, 250, 0], "t": 30.0000012219251 }], "ix": 2 }, "r": { "a": 0, "k": 45, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "hd": false, "mn": "ADBE Vector Group", "nm": "Rectangle 1", "ix": 1, "cix": 2, "np": 3, "it": [{ "ty": "sh", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[57, -57], [57, 57], [-57, 57], [-57, -57]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 4, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "c": { "a": 0, "k": [1, 0, 0], "ix": 3 } }, { "ty": "fl", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.8902, 0.251, 0.2471], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-125, -107], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 2 }, { "ty": 4, "nm": "Rectangle_3", "sr": 1, "st": 0, "op": 90.0000036657751, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [-125, -107, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [250, 342.563, 0], "t": 0, "ti": [0.04, -0.012, 0], "to": [0.052, 0.198, 0] }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [157.313, 250, 0], "t": 15, "ti": [0.052, -0.563, 0], "to": [-0.492, 0.145, 0] }, { "s": [250, 157.375, 0], "t": 30.0000012219251 }], "ix": 2 }, "r": { "a": 0, "k": 45, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "hd": false, "mn": "ADBE Vector Group", "nm": "Rectangle 1", "ix": 1, "cix": 2, "np": 3, "it": [{ "ty": "sh", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[57, -57], [57, 57], [-57, 57], [-57, -57]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 4, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "c": { "a": 0, "k": [1, 0, 0], "ix": 3 } }, { "ty": "fl", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.6784, 0, 0.149], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-125, -107], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 3 }, { "ty": 4, "nm": "Rectangle_4", "sr": 1, "st": 0, "op": 90.0000036657751, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [-125, -107, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [157.313, 250, 0], "t": 0, "ti": [-0.079, 0.525, 0], "to": [15.448, -15.438, 0] }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [250, 157.375, 0], "t": 15, "ti": [-15.448, -15.438, 0], "to": [0.019, -0.125, 0] }, { "s": [342.688, 250, 0], "t": 30.0000012219251 }], "ix": 2 }, "r": { "a": 0, "k": 45, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "hd": false, "mn": "ADBE Vector Group", "nm": "Rectangle 1", "ix": 1, "cix": 2, "np": 3, "it": [{ "ty": "sh", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[57, -57], [57, 57], [-57, 57], [-57, -57]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 4, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "c": { "a": 0, "k": [0.9176, 0, 0], "ix": 3 } }, { "ty": "fl", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.8902, 0.251, 0.2471], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-125, -107], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 4 }], "v": "4.8.0", "fr": 29.9700012207031, "op": 31.0000012626559, "ip": 0, "assets": [] };

export function ProductsListing({ category, subcategory }: any) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedSubCategory, setSelectedSubCategory] = useState('')

  // Filtres categories

  const selectSubCategory = (selectedSubCategory: any) => {
    if (selectedSubCategory) {
      setSelectedSubCategory(selectedSubCategory)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(
        //   `${process.env.NEXT_PUBLIC_URL}/api/products`,
        //   { cache: 'force-cache' }
        // )
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/products`,
          {
            cache: 'no-store',
            next: {
              //revalidate: 3600,
            },
          }
        )
        const data = await response.json()
        setProducts(data)

        // Initial filtering based on category and subcategory
        let filtered = data
        if (category && subcategory) {
          filtered = data.filter(
            (product: any) =>
              product.category === category &&
              product.sub_category === subcategory
          )
        } else if (category) {
          filtered = data.filter(
            (product: any) => product.category === category
          )
        } else if (subcategory) {
          filtered = data.filter(
            (product: any) => product.sub_category === subcategory
          )
        }

        setFilteredProducts(filtered)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchData()
  }, [category, subcategory])

  // Filter products by selectedSubCategory
  useEffect(() => {
    if (selectedSubCategory) {
      const filtered = products.filter(
        (product: any) => product.sub_category === selectedSubCategory
      )
      setFilteredProducts(filtered)
    } else {
      // Reset to filtered products based on initial category and subcategory filter
      let filtered = products
      if (category && subcategory) {
        filtered = products.filter(
          (product: any) =>
            product.category === category &&
            product.sub_category === subcategory
        )
      } else if (category) {
        filtered = products.filter(
          (product: any) => product.category === category
        )
      } else if (subcategory) {
        filtered = products.filter(
          (product: any) => product.sub_category === subcategory
        )
      }
      setFilteredProducts(filtered)
    }
  }, [selectedSubCategory, category, subcategory, products])

  return (
    <>
      {products.length === 0 ? (
        <div>
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
            {[...Array(12)].map((_, i) => (
              <div key={i} className="min-h-[300px] border p-4 rounded-sm animate-pulse">
                <div className="w-full h-[125px] bg-gray-300 mb-4 rounded" />
                <div className="h-4 bg-gray-300 rounded mb-2" />
                <div className="h-4 bg-gray-300 rounded w-1/2" />
              </div>
            ))}

          </div>
        </div>
      ) : (
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
      )}
    </>
  )
}
