/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'

const product = {
  name: 'Basic Tee',
  price: '35',
  href: '#',
  images: [
    {
      id: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
  ],
  materials: [
    { name: 'Acier', inStock: true },
    { name: 'Alu', inStock: true },
    { name: 'Autre', inStock: true },
  ],
  finitions : [
    'Prégalvanisé', 'Satiné'
  ],

  description: `
    <p>Pour se monter efficacement, la coulisse pour sous-face doit s'ajuster à une sous-face existante.

    Pour cela, merci de saisir les paramètres de votre sous-face. 
    
    Les cotes de la coulisse seront calculées pour être parfaitement ajustées à celles de votre sous-face.</p>
  `,

}
const policies = [
  { name: 'Livraison', icon: GlobeAmericasIcon, description: 'Lorem ipsum dolor sit amet,' },
  { name: 'Retrait sur site', icon: CurrencyDollarIcon, description: "Lorem ipsum dolor sit amet," },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function SingleProduct() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.materials[2])

  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
   
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
           
              <div className="flex justify-between mt-8 lg:col-span-8">
                <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
                <p className="text-xl font-medium text-gray-900">{product.price} Euros HT</p>
              </div>
           
            

         
            <div className="mt-8 lg:col-span-4 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={classNames(
                      image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                      'rounded-lg'
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-8">
              <form>
                {/* Color picker */}
                <div>
                  <h2 className="text-sm font-medium text-gray-900">Coloris</h2>

                  <fieldset aria-label="Choose a color" className="mt-2">
                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="flex items-center space-x-3"
                    >
                      {product.colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color}
                          aria-label={color.name}
                          className={({ focus, checked }) =>
                            classNames(
                              color.selectedColor,
                              focus && checked ? 'ring ring-offset-1' : '',
                              !focus && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                {/* MATERIALS picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Matière</h2>
                  
                  </div>

                  <fieldset className="mt-2">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                    >
                      {product.materials.map((material) => (
                        <Radio
                          key={material.name}
                          value={material}
                          className={({ focus, checked }) =>
                            classNames(
                              material.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                              focus ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                              checked
                                ? 'border-transparent bg-[#B8AEA7] text-white hover:bg-[#B8AEA7]'
                                : 'border-gray-200 bg-white text-gray-900 hover:bg-[#F2EDEA] hover:border-[#F2EDEA]',
                              'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1'
                            )
                          }
                          disabled={!material.inStock}
                        >
                          {material.name}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>

               



                </div>

                {/* FINITIONS picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Matière</h2>
                  
                  </div>

                  <fieldset className="mt-2">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                    >
                      {product.finitions.map((finition) => (
                        <Radio
                          key={finition}
                          value={finition}
                          className={({ focus, checked }) =>
                            classNames(
                              focus ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                              checked
                                ? 'border-transparent bg-[#B8AEA7] text-white hover:bg-[#B8AEA7]'
                                : 'border-gray-200 bg-white text-gray-900 hover:bg-[#F2EDEA] hover:border-[#F2EDEA]',
                              'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer'
                            )
                          }
                         
                        >
                          {finition}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>



               



                </div>

                <button
                  type="submit"
                  className="uppercase mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-[#B51B1B] px-8 py-3 text-base font-medium text-white hover:bg-[#AE0027] focus:outline-none focus:ring-2 focus:ring-[#AE0027] focus:ring-offset-2"
                >
                  Ajouter à la liste
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">Détails</h2>

                <div className="prose prose-sm mt-4 text-gray-500">
                  <ul role="list">
                    <li>Poids : 125 Gr</li>
                    <li>Epaisseur : 12 mm</li>
                 
                    {/* {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))} */}
                  </ul>
                </div>
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
            

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div key={policy.name} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                      <dt>
                        <policy.icon className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
