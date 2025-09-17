import SignIn from "./user/signIn"
import SignUp from "./user/signUp"

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

export function Login() {
  return (
    <Tabs defaultValue="signin" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Connexion</TabsTrigger>
        <TabsTrigger value="signup">Créer mon compte</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">

        {/* USER CONNEXION */}
        <SignIn />

      </TabsContent>


      <TabsContent value="signup">

        {/* USER ACCOUN CREATION */}
        <SignUp />

      </TabsContent>
    </Tabs>
  )
}
