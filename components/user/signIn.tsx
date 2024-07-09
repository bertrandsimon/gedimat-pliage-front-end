import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



export default function SignIn (){


    return (
        <Card>
        <CardHeader>
          <CardTitle>Mon compte</CardTitle>
          <CardDescription>
            Entrez votre email et mot de passe pour vous connecter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Mot de passe</Label>
            <Input id="username" defaultValue="*******" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="redBtn">Connection</Button>
        </CardFooter>
      </Card>
    )

    
}