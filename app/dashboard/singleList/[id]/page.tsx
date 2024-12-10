import Image from 'next/image'

export const dynamic = 'force-dynamic'

import { MoreHorizontal } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

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

export default async function Page({ params }: any) {
  // http://localhost:3000/api/orders/67570836f1e1e9d075e1115c
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/orders/${params.id}`
  )

  const singleOrder = await response.json()

  const listOfItems = singleOrder.products.map((item: any, index: number) => (
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
      <TableCell className="font-medium">{item.name}</TableCell>
      <ul className="flex flex-col gap-1 list-disc text-xs justify-center pt-4">
        {item.measures.A !== 0 && <li>A : {item.measures.A} mm</li>}
        {item.measures.B !== 0 && <li>B : {item.measures.B} mm</li>}
        {item.measures.C !== 0 && <li>C : {item.measures.C} mm</li>}
        {item.measures.D !== 0 && <li>D : {item.measures.D} mm</li>}
        {item.measures.E !== 0 && <li>E : {item.measures.E} mm</li>}
        {item.measures.F !== 0 && <li>F : {item.measures.F} mm</li>}
        {item.angles.angle1 !== 0 && <li>Angle 1 : {item.angles.angle1} °</li>}
        {item.angles.angle2 !== 0 && <li>Angle 2 : {item.angles.angle2} °</li>}
        {item.angles.angle3 !== 0 && <li>Angle 3 : {item.angles.angle3} °</li>}
        {item.angles.angle4 !== 0 && <li>Angle 4 : {item.angles.angle4} °</li>}
        {item.width !== 0 && <li>Longueur : {item.width} mm</li>}
      </ul>
      <TableCell className='text-left redAlu font-bold"'>
        {item.price_ht_single_unit} €
      </TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>
        {(item.price_ht_single_unit * item.quantity).toFixed(2)} €
      </TableCell>
      <TableCell className="font-bold">
        {(item.price_ht_single_unit * 1.2 * item.quantity).toFixed(2)} €
      </TableCell>
    </TableRow>
  ))

  return (
    <>
      <div className="px-12 py-12">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Votre commande N° {singleOrder._id}</CardTitle>

            <CardDescription>
              Statut de la commande : <span>à venir récupérer en magasin</span>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead className="text-left">Nom</TableHead>
                  <TableHead className="text-left">Mesures</TableHead>
                  <TableHead className="text-left">Prix unitaire HT</TableHead>
                  <TableHead className="text-left">Qté</TableHead>
                  <TableHead className="text-left">Prix HT</TableHead>
                  <TableHead className="text-left">Prix TTC</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>{listOfItems}</TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="flex justify-center items-center">
          <Card className="w-full my-8">
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
                    {singleOrder.total_amount_HT} €
                  </TableCell>
                  <TableCell>20 %</TableCell>
                  <TableCell className="font-bold">
                    {singleOrder.total_amount_TTC} €
                  </TableCell>
                </TableRow>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* <SingleList singleOrder={singleOrder}/> */}
    </>
  )
}
