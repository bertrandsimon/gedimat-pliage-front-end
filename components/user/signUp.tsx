'use client'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';


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
import SignUpSuccess from "./signUpSuccess"


export default function SignUp (){
  
  const dispatch = useDispatch()


  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [isPro, setIsPro] = useState(false);
  const [proNumber, setProNumber] = useState('')
  const [avatar, setAvatar] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")


  const validateEmail = (email:any) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {

    setError("")

    if (!validateEmail(email)) {
      setError('Le format de l\'email est invalide.');
      return;
    }

    if (password.length < 5) {
      setError('Le mot de passe doit comporter au moins 5 caractères.');
      return;
    }

    fetch('http://localhost:3000/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ proNumber, name, surname, email, avatar, password  }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (data.result === true) {
          
          setSuccess(true)
          
        } else {
          setError(data.error)
          
        }
      })
      .catch((error) => {
        console.error('Error during signUp:', error);
      });
  };
  
  
    return (
      
      <Card>
        {!success && <CardHeader>
          <CardTitle>Création de compte</CardTitle>
          <CardDescription>
            Entrez votre email et un mot de passe pour créer votre compte
            
          </CardDescription>
        </CardHeader>
        }
        
       
        <CardContent className="space-y-2">
          {success && <div><SignUpSuccess/></div>}
          {error && <p className="text-red-500">{error}</p>} 
          {!success &&
            <form className="flex flex-col gap-2">
            <Label htmlFor="name">Nom</Label>
            <Input onChange={(e) => setName(e.target.value)} value={name} id="name" type="txt"/>

            <Label htmlFor="surname">Prénom</Label>
            <Input onChange={(e) => setSurname(e.target.value)} value={surname} id="surname" type="txt"/>

            <Label htmlFor="email">Email</Label>
            <Input onChange={(e) => setEmail(e.target.value)} value={email} id="email" type="txt"/>
         
            <Label htmlFor="password">Mot de passe</Label>
            <Input onChange={(e) => setPassword(e.target.value)} value={password} id="password" type="password"/>

         
            <Label htmlFor="proNumber">Votre numéro Pro</Label>
            <Input onChange={(e) => setProNumber(e.target.value)} value={proNumber} id="proNumber" type="txt"/>
            </form>
            }
         
        </CardContent>

        <CardFooter>
        {!success && <Button onClick={handleSubmit} className="redBtn">Valider inscription</Button>}
        </CardFooter>
        

      </Card>
     

    )

    
}