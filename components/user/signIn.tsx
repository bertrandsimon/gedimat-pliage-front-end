'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SignInSuccess from './signInSuccess';


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
    fetch('http://localhost:3000/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (data.result === false) {
          console.log('User does not exist');
        } else {
          setSuccess(true)
          console.log('User signed in successfully');
        }
      })
      .catch((error) => {
        console.error('Error during signin:', error);
      });
  };

  return (
    <Card>
    {!success &&
        <CardHeader>
        <CardTitle>Mon compte</CardTitle>
        <CardDescription>
            Entrez votre email et mot de passe pour vous connecter
        </CardDescription>
        </CardHeader>
    }

{!success &&
    <CardContent className="space-y-2">

      <form>

        <div>
            <Label htmlFor="email">Email</Label>
            <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            defaultValue="email@email.com"
            />
        </div>
        <div>
            <Label htmlFor="password">Mot de passe</Label>
            <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
            defaultValue="*******"
            />
        </div>

      </form>

    </CardContent>
    }
    {!success &&
    <CardFooter>
      <Button onClick={handleSubmit} className="redBtn">
        Connection
      </Button>
    </CardFooter>
}

  {success && <SignInSuccess/>}
  </Card>
  
  );
}
