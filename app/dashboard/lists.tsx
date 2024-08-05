'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Order } from '../interfaces/order';

import Image from 'next/image';
import Link from 'next/link';
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Lists() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const customer_id = useSelector((state: any) => state.user.userId);

  useEffect(() => {
    const fetchOrdersByUser = async (customer_id: string) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/orders/ordersByUser?customer_id=${customer_id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.result === true) {
          setOrders(data.orders);
        } else {
          console.error('Failed to fetch orders:', data.error);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    if (customer_id) {
      fetchOrdersByUser(customer_id);
    }
  }, [customer_id]);

  const orderList = orders.map((order, index) => (
    <TableRow key={index}>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src="images/placeholder.svg"
          width="64"
        />
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
