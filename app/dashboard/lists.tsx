'use client'
import { useSelector } from "react-redux"
import Image from "next/image"
import Link from "next/link"
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
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Lists() {

  // Function to fetch orders by user ID
const fetchOrdersByUser = (customer_id:any) => {
  fetch(`http://localhost:3000/api/orders/ordersByUser?customer_id=${customer_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === true) {
        console.log('Orders:', data.orders);
      } else {
        console.log('Failed to fetch orders:', data.error);
      }
    })
    .catch((error) => {
      console.error('Error fetching orders:', error);
    });
};

// Assuming you have access to the Redux state
const customer_id = useSelector((state:any) => state.user.userId);


// Call the function
fetchOrdersByUser(customer_id);


    return (

        <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Vos listes</CardTitle>
            <CardDescription>
              Voir vos listes de produits et passer commande
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
                  <TableHead>Etat</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Nb de produits
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
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
                    Laser Lemonade Machine
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">En cours</Badge>
                  </TableCell>
                  <TableCell>$499.99</TableCell>
                  <TableCell className="hidden md:table-cell">
                    25
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-07-12 10:42 AM
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
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
                <TableRow>
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
                    Hypernova Headphones
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">En commande</Badge>
                  </TableCell>
                  <TableCell>$129.99</TableCell>
                  <TableCell className="hidden md:table-cell">
                    100
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-10-18 03:21 PM
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
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
                    AeroGlow Desk Lamp
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">En commande</Badge>
                  </TableCell>
                  <TableCell>$39.99</TableCell>
                  <TableCell className="hidden md:table-cell">
                    50
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-11-29 08:15 AM
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
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
                    TechTonic Energy Drink
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">En cours</Badge>
                  </TableCell>
                  <TableCell>$2.99</TableCell>
                  <TableCell className="hidden md:table-cell">
                    0
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-12-25 11:59 PM
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
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
                    Gamer Gear Pro Controller
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">En commande</Badge>
                  </TableCell>
                  <TableCell>$59.99</TableCell>
                  <TableCell className="hidden md:table-cell">
                    75
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2024-01-01 12:00 AM
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
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
                    Luminous VR Headset
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">En commande</Badge>
                  </TableCell>
                  <TableCell>$199.99</TableCell>
                  <TableCell className="hidden md:table-cell">
                    30
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2024-02-14 02:14 PM
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          {/* <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong>{" "}
              products
            </div>
          </CardFooter> */}
        </Card>
      </TabsContent>

    )
}