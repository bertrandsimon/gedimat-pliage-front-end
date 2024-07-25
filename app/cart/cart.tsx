
'use client'
import Image from "next/image"
import Link from "next/link"

import { useSelector } from "react-redux"
import { loggedStatus, loggedName, loggedSurname, loggedToken } from "@/app/reducers/user"


import {

    Divide,
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

    
    const cartItems = useSelector((state: any) => state.cart.cart);
    console.log ("cartItems :", cartItems)
    
    const listOfItems = cartItems.map( (item:any) => (
        <TableRow key={item._id}>
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
              <DropdownMenuItem>Supprimer</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>

    ))
    
    
    return (
        
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Votre panier</CardTitle>
            <CardDescription>
              Voir votre liste de produits et passer commande
            
            </CardDescription>
          </CardHeader>
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
       
        </Card>
      
    )

}