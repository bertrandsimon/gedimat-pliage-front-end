
'use client'
import Image from "next/image"
import Link from "next/link"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, clearCart, cartItemCount } from "@/app/reducers/cart"
import Steps from "@/components/homepage/steps"
import OrderConfirmation from "./orderConfirmation"

import {
  MoreHorizontal,

} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



export default function Cart() {

    const [orderSuccess, setOrderSuccess] = useState(false)

    const dispatch = useDispatch()


    const cartItems = useSelector((state: any) => state.cart.cart);
    const customer_id = useSelector((state: any) => state.user.userId)
    const totalPriceHT = cartItems.reduce((total: number, item: any) => total + item.price_ht, 0)
    const totalPriceTTC = totalPriceHT * 1.2
    const orderDataTotalHT = totalPriceHT.toFixed(2)
    const orderDataTotalTTC = totalPriceTTC.toFixed(2)

    const orderDatas = {
        created_at : new Date(),
        customer_id : customer_id,
        products : cartItems,
        orderDataTotalHT : orderDataTotalHT,
        orderDataTotalTTC: orderDataTotalTTC
    }

    const handleClickRemove = (id: any) => {
       dispatch(removeFromCart({ id: id }))
      }

      const handleValidateOrder = (orderDatas:any) => {
        console.log("orderDatas on handleclick:", orderDatas)
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/orders/createOrder`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderDatas  }),
          })
            .then((response) => response.json())
            .then((data) => {
              
              if (data.result === true) {
                setOrderSuccess(true)
                dispatch(clearCart())
            
                
              } else {
              
                
              }
            })
            .catch((error) => {
              console.error('Error during order creation:', error);
            });

      }
    
    const listOfItems = cartItems.map( (item:any, index:number) => (
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
        <TableCell className="font-medium">
          {item.name}
        </TableCell>
      
        <TableCell>{item.price_ht} €</TableCell>
        <TableCell>{(item.price_ht * 1.2).toFixed(2)} €</TableCell>

        {/* <TableCell className="hidden md:table-cell">
          25
        </TableCell> */}

        
     
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-haspopup="true"
                size="icon"
                variant="ghost"
              >
                <MoreHorizontal className="h-4 w-4" />
              
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleClickRemove(item.id)} className="cursor-pointer">Supprimer</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>

    ))
    
    
    return (
        <>
        
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            { !orderSuccess && <CardTitle>Votre panier</CardTitle> }
            { !orderSuccess && 
            <CardDescription>
              Voir votre liste de produits et passer commande
            
            </CardDescription>
            }
           
            {orderSuccess && <OrderConfirmation/>}
          </CardHeader>

        { !orderSuccess &&
          <CardContent>
            <Table>
            
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Prix HT</TableHead>
                  <TableHead>Prix TTC</TableHead>
                  {/* <TableHead className="hidden md:table-cell">
                    Qté
                  </TableHead> */}
                
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>


              <TableBody>
               
            

              {listOfItems}


              </TableBody>
            </Table>
          </CardContent>
        }
        </Card>

        <Steps/>

        { !orderSuccess &&
            <Card className="my-8">
            <CardHeader>
                <CardTitle>Votre total</CardTitle>
                <CardDescription>
                Montant de votre commande
                
                </CardDescription>
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
                    
                    <TableCell>{orderDataTotalHT} €</TableCell>
                    <TableCell>20 %</TableCell>
                    <TableCell>{orderDataTotalTTC} €</TableCell>
                </TableRow>
            
            </Table>

            </CardContent>
            </Card>
        }

        { !orderSuccess &&           
            <div>
            <button
                    onClick={() => handleValidateOrder(orderDatas)}
                    className="uppercase mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-[#B51B1B] px-8 py-3 text-base font-medium text-white hover:bg-[#AE0027] focus:outline-none focus:ring-2 focus:ring-[#AE0027] focus:ring-offset-2"
                    >
                    Valider la commande
            </button>
            </div>
        }
        
       

        </>
      
    )

}