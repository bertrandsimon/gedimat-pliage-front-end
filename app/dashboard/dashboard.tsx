'use client'
import Image from "next/image"
import Link from "next/link"

import Lists from "./lists"
import UserAccount from "./userAccount"
import Analytics from "./analytics"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"

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
  User
} from "lucide-react"


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

export function Dashboard({ orders, connectedUser }: any) {
  const customer_id = useSelector((state: any) => state.user.userId);
  const [page, setPage] = useState("lists")
  const [isListsLoaded, setIsListsLoaded] = useState(false);
  const router = useRouter();

  //console.log( "orders in client component as props :", orders.orders)
  console.log("connectedUser", connectedUser)
  useEffect(() => {
    if (page === "lists") {
      setIsListsLoaded(true);
    }
  }, [page]);

  const handleClick = (page: string) => (event: any) => {
    event.preventDefault();
    setPage(page);
  }

  const handleOrdersClick = (event: any) => {
    event.preventDefault();
    setPage("lists");
    router.push(`/dashboard/${customer_id}`);
  }

  return (
    <>
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">


          <aside className="fixed inset-y-16 left-0 z-10 hidden w-14 flex-col sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 py-4">

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Votre espace client</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={`/dashboard/${customer_id}`}
                    onClick={handleOrdersClick}
                    className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <ShoppingCart className="h-5 w-5" />

                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Vos commandes</TooltipContent>
              </Tooltip>


              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    onClick={handleClick("userAccount")}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <User className="h-5 w-5" />

                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Vos infos</TooltipContent>
              </Tooltip>
              <Tooltip>


                <TooltipTrigger asChild>
                  <Link
                    onClick={handleClick("analytics")}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <LineChart className="h-5 w-5" />
                    <span className="sr-only">Statistiques</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Statistiques</TooltipContent>
              </Tooltip>

            </nav>

          </aside>


          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="#"
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                      <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />

                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Votre espace client
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Vos commandes
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Users2 className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Settings
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>

            </header>

            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              {page === "lists" ? (
                <Tabs defaultValue="all">
                  <div className="flex items-center">
                    <TabsList>
                      <TabsTrigger value="all">Toutes</TabsTrigger>
                      <TabsTrigger value="En commande">En commande</TabsTrigger>
                      <TabsTrigger value="En cours">En cours</TabsTrigger>
                      <TabsTrigger value="Anciennes commandes" className="hidden sm:flex">
                        Anciennes commandes
                      </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2"></div>
                  </div>

                  {isListsLoaded && <Lists orders={orders} />}
                </Tabs>
              ) : page === "userAccount" ? (
                <UserAccount user={connectedUser} />
              ) : page === "analytics" ? (
                <Analytics />
              ) : null}
            </main>
          </div>
        </div>
      </TooltipProvider>
    </>
  )
}
