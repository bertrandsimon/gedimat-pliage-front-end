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



export default function SignUp (){


    return (

      <Card>

        <CardHeader>
          <CardTitle>Création de compte</CardTitle>
          <CardDescription>
            Entrez votre email et un mot de passe pour créer votre compte
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="current">Email</Label>
            <Input id="current" type="txt" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">Mot de passe</Label>
            <Input id="new" type="password" />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="redBtn">Valider inscription</Button>
        </CardFooter>

      </Card>

    )

    
}