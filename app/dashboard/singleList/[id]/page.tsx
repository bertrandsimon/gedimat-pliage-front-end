import Image from 'next/image'
import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'
import PrintButton from './PrintButton'

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
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default async function Page({ params }: any) {
  // http://localhost:3000/api/orders/67570836f1e1e9d075e1115c
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/orders/${params.id}`
  )

  const singleOrder = await response.json()

  const listOfItems = singleOrder.products.map((item: any, index: number) => (

    <TableRow key={index}>
      <TableCell className="hidden sm:table-cell">
        <div className="w-[141px] h-[141px] relative">
          <Image
            alt="Image produit"
            className="rounded-md object-cover"
            fill
            src={`/images/products/${item.main_image}`}
          />
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">
        {item.schema_img ? (
          <div className="w-[201px] h-[141px] relative">
            <Image
              alt="Schéma produit"
              className="rounded-md object-contain"
              fill
              src={`/images/products/schemas/${item.schema_img}`}
            />
          </div>
        ) : (
          <div className="w-[201px] h-[141px] rounded-md border border-black flex items-center justify-center text-xs text-center">
            Pas de schéma
          </div>
        )}
      </TableCell>
      <TableCell className="font-medium">
        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase">{item.name}</p>
          {item.material && item.variation && (
            <ul className="list-disc pl-3 text-sm">
              <li>{item.material.name}</li>
              <li>{item.variation.name}</li>
            </ul>
          )}
        </div>
      </TableCell>
      <TableCell className="align-middle">
        <ul className="flex flex-col gap-1 list-disc text-xs">
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
          {item.length !== 0 && <li>Longueur : {item.length} mm</li>}
        </ul>
      </TableCell>
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
      <DynamicBreadcrumb />
      <div className="px-12 py-12">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <CardTitle>Votre commande N° {singleOrder._id}</CardTitle>
                {singleOrder.created_at && (
                  <CardDescription>
                    Date commande : {new Date(singleOrder.created_at).toLocaleDateString('fr-FR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </CardDescription>
                )}
                <CardDescription>
                  Statut de la commande : <span>à payer en magasin</span>
                </CardDescription>
              </div>
              <PrintButton />
            </div>
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span >Image</span>
                  </TableHead>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span >Schéma</span>
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
