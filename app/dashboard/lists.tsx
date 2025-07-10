'use client'

export const dynamic = 'force-dynamic'
import { removeFromCart, clearCart, cartItemCount } from '@/app/reducers/cart'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Order } from '../interfaces/order'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
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
import { TabsContent } from '@/components/ui/tabs'

export default function Lists({ orders }: { orders: Order[] }) {
  const [loading, setLoading] = useState(true)
  const customer_id = useSelector((state: any) => state.user.userId)

  useEffect(() => {
    if (orders) {
      setLoading(false)
    }
  }, [orders])

  const handleClickRemove = async (order_id: string) => {
    try {
      const response = await fetch('/api/orders/deleteOrder', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: order_id }), // Send the order ID in the request body
      })

      if (response.ok) {
        const data = await response.json()
      } else {
        const error = await response.json()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const orderList = orders.map((order, index) => (
    <TableRow key={index}>
      <TableCell className="hidden sm:table-cell">
        <ShoppingCartIcon className="size-6" />
      </TableCell>
      <TableCell className="font-medium cursor-pointer hover:text-red-700">
        <Link href={`/dashboard/singleList/${order._id}`}>{order._id}</Link>
      </TableCell>
      <TableCell className="text-center">
        <Badge variant="outline">En cours</Badge>
      </TableCell>
      <TableCell className="text-center">
        {order.total_amount_TTC} € TTC
      </TableCell>
      <TableCell className="hidden md:table-cell text-center">
        {order.products.length}
      </TableCell>
      <TableCell className="hidden md:table-cell text-center">
        {new Date(order.created_at).toLocaleString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="cursor-pointer">
              Actions
            </DropdownMenuLabel>
            {/* <DropdownMenuItem className="cursor-pointer">
              Modifier
            </DropdownMenuItem> */}
            <DropdownMenuItem
              onClick={() => handleClickRemove(order._id)}
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
    <TabsContent value="all">
      <Card>
        <CardHeader>
          <CardTitle>Vos commandes</CardTitle>
          <CardDescription>
            Voir vos listes de produits et passer commande
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead className="text-center">Etat</TableHead>
                  <TableHead className="text-center">Prix TTC</TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Nb de produits
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Date
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{orderList}</TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </TabsContent>
  )
}
