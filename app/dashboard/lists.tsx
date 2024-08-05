'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Order } from '../interfaces/order';

import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';
import { MoreHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TabsContent } from '@/components/ui/tabs';

export default function Lists({ orders }: { orders: Order[] }) {
  const [loading, setLoading] = useState(true);
  const customer_id = useSelector((state: any) => state.user.userId);

  // Ensure the orders prop is logged for debugging
  console.log("orders in client component as props:", orders);

  useEffect(() => {
    if (orders) {
      setLoading(false);
    }
  }, [orders]);

  const orderList = orders.map((order, index) => (
    <TableRow key={index}>
      <TableCell className="hidden sm:table-cell">
      <ShoppingCartIcon className="size-6" />
      </TableCell>
      <TableCell className="font-medium">
        <Link href={`/dashboard/singleList/${order._id}`}>{order._id}</Link>
      </TableCell>
      <TableCell>
        <Badge variant="outline">En cours</Badge>
      </TableCell>
      <TableCell>{order.total_amount_TTC} € TTC</TableCell>
      <TableCell className="hidden md:table-cell">{order.products.length}</TableCell>
      <TableCell className="hidden md:table-cell">{order.created_at}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Modifier</DropdownMenuItem>
            <DropdownMenuItem>Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  ));

  return (
    <TabsContent value="all">
      <Card>
        <CardHeader>
          <CardTitle>Vos listes</CardTitle>
          <CardDescription>Voir vos listes de produits et passer commande</CardDescription>
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
                  <TableHead>Etat</TableHead>
                  <TableHead>Prix TTC</TableHead>
                  <TableHead className="hidden md:table-cell">Nb de produits</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
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
  );
}
