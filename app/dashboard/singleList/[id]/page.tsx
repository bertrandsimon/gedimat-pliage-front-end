
import Image from 'next/image'
//import SingleList from '../singleList';
import SingleProduct from '@/app/singleProduct/singleProduct'
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
   
   const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/orders/${params.id}`)
 
   const singleOrder = await response.json()
  console.log(singleOrder)
   
  const listOfItems = singleOrder.products.map( (item:any, index:number) => (
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

 
 
  </TableRow>

))

    return (
    <>
      <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
             <CardTitle>Votre commande N° {singleOrder._id}</CardTitle> 
             
            <CardDescription>
              Merci pour votre commande
            
            </CardDescription>
            
           
             
          </CardHeader>

          
          <CardContent>
            <Table>
            
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Prix HT</TableHead>
                  <TableHead>Prix TTC</TableHead>
              
                
             
                </TableRow>
              </TableHeader>


              <TableBody>
               
            
              {listOfItems}
          


              </TableBody>
            </Table>
          </CardContent>
        
        </Card>

       

        
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
                    
                    <TableCell>{singleOrder.total_amount_HT} €</TableCell>
                    <TableCell>20 %</TableCell>
                    <TableCell>{singleOrder.total_amount_TTC} €</TableCell>
                </TableRow>
            
            </Table>

            </CardContent>
            </Card>

        {/* <SingleList singleOrder={singleOrder}/> */}
      
      </>
    )
}

