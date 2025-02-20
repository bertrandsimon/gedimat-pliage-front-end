'use client'
import { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { evaluate } from 'mathjs'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '@/app/reducers/cart'
import { nanoid } from 'nanoid'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import SimpleGltfModel from '@/components/gltf/SimpleGltfModel'
import { Radio, RadioGroup } from '@headlessui/react'

import { Login } from '@/components/login'
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const policies = [
  {
    name: 'Livraison',
    icon: GlobeAmericasIcon,
    description: 'Lorem ipsum dolor sit amet,',
  },
  {
    name: 'Retrait sur site',
    icon: CurrencyDollarIcon,
    description: 'Lorem ipsum dolor sit amet,',
  },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function SingleProduct({
  item,
  materials,
}: {
  item: any
  materials: any[]
}) {
  console.log('single product : ', item)

  const { toast } = useToast()

  const router = useRouter()
  const userConnected = useSelector((state: any) => state.user.userConnected)
  // console.log('userConnected : ', userConnected)
  const isPro = useSelector((state: any) => state.user.is_pro)

  const [selectedMaterial, setSelectedMaterial] = useState(
    materials?.[0] || null
  )
  const [variations, setVariations] = useState(
    selectedMaterial?.variations || []
  )
  const [selectedVariation, setSelectedVariation] = useState(
    materials?.[0]?.variations?.[0] || null
  )
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + 1))
  }

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))
  }

  const handleChange = (e: any) => {
    const newValue =
      e.target.value === '' ? 1 : Math.max(1, Number(e.target.value))
    setQuantity(newValue)
  }

  // MEASURES

  const [length, setLength] = useState(120)
  const minLength = useMemo(() => {
    return 120
  }, [])

  const maxLength = item.max_length || 3000

  const minA = item?.price_calculation?.min_measures?.A || 0
  const [A, setA] = useState(minA || 0)
  const minB = item?.price_calculation?.min_measures?.B || 0
  const [B, setB] = useState(minB || 0)
  const minC = item?.price_calculation?.min_measures?.C || 0
  const [C, setC] = useState(minC || 0)
  const minD = item?.price_calculation?.min_measures?.D || 0
  const [D, setD] = useState(minD || 0)
  const minE = item?.price_calculation?.min_measures?.E || 0
  const [E, setE] = useState(minE || 0)
  const minF = item?.price_calculation?.min_measures?.F || 0
  const [F, setF] = useState(minF || 0)

  // if (item.price_calculation.custom_angles) {
  // }
  const [angle1, setAngle1] = useState<number | 0>(0)
  const [angle2, setAngle2] = useState<number | 0>(0)
  const [angle3, setAngle3] = useState<number | 0>(0)
  const [angle4, setAngle4] = useState<number | 0>(0)
  const [minAngle1, setMinAngle1] = useState<number | 0>(0)
  const [maxAngle1, setMaxAngle1] = useState<number | 0>(0)
  const [minAngle2, setMinAngle2] = useState<number | 0>(0)
  const [maxAngle2, setMaxAngle2] = useState<number | 0>(0)
  const [minAngle3, setMinAngle3] = useState<number | 0>(0)
  const [maxAngle3, setMaxAngle3] = useState<number | 0>(0)
  const [minAngle4, setMinAngle4] = useState<number | 0>(0)
  const [maxAngle4, setMaxAngle4] = useState<number | 0>(0)

  useEffect(() => {
    if (item.price_calculation.custom_angles) {
      setAngle1(item.price_calculation.min_angles['1'] || 0)
      setAngle2(item.price_calculation.min_angles['2'] || 0)
      setAngle3(item.price_calculation.min_angles['3'] || 0)
      setAngle4(item.price_calculation.min_angles['4'] || 0)
      setMinAngle1(item.price_calculation.min_angles['1'] || 0)
      setMaxAngle1(item.price_calculation.max_angles['1'] || 0)
      setMinAngle2(item.price_calculation.min_angles['2'] || 0)
      setMaxAngle2(item.price_calculation.max_angles['2'] || 0)
      setMinAngle3(item.price_calculation.min_angles['3'] || 0)
      setMaxAngle3(item.price_calculation.max_angles['3'] || 0)
      setMinAngle4(item.price_calculation.min_angles['4'] || 0)
      setMaxAngle4(item.price_calculation.max_angles['4'] || 0)
    }
  }, [item, minAngle1, maxAngle1])

  const handleMeasure = (event: any) => {
    const { name, value } = event.target

    // Update the corresponding state based on the input name
    switch (name) {
      case 'A':
        setA(value)
        break
      case 'B':
        setB(value)
        break
      case 'C':
        setC(value)
        break
      case 'D':
        setD(value)
        break
      case 'E':
        setE(value)
        break
      case 'F':
        setF(value)
        break
      case '1':
        setAngle1(value)
        break
      case '2':
        setAngle2(value)
        break
      case '3':
        setAngle3(value)
        break
      case '4':
        setAngle4(value)
        break
      default:
        break
    }
  }

  // PRICE CALCULATION

  const surfaceCalculation = item.price_calculation.surface_calculation

  const calculateSurface = () => {
    // Replace variables directly in the formula string
    let formula = surfaceCalculation
      .replace(/A/g, A)
      .replace(/B/g, B)
      .replace(/C/g, C)
      .replace(/D/g, D)
      .replace(/E/g, E)
      .replace(/F/g, F)

    // Evaluate the formula using math.js
    try {
      const result = evaluate(formula)
      return result
    } catch (error) {
      console.error('Error evaluating surface formula:', error)
      return null
    }
  }

  const surface = useMemo(calculateSurface, [
    A,
    B,
    C,
    D,
    E,
    F,
    surfaceCalculation,
  ])

  const prn = useMemo(
    () =>
      selectedVariation.price *
      1.111 *
      1.111 *
      (length / 1000) *
      (surface / 1000),
    [surface, selectedVariation, length]
  )
  // (fixedTimeCost)+(quantity * manipTimeCost)
  // prettier-ignore
  const preparationTimeCost = useMemo(() => 10 + (quantity * 5), [quantity])

  // mdo = ( (fixedTimeCost) + (quantity * manipTimeCost) ) * mdoCost
  // prettier-ignore
  const mdo = useMemo(() => 10 + ((quantity * 5) * 2), [quantity])

  const price_ht_single_unit = useMemo(() => {
    if (isPro) {
      return ((prn + mdo) * 1.45) / quantity
    } else {
      return ((prn + mdo) * 1.81) / quantity
    }
  }, [prn, mdo, isPro, quantity])

  const price_ht_total = useMemo(() => {
    return price_ht_single_unit * quantity
  }, [price_ht_single_unit, quantity])

  // useEffect(() => {
  //   console.log('Surface:', surface)
  //   console.log('PRN:', prn)
  //   console.log('MDO:', mdo)
  //   console.log('preparationTimeCost:', preparationTimeCost)
  //   console.log('price_ht_single_unit:', price_ht_single_unit)
  //   console.log('selectedVariation.price :', selectedVariation.price)
  // }, [
  //   surface,
  //   prn,
  //   price_ht_single_unit,
  //   preparationTimeCost,
  //   selectedVariation.price,
  //   mdo,
  // ])

  const handleMaterialChoice = (material: any) => {
    setSelectedMaterial(material)
    setVariations(material.variations)
  }

  const dispatch = useDispatch()

  // Validation function
  const isFormValid = useMemo(() => {
    // Check all conditions
    return (
      quantity > 0 &&
      length >= minLength &&
      length <= maxLength &&
      A >= minA &&
      B >= minB &&
      C >= minC &&
      (!item.price_calculation.custom_angles ||
        (angle1 >= minAngle1 &&
          angle1 <= maxAngle1 &&
          angle2 >= minAngle2 &&
          angle2 <= maxAngle2 &&
          angle3 >= minAngle3 &&
          angle3 <= maxAngle3 &&
          angle4 >= minAngle4 &&
          angle4 <= maxAngle4))
    )
  }, [
    quantity,
    length,
    minLength,
    maxLength,
    A,
    B,
    C,
    minA,
    minB,
    minC,
    angle1,
    minAngle1,
    maxAngle1,
    angle2,
    minAngle2,
    maxAngle2,
    angle3,
    minAngle3,
    maxAngle3,
    angle4,
    minAngle4,
    maxAngle4,
    item.price_calculation.custom_angles,
  ])

  const handleAddToList = () => {
    const newProduct = {
      id: item._id,
      cart_item_id: nanoid(6),
      name: item.name,
      material: selectedMaterial,
      variation: selectedVariation,
      length: length,
      main_image: item.main_image,
      price_ht_single_unit: Number(price_ht_single_unit.toFixed(2)),
      tax: item.tax,
      quantity: quantity,
      measures: {
        A: A ? A : 0,
        B: B ? B : 0,
        C: C ? C : 0,
        D: D ? D : 0,
        E: E ? E : 0,
        F: F ? F : 0,
      },
      angles: {
        angle1: angle1 ? angle1 : 0,
        angle2: angle2 ? angle2 : 0,
        angle3: angle3 ? angle3 : 0,
        angle4: angle4 ? angle4 : 0,
      },
    }

    dispatch(addToCart(newProduct))
    router.push('/cart')
    toast({
      title: `${quantity} produit(s)`,
      description: 'ajouté(s) à votre panier',
    })
  }

  return (
    <div>
      <div className="pb-16 pt-6 sm:pb-24">
        <div className="mx-auto mt-8 sm:max-w-2xl px-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="flex justify-between lg:col-span-8">
              <h1 className="text-md font-medium redAlu uppercase">
                {item.name}
              </h1>
            </div>

            <div className="lg:col-span-4 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <div className="flex flex-col gap-6 sm:mr-8">
                <Image
                  src={`/images/products/${item.main_image}`}
                  width={400}
                  height={400}
                  alt=""
                  className="lg:col-span-2 lg:row-span-2 border border-1 rounded-md"
                ></Image>
                <div>
                  <h2 className="text-sm font-medium">Description</h2>
                  <hr className="mt-6" />
                  <div
                    className="prose prose-sm mt-4 text-sm text-justify"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>

                <div>
                  <h2 className="text-sm font-medium">Vue 3D du produit</h2>
                  <hr className="my-6" />

                  <p className="text-sm">
                    Utilisez votre souris pour faire tourner le produit et votre
                    molette pour zoomer.
                  </p>
                </div>
                <div className="border border-1 p-1 rounded-md h-80 w-84 cursor-pointer">
                  <SimpleGltfModel />
                </div>

                <Image
                  className="cursor-pointer"
                  alt="expertise pliage"
                  width={343}
                  height={153}
                  src="/images/expertise.jpg"
                ></Image>

                <section className="">
                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {policies.map((policy) => (
                      <div
                        key={policy.name}
                        className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                      >
                        <dt>
                          <policy.icon
                            className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />

                          <span className="mt-4 text-sm font-medium text-gray-900">
                            {policy.name}
                          </span>
                        </dt>
                        <dd className="mt-1 text-sm text-gray-500">
                          {policy.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>

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
              <Separator className="mb-5" />

              <form>
                {/* MATERIALS picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      width={30}
                      height={30}
                      src="/images/1.png"
                      alt=""
                    ></Image>
                    <h2 className="font-medium text-lg text-gray-900">
                      Choisir une matière
                    </h2>
                  </div>
                  <div className="flex items-center justify-start gap-4">
                    <div className="min-w-[30px]"></div>
                    <p className="text-xs">
                      pour ce produit nous vous recommandons :
                    </p>
                    {item.price_calculation.prefered_materials.map(
                      (prefered_material: any) => (
                        <p className="text-xs" key={prefered_material}>
                          {prefered_material} <span className="ml-4"> | </span>
                        </p>
                      )
                    )}
                  </div>
                  <hr className="my-4" />

                  <fieldset className="mt-2">
                    <RadioGroup
                      value={selectedMaterial}
                      onChange={handleMaterialChoice}
                      className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                    >
                      {materials.map((material: any, index: any) => (
                        <Radio
                          key={index}
                          value={material}
                          className={({ focus, checked }) =>
                            classNames(
                              'cursor-pointer focus:outline-none text-center',
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
                <div className="mt-8">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      width={30}
                      height={30}
                      src="/images/2.png"
                      alt=""
                    ></Image>
                    <h2 className="font-medium text-lg text-gray-900">
                      Choisir une variation
                    </h2>
                  </div>

                  <hr className="my-4" />
                  <fieldset className="mt-2">
                    <RadioGroup
                      value={selectedVariation}
                      onChange={setSelectedVariation}
                      className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                    >
                      {variations.map((variation: any) => (
                        <div
                          key={variation.name}
                          className={`cursor-pointer flex flex-col items-center gap-2 rounded-md border p-4 border-gray-200 
                            ${
                              selectedVariation === variation
                                ? 'bg-[#B8AEA7] text-white'
                                : 'hover:bg-[#F2EDEA] hover:border-[#F2EDEA]'
                            }`}
                          onClick={() => setSelectedVariation(variation)}
                        >
                          <Radio
                            value={variation}
                            className={({ focus, checked }) =>
                              classNames(
                                focus && checked ? 'ring-offset-1 ' : '',
                                !focus && checked ? 'ring-2 ring-white' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none '
                              )
                            }
                          >
                            {/* VARIATIONS display */}
                            <span
                              className="h-8 w-8 rounded-full border border-black border-opacity-10"
                              style={{ backgroundColor: variation.color_hexa }}
                            />
                          </Radio>
                          <div className="text-sm flex flex-col gap-1 text-center ">
                            <p className="text-md pt-1">
                              {variation.name.length > 20
                                ? variation.name.slice(0, 20)
                                : variation.name}
                            </p>
                            <hr className="my-2" />
                            <div className="flex justify-center items-center gap-1">
                              <p className="text-xs">{variation.thickness}</p>
                              <span className="text-xs"> mm</span>
                              <p>|</p>
                              <p className="text-xs">{variation.provider}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                {/* MEASURES */}
                <div className="mt-8">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      width={30}
                      height={30}
                      src="/images/3.png"
                      alt=""
                    ></Image>
                    <h2 className="font-medium text-lg text-gray-900">
                      Entrez les mesures
                    </h2>
                  </div>

                  <hr className="my-4" />
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
                  {/* col1 */}
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={`/images/products/schemas/${item.schema_img}`}
                          width={400}
                          height={400}
                          alt=""
                          className="lg:col-span-2 lg:row-span-2 border border-1 rounded-md cursor-pointer"
                        ></Image>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogTitle className="DialogTitle"></DialogTitle>
                        <Image
                          src={`/images/products/schemas/${item.schema_img}`}
                          width={600}
                          height={600}
                          alt=""
                          className="lg:col-span-2 lg:row-span-2 border border-1 rounded-md cursor-pointer"
                        ></Image>
                      </DialogContent>
                    </Dialog>
                    <div className="py-6 flex justify-start items-center gap-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <span className="cursor-pointer text-sm underline">
                            Guide calcul angles
                          </span>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogTitle></DialogTitle>
                          <Image
                            src="/images/products/angle_calculation/calculation_angle.jpg"
                            width={600}
                            height={600}
                            alt="Guide de calcul des angles"
                            className="rounded-md"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  {/* col1 */}

                  {/* col2 */}
                  <div className="flex flex-col justify-start gap-4">
                    {/* input A */}
                    {item.price_calculation.measures.hasOwnProperty('A') && (
                      <div className="flex justify-start items-center gap-2">
                        <label htmlFor="A" className="text-sm">
                          Mesure A :
                        </label>
                        <input
                          onChange={handleMeasure}
                          value={A}
                          type="number"
                          name="A"
                          id="A"
                          min={minA}
                          className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                        <span className="text-sm">mm</span>
                        {A < minA && (
                          <p className="text-red-500 text-sm">
                            Minimum {minA} mm
                          </p>
                        )}
                      </div>
                    )}
                    {/* input A */}

                    {/* input B */}
                    {item.price_calculation.measures.hasOwnProperty('A') && (
                      <div className="flex justify-start items-center gap-2">
                        <label htmlFor="B" className="text-sm">
                          Mesure B :
                        </label>
                        <input
                          onChange={handleMeasure}
                          value={B}
                          type="number"
                          name="B"
                          id="B"
                          min={minB}
                          className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                        <span className="text-sm">mm</span>
                        {B < minB && (
                          <p className="text-red-500 text-sm">
                            Minimum {minB} mm
                          </p>
                        )}
                      </div>
                    )}
                    {/* input B */}

                    {/* input C */}
                    {item.price_calculation.measures.hasOwnProperty('C') && (
                      <div className="flex justify-start items-center gap-2">
                        <label htmlFor="C" className="text-sm">
                          Mesure C :
                        </label>
                        <input
                          onChange={handleMeasure}
                          value={C}
                          type="number"
                          name="C"
                          id="C"
                          min={minC}
                          className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                        <span className="text-sm">mm</span>
                        {C < minC && (
                          <p className="text-red-500 text-sm">
                            Minimum {minC} mm
                          </p>
                        )}
                      </div>
                    )}
                    {/* input C */}

                    {/* Angle 1 */}
                    {item.price_calculation.custom_angles &&
                      item.price_calculation.min_angles.hasOwnProperty('1') && (
                        <div className="flex justify-start items-center gap-2">
                          <label htmlFor="1" className="text-sm">
                            Angle 1 :
                          </label>
                          <input
                            onChange={handleMeasure}
                            value={angle1}
                            type="number"
                            name="1"
                            id="1"
                            min={minAngle1}
                            className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          />
                          <span className="text-sm">degrés</span>
                          {angle1 < minAngle1 && (
                            <p className="text-red-500 text-sm">
                              Minimum {minAngle1} degrés
                            </p>
                          )}

                          {angle1 > maxAngle1 && (
                            <p className="text-red-500 text-sm">
                              Maximum {maxAngle1} degrés
                            </p>
                          )}
                        </div>
                      )}
                    {/* Angle 2 */}

                    {item.price_calculation.custom_angles &&
                      item.price_calculation.min_angles.hasOwnProperty('2') && (
                        <div className="flex justify-start items-center gap-2">
                          <label htmlFor="2" className="text-sm">
                            Angle 2 :
                          </label>
                          <input
                            onChange={handleMeasure}
                            value={angle2}
                            type="number"
                            name="2"
                            id="2"
                            min={minAngle2}
                            className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          />
                          <span className="text-sm">degrés</span>
                          {angle2 < minAngle2 && (
                            <p className="text-red-500 text-sm">
                              Minimum {minAngle1} degrés
                            </p>
                          )}

                          {angle2 > maxAngle2 && (
                            <p className="text-red-500 text-sm">
                              Maximum {maxAngle2} degrés
                            </p>
                          )}
                        </div>
                      )}

                    {/* Angle 3 */}

                    {item.price_calculation.custom_angles &&
                      item.price_calculation.min_angles.hasOwnProperty('3') && (
                        <div className="flex justify-start items-center gap-2">
                          <label htmlFor="3" className="text-sm">
                            Angle 3 :
                          </label>
                          <input
                            onChange={handleMeasure}
                            value={angle3}
                            type="number"
                            name="3"
                            id="3"
                            min={minAngle3}
                            className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          />
                          <span className="text-sm">degrés</span>
                          {angle3 < minAngle3 && (
                            <p className="text-red-500 text-sm">
                              Minimum {minAngle1} degrés
                            </p>
                          )}

                          {angle3 > maxAngle3 && (
                            <p className="text-red-500 text-sm">
                              Maximum {maxAngle3} degrés
                            </p>
                          )}
                        </div>
                      )}

                    {/* Angle 4 */}

                    {item.price_calculation.custom_angles &&
                      item.price_calculation.min_angles.hasOwnProperty('4') && (
                        <div className="flex justify-start items-center gap-2">
                          <label htmlFor="4" className="text-sm">
                            Angle 3 :
                          </label>
                          <input
                            onChange={handleMeasure}
                            value={angle4}
                            type="number"
                            name="4"
                            id="4"
                            min={minAngle4}
                            className="text-center block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          />
                          <span className="text-sm">degrés</span>
                          {angle4 < minAngle4 && (
                            <p className="text-red-500 text-sm">
                              Minimum {minAngle1} degrés
                            </p>
                          )}

                          {angle4 > maxAngle4 && (
                            <p className="text-red-500 text-sm">
                              Maximum {maxAngle4} degrés
                            </p>
                          )}
                        </div>
                      )}
                  </div>

                  {/* col2 */}
                </div>

                {/* QUANTITY */}
                <div className="mt-8">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      width={30}
                      height={30}
                      src="/images/4.png"
                      alt=""
                    ></Image>
                    <h2 className="font-medium text-lg text-gray-900">
                      Entrez les quantités
                    </h2>
                  </div>

                  <hr className="my-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                  <div className="flex flex-col">
                    <div className="mt-8 flex items-center gap-2">
                      <p>Longueur:</p>
                      <input
                        type="number"
                        value={length} // Show empty string if quantity is 0
                        onChange={(e) =>
                          setLength(
                            e.target.value === '' ? 0 : Number(e.target.value)
                          )
                        }
                        min=""
                        step="1"
                        className="block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-center"
                      />
                      <span>mm</span>
                      {length < minLength && (
                        <p className="text-red-500 text-sm">
                          Minimum {minLength} mm
                        </p>
                      )}
                      {length > maxLength && (
                        <p className="text-red-500 text-sm">
                          Maximum {maxLength} mm
                        </p>
                      )}
                    </div>

                    <div className="mt-8 flex items-center gap-2">
                      <p>Nombre de produits :</p>
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="bg-gray-200 p-2 py-1 px-2 rounded-md text-gray-800 hover:bg-gray-300"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity === 1 ? 1 : quantity} // Show empty string if quantity is 0
                        onChange={handleChange}
                        min="1"
                        step="1"
                        className="block w-16 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-center"
                      />
                      <button
                        type="button"
                        onClick={handleIncrement}
                        className="bg-gray-200 p-2 py-1 px-2 rounded-md text-gray-800 hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center sm:items-end rounded-md border border-[#B8AEA7] my-4 py-8 sm:py-0 mt-10 sm:mt-0 gap-2 ">
                    <div className="flex justify-center items-center gap-4 mr-4">
                      <p>TARIF UNITAIRE :</p>
                      <span className="font-semibold text-xl redAlu">
                        {price_ht_single_unit.toFixed(2)} €
                      </span>
                      <span className="text-xs">HT</span>
                    </div>

                    <div className="flex justify-center items-center gap-4 mr-4">
                      <p className="text-sm">Prix total HT :</p>
                      <span className="font-semibold text-sm">
                        {Number(price_ht_total.toFixed(2))} €
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddToList}
                  disabled={!isFormValid || !userConnected} // Disable button when quantity is 0
                  className={`uppercase mt-8 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 
                  ${
                    !isFormValid || !userConnected
                      ? 'bg-[#cfcfcf] cursor-not-allowed'
                      : 'bg-[#B51B1B] hover:bg-[#AE0027] focus:ring-[#AE0027]'
                  }`} // Conditional classNames
                >
                  Ajouter {quantity > 0 && quantity} PRODUIT(S) à votre liste
                </button>

                {!userConnected && (
                  <div className="pt-4 flex justify-center items-center gap-4">
                    <div className="text-sm">
                      Vous devez être connecté pour ajouter des produits :
                    </div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" className="text-xs">
                          Je me connecte
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="max-w-lg">
                        <AlertDialogHeader>
                          <AlertDialogDescription>
                            <Login />
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                )}
              </form>

              {/* Product details */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
