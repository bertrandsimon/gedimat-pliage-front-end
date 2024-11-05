'use client'
import { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { evaluate } from 'mathjs';
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from "@/app/reducers/cart"
import { loggedStatus, userId, loggedName, loggedSurname, loggedToken, isPro } from "@/app/reducers/user"

import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
//import {ProductInterface} from '@/app/interfaces/product'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/button'

const policies = [
  { name: 'Livraison', icon: GlobeAmericasIcon, description: 'Lorem ipsum dolor sit amet,' },
  { name: 'Retrait sur site', icon: CurrencyDollarIcon, description: "Lorem ipsum dolor sit amet," },
]


function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function SingleProduct({item, materials}: { item: any; materials: any[] }) {

  const { toast } = useToast()
  
  const isPro = useSelector((state:any) => state.user.is_pro); 
  
  console.log("isPro : ", isPro)
  const [selectedColor, setSelectedColor] = useState(item.colors?.[0] || null);
  const [selectedMaterial, setSelectedMaterial] = useState(materials?.[0] || null);
  const [variations, setVariations] = useState(selectedMaterial?.variations || []);
  const [selectedVariation, setSelectedVariation] = useState(materials?.[0]?.variations?.[0] || null);
  const [selectedThickness, setSelectedThickness] = useState(item.material_thickness?.[0] || null);
  const [quantity, setQuantity] = useState(1)

  

  // MEASURES

  
  const getInitialValue = (key:any) => {
    // Check if the key exists in the object
    if (item.price_calculation.measures.hasOwnProperty(key)) {
      return null; // Set to null if key exists
    }
    return undefined; // Set to undefined if key does not exist
  };

  const [width, setWidth] = useState(0)
  
  const minA = item.price_calculation.min_measures.A
  const [A, setA] = useState(minA)
  const minB = item.price_calculation.min_measures.B
  const [B, setB] = useState(minB)
  const minC = item.price_calculation.min_measures.C
  const [C, setC] = useState(minC || 0)
  const minD = item.price_calculation.min_measures.D
  const [D, setD] = useState(minD)
  const minE = item.price_calculation.min_measures.E
  const [E, setE] = useState(minE)
  const minF = item.price_calculation.min_measures.F
  const [F, setF] = useState(minF)




  const handleMeasure = (event: any) => {
    const { name, value } = event.target;

    // Update the corresponding state based on the input name
    switch (name) {
      case 'A':
        setA(value);
        break;
      case 'B':
        setB(value);
        break;
      case 'C':
        setC(value);
        break;
      case 'D':
        setD(value);
        break;
      case 'E':
        setE(value);
        break;
      case 'F':
        setF(value);
        break;
      default:
        break;
    }

    
  };

  // PRICE CALCULATION
 
  // 1/ surface calculation
  const surfaceCalculation = item.price_calculation.surface_calculation
  
  const calculateSurface = () => {
    // Replace variables directly in the formula string
    let formula = surfaceCalculation
      .replace(/A/g, A)
      .replace(/B/g, B)
      .replace(/C/g, C)
      .replace(/D/g, D)
      .replace(/E/g, E)
      .replace(/F/g, F);

    // Evaluate the formula using math.js
    try {
      const result = evaluate(formula);
      console.log("Calculated Surface:", result); // Log the result
      return result;
    } catch (error) {
      console.error("Error evaluating surface formula:", error);
      return null;
    }
  };


  // Prix de revient
  const calculatePrn = () => {
    return calculateSurface() * selectedVariation.price
    
   } 


     // Memoize the calculations
  //console.log("selectedVariation", selectedVariation)

  const surface = useMemo(calculateSurface, [A, B, C, D, E, F, surfaceCalculation]);
  // * selectedVariation.price
  
  const prn = useMemo(() => (selectedVariation.price * 1.111 *1.111) * (width / 1000) * (surface/1000) , [surface, selectedVariation, width]);

  // mdo = ( (fixedTimeCost) + (quantity * manipTimeCost) ) * mdoCost
  const mdo = useMemo(() => ((10 + (quantity * 5 )) * 2), [quantity])

  const price = useMemo(() => (prn + mdo) * 1.45, [prn, width, quantity]);
  

// Log calculations when measures change
useEffect(() => {
  console.log("Surface:", surface);
  console.log("PRN:", prn);
  console.log("MDO:", mdo);
  console.log("Price:", price);
}, [surface, prn, price]);
// 2/ PRN calculation

 // PRICE

  const handleMaterialChoice = (material:any) => {

    setSelectedMaterial(material)
    setVariations(material.variations)
  };

 


  // REDUX

  const dispatch = useDispatch()

  const handleAddToList = () => {
    const newProduct = {
      id: item._id, 
      name: item.name, 
      color: selectedColor,
      material : selectedMaterial,
      material_thickness : "",
      material_finition : "",
      width: item.width,
      main_image: item.main_image,
      price_ht: item.price_ht,
      tax: item.tax,
      quantity : quantity,
    }
    dispatch(addToCart(newProduct))
  
  
  }







  
  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
   
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
           
              <div className="flex justify-between lg:col-span-8">
                <h1 className="text-xl font-medium text-gray-900">{item.name}</h1>
                {/* <p className="text-xl font-medium text-gray-900">{price} Euros HT</p> */}
              </div>

              
           
    {/* <Button
      onClick={() => {
        toast({
          title: "Produit ajouté",
          description: "Vous avez ajouté un produit à votre liste",
        })
      }}
    >
      Show Toast
    </Button> */}
       
         
            <div className="mt-8 lg:col-span-4 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <Image src={`/images/products/${item.main_image}`}  width={400} height={400} alt='' className='lg:col-span-2 lg:row-span-2 border border-1 rounded-md'></Image>
                {/* {product.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={classNames(
                      image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                      'rounded-lg'
                    )}
                  />
                ))} */}
              </div>
            </div>

            <div className="mt-8 lg:col-span-8">
            <Separator className='mb-5'/>

              <form>

               

                {/* MATERIALS picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-start gap-4">
                    <Image width={30} height={30} src="/images/1.png" alt=""></Image>
                    <h2 className="font-medium text-lg text-gray-900">Choisir une matière</h2>
                    
                  </div>
                  <hr className='my-4'/>
                  <fieldset className="mt-2">
                    <RadioGroup
                      value={selectedMaterial}
                      //onChange={setSelectedMaterial}
                      onChange={handleMaterialChoice}
                      className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                    >
                      {materials.map((material:any, index:any) => (
                        <Radio
                          key={index}
                         
                          value={material}
                          className={({ focus, checked }) =>
                            classNames(
                              'cursor-pointer focus:outline-none text-center'
                              ,
                              checked
                                ? 'border-transparent bg-[#B8AEA7] text-white hover:bg-[#B8AEA7]'
                                : 'border-gray-200 bg-white text-gray-900 hover:bg-[#F2EDEA] hover:border-[#F2EDEA]',
                              'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium sm:flex-1'
                            )
                          }
                          
                        >
                          {material.name}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>

                </div>
                
              {/* VARIATIONS picker */}
              <div className='mt-8'>
              <div className="flex items-center justify-start gap-4">
                    <Image width={30} height={30} src="/images/2.png" alt=""></Image>
                    <h2 className="font-medium text-lg text-gray-900">Choisir une variation</h2>
                    
              </div>
                
                    <hr className='my-4'/>
                  <fieldset className="mt-2">
                    <RadioGroup
                      value={selectedVariation}
                      onChange={setSelectedVariation}
                      className="grid grid-cols-4 gap-4"
                      // className="flex items-center space-x-3"
                    >
                      {variations.map((variation:any) => (
                        <div key={variation.name} className='flex flex-col items-center gap-4 rounded-md border p-4 border-gray-200'>
                          <Radio
                            
                            value={variation}
                          
                            className={({ focus, checked }) =>
                              classNames(
                                focus && checked ? 'ring-offset-1' : '',
                                !focus && checked ? 'ring-2' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                              )
                            }
                        
                          >
                            {/* VARIATIONS display */}
                            <span
                              className="h-8 w-8 rounded-full border border-black border-opacity-10"
                              style={{ backgroundColor: variation.color_hexa }}
                            />
                            
                          

                          </Radio>
                          <div className='text-sm flex flex-col gap-1 text-center'>
                            <p>{variation.name}</p>
                            <hr className='my-2'/>
                            <p><span>{variation.thickness}</span><span> mm</span></p>
                            <hr className='my-2'/>
                            <p>{variation.provider}</p>
                            
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
              

                
                {/* MEASURES */}
                <div className='mt-8'>
                <div className="flex items-center justify-start gap-4">
                    <Image width={30} height={30} src="/images/3.png" alt=""></Image>
                    <h2 className="font-medium text-lg text-gray-900">Entrez les mesures</h2>
                    
                </div>
               
                <hr className='my-4'/>
                </div>

               

  
                <div className='mt-8 grid grid-cols-2 gap-12'>
                    
                    {/* col1 */}
                    <div> 
                    <Image src="/images/products/schemas/schema.jpg"  width={400} height={400} alt='' className='lg:col-span-2 lg:row-span-2 border border-1 rounded-md'></Image>
                    </div>
                    {/* col1 */}
                    
                    {/* col2 */} 
                    <div className='flex flex-col justify-start gap-4'>
                     {/* input A */}
                      {item.price_calculation.measures.hasOwnProperty('A') && (
                      
                          <div className="flex justify-start items-center gap-2">
                            <label htmlFor="A" className='text-sm'>Mesure A :</label>
                            <input
                              onChange={handleMeasure}
                              value={A}
                              type="number"
                              name="A"
                              id="A"
                              min={minA}
                              className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                            <span className='text-sm'>mm</span>
                            {A < minA && (
                              <p className="text-red-500 text-sm">Minimum {minA} mm</p>
                            )}
                          
                          </div>
                        
                      )}{/* input A */}
                      
                    {/* input B */}
                    {item.price_calculation.measures.hasOwnProperty('A') && (
                      
                      <div className="flex justify-start items-center gap-2">
                        <label htmlFor="B" className='text-sm'>Mesure B :</label>
                        <input
                          onChange={handleMeasure}
                          value={B}
                          type="number"
                          name="B"
                          id="B"
                          min={minB}
                          className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                        <span className='text-sm'>mm</span>
                        {B < minB && (
                          <p className="text-red-500 text-sm">Minimum {minB} mm</p>
                        )}
                      
                      </div>
                    
                    )}{/* input B */}

                     {/* input C */}
                     {item.price_calculation.measures.hasOwnProperty('C') && (
                      
                      <div className="flex justify-start items-center gap-2">
                        <label htmlFor="C" className='text-sm'>Mesure C :</label>
                        <input
                          onChange={handleMeasure}
                          value={C}
                          type="number"
                          name="C"
                          id="C"
                          min={minC}
                          className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                        <span className='text-sm'>mm</span>
                        {C < minC && (
                          <p className="text-red-500 text-sm">Minimum {minC} mm</p>
                        )}
                      
                      </div>
                    
                    )}{/* input C */}
                    
                    </div>

                    
                    {/* col2 */}
                    
                    

                </div>

                {/* QUANTITY */}
                <div className='mt-8'>
                <div className="flex items-center justify-start gap-4">
                    <Image width={30} height={30} src="/images/4.png" alt=""></Image>
                    <h2 className="font-medium text-lg text-gray-900">Entrez les quantités</h2>
                    
              </div>
                  
                  <hr className='my-4'/>
                </div>
                
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col'>

                    <div className='mt-8 flex items-center gap-2'>
                        <p>Longueur de la pièce :</p>
                        <input 
                      type="number" 
                      value={width}  // Show empty string if quantity is 0
                      onChange={(e) => setWidth(e.target.value === "" ? 0 : Number(e.target.value))} 
                      min="0" 
                      step="1" 
                      className="block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-center"
                    />
                    <span>mm</span>
                    </div>

                    <div className='mt-8 flex items-center gap-2'>
                        <p>Nombre de produits  :</p>
                        <input 
                      type="number" 
                      value={quantity === 0 ? "" : quantity}  // Show empty string if quantity is 0
                      onChange={(e) => setQuantity(e.target.value === "" ? 0 : Number(e.target.value))} 
                      min="0" 
                      step="1" 
                      className="block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-center"
                    />
                    </div>


                  </div>

                  <div className='flex justify-center items-center pt-8 gap-8'>
                    <p>TARIF :</p>
                    <span className='font-semibold text-xl redAlu'>{price.toFixed(2)}  </span><span className='text-xs'>€ TTC</span>
                    
                  </div>
                  
                </div>
             

                {/* PRICE */}

                <div className='mt-8'>
                  <h2 className="text-lg font-medium text-gray-900">Tarif</h2>
                  <hr className='my-4'/>
                </div>

                <button
               onClick={handleAddToList}
                disabled={quantity === 0}  // Disable button when quantity is 0
                className={`uppercase mt-8 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 
                  ${quantity === 0 ? 'bg-[#cfcfcf] cursor-not-allowed' : 'bg-[#B51B1B] hover:bg-[#AE0027] focus:ring-[#AE0027]'}`}  // Conditional classNames
                >
                  Ajouter {quantity >0 && quantity} PRODUIT(S) à votre liste
                </button>

              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">Détails</h2>

                <div className="prose prose-sm mt-4 text-gray-500">
                  <ul role="list">
                    <li>Longueur : {item.length} mm</li>
                    <li>Poids : {item.weight} gr</li>
                    <li>Epaisseur : {selectedThickness} mm</li>
                 
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