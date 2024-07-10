'use client'
import { useState } from "react"
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
  

  

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [isPro, setIsPro] = useState(false);
  const [proNumber, setProNumber] = useState('');
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    fetch('http://localhost:3000/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ proNumber, name, surname, email, avatar, password  }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === false) {
          console.log('User inserted');
        } else {
          console.log('User insertion failed');
        }
      })
      .catch((error) => {
        console.error('Error during signUp:', error);
      });
  };
  console.log(proNumber)
  
    return (
      
      <Card>

        <CardHeader>
          <CardTitle>Création de compte</CardTitle>
          <CardDescription>
            Entrez votre email et un mot de passe pour créer votre compte
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-2">
            <Label htmlFor="name">Nom</Label>
            <Input onChange={(e) => setName(e.target.value)} value={name} id="name" type="txt"/>

            <Label htmlFor="avatar">Avatar</Label>
            <Input onChange={(e) => setAvatar(e.target.value)} value={avatar} id="avatar" type="txt"/>

            <Label htmlFor="surname">Prénom</Label>
            <Input onChange={(e) => setSurname(e.target.value)} value={surname} id="surname" type="txt"/>

            <Label htmlFor="email">Email</Label>
            <Input onChange={(e) => setEmail(e.target.value)} value={email} id="email" type="txt"/>
         
            <Label htmlFor="password">Mot de passe</Label>
            <Input onChange={(e) => setPassword(e.target.value)} value={password} id="password" type="password"/>

            {/* <Label htmlFor="avatar">Votre avatar</Label>
            <Input onChange={(e) => setAvatar(e.target.value)} value={avatar} id="avatar" type="txt"/>
          */}
            <Label htmlFor="proNumber">Votre numéro Pro</Label>
            <Input onChange={(e) => setProNumber(e.target.value)} value={proNumber} id="proNumber" type="txt"/>
         
        
         
        </CardContent>

        <CardFooter>
          <Button onClick={handleSubmit} className="redBtn">Valider inscription</Button>
        </CardFooter>

      </Card>
     

    )

    
}