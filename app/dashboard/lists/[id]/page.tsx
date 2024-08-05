
import Image from 'next/image'

export const dynamic = 'force-dynamic'

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

export default async function Page({params}:any) {
   
   const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/orders/ordersByUser/${params.id}`)
 
   const orders = await response.json()

   console.log("orders in Lists", orders)
  const listOfOrders:any = orders.map( (order:any, index:number) => (
    <TableRow key={index}>
    <TableCell className="hidden sm:table-cell">
      {/* <Image
        alt="Product image"
        className="aspect-square rounded-md object-cover"
        height="64"
        src={`/images/products/${item.main_image}`}
        width="64"
      /> */}
    </TableCell>
    <TableCell className="font-medium">
      {order.total_amount_HT}
    </TableCell>
  
    {/* <TableCell>{item.price_ht} €</TableCell>
    <TableCell>{(item.price_ht * 1.2).toFixed(2)} €</TableCell> */}

 
 
  </TableRow>

))

    return (
    <>
      <div>
        {listOfOrders}
      </div>
      </>
    )
}

