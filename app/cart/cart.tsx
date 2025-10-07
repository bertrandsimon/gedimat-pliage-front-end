'use client'
import Image from 'next/image'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, clearCart, cartItemCount } from '@/app/reducers/cart'

import OrderConfirmation from './orderConfirmation'

import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Cart() {
  const [orderSuccess, setOrderSuccess] = useState(false)

  const dispatch = useDispatch()

  const cartItems = useSelector((state: any) => state.cart.cart)

  const customer_id = useSelector((state: any) => state.user.userId)
  const email = useSelector((state: any) => state.user.email)

  const totalPriceHT = cartItems.reduce(
    (total: number, item: any) =>
      total + item.price_ht_single_unit * item.quantity,
    0
  )
  const totalPriceTTC = totalPriceHT * 1.2
  const orderDataTotalHT = Number(totalPriceHT.toFixed(2))
  const orderDataTotalTTC = Number(totalPriceTTC.toFixed(2))

  const orderDatas = {
    created_at: new Date(),
    customer_id: customer_id,
    products: cartItems,
    orderDataTotalHT: orderDataTotalHT,
    orderDataTotalTTC: orderDataTotalTTC,
  }

  const handleClickRemove = (cart_item_id: any) => {
    dispatch(removeFromCart({ cart_item_id: cart_item_id }))
  }

  const handleValidateOrder = (orderDatas: any) => {
    // console.log('orderDatas on handleclick:', orderDatas)
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/orders/createOrder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderDatas }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          //console.log('order_id : ', data.order._id)
          setOrderSuccess(true)
          dispatch(clearCart())
          const mailOrderDate = orderDatas.created_at
          const orderId = data.order._id

          // Trigger the order confirmation email API
          fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/emails/order_confirmation`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, mailOrderDate, orderId }),
            }
          )
          // Trigger new order to admin email API
          fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/emails/order_confirmation_to_admin`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, mailOrderDate, orderId }),
            }
          )
        } else {
        }
      })
      .catch((error) => {
        console.error('Error during order creation:', error)
      })
  }

  const listOfItems = cartItems.map((item: any, index: number) => (
    <TableRow key={index}>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={`/images/products/${item.main_image}`}
          width="64"
        />
      </TableCell>
      <TableCell>
        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase">{item.name}</p>
          <ul className="list-disc pl-3 text-sm">
            <li>{item.material.name}</li>
            <li>{item.variation.name}</li>
          </ul>
        </div>
      </TableCell>
      <TableCell>
        <ul className="flex flex-col gap-1 list-disc text-xs">
          {item.measures.A !== 0 && <li>A : {item.measures.A} mm</li>}
          {item.measures.B !== 0 && <li>B : {item.measures.B} mm</li>}
          {item.measures.C !== 0 && <li>C : {item.measures.C} mm</li>}
          {item.measures.D !== 0 && <li>D : {item.measures.D} mm</li>}
          {item.measures.E !== 0 && <li>E : {item.measures.E} mm</li>}
          {item.measures.F !== 0 && <li>F : {item.measures.F} mm</li>}
          {item.angles.angle1 !== 0 && (
            <li>Angle 1 : {item.angles.angle1} °</li>
          )}
          {item.angles.angle2 !== 0 && (
            <li>Angle 2 : {item.angles.angle2} °</li>
          )}
          {item.angles.angle3 !== 0 && (
            <li>Angle 3 : {item.angles.angle3} °</li>
          )}
          {item.angles.angle4 !== 0 && (
            <li>Angle 4 : {item.angles.angle4} °</li>
          )}
          {item.length !== 0 && <li>Longueur : {item.length} mm</li>}
        </ul>
      </TableCell>
      <TableCell className="text-left redAlu font-bold">
        {item.price_ht_single_unit} €
      </TableCell>
      <TableCell>{item.quantity} </TableCell>
      <TableCell>
        {(item.quantity * item.price_ht_single_unit).toFixed(2)} €
      </TableCell>
      <TableCell className="font-bold">
        {Number((item.quantity * item.price_ht_single_unit * 1.2).toFixed(2))} €
      </TableCell>

      {/* <TableCell className="hidden md:table-cell">
          25
        </TableCell> */}

      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => handleClickRemove(item.cart_item_id)}
              className="cursor-pointer"
            >
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  ))

  return (
    <>


      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          {!orderSuccess && <CardTitle>Votre panier</CardTitle>}
          {!orderSuccess && (
            <CardDescription>
              Voir votre liste de produits et passer commande
            </CardDescription>
          )}

          {orderSuccess && <OrderConfirmation />}
        </CardHeader>




        {!orderSuccess && (
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead className="text-left">Nom</TableHead>
                  <TableHead className="text-left">Mesures</TableHead>
                  <TableHead className="text-left">Prix unitaire</TableHead>
                  <TableHead className="text-left">Qté</TableHead>
                  <TableHead className="text-left">Prix HT</TableHead>
                  <TableHead className="text-left">Prix TTC</TableHead>

                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>{listOfItems}</TableBody>
            </Table>
          </CardContent>
        )}
      </Card>


      {!orderSuccess && cartItems.length === 0 && (
        <div>
          <p className="p-12">il n'y a pas de produits dans votre panier</p>
        </div>
      )}


      {!orderSuccess && (
        <Card className="my-8">
          <CardHeader>
            <CardTitle>Votre total</CardTitle>
            <CardDescription>Montant de votre commande</CardDescription>
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prix HT</TableHead>
                  <TableHead>TVA</TableHead>
                  <TableHead>Prix TTC</TableHead>
                </TableRow>
              </TableHeader>

              <TableRow>
                <TableCell className="font-bold">
                  {orderDataTotalHT} €
                </TableCell>
                <TableCell>20 %</TableCell>
                <TableCell className="font-bold">
                  {orderDataTotalTTC} €
                </TableCell>
              </TableRow>
            </Table>
          </CardContent>
        </Card>
      )}
      {!orderSuccess && cartItems.length > 0 && (
        <div>
          <button
            onClick={() => handleValidateOrder(orderDatas)}
            className="uppercase mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-[#B51B1B] px-8 py-3 text-base font-medium text-white hover:bg-[#AE0027] focus:outline-none focus:ring-2 focus:ring-[#AE0027] focus:ring-offset-2"
          >
            Valider la commande
          </button>
        </div>
      )}


    </>
  )
}
