'use client'

export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'

import { useDispatch, useSelector } from 'react-redux'
import {
  loggedStatus,
  userId,
  loggedName,
  loggedSurname,
  loggedToken,
  loggedEmail,
  isPro,
} from '@/app/reducers/user'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SignInSuccess from './signInSuccess'

export default function SignIn() {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const userConnected = useSelector((state: any) => state.user.userConnected)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: any) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  useEffect(() => {}, [userConnected])

  const handleSubmit = () => {
    setError('')

    if (!validateEmail(email)) {
      setError("Le format de l'email est invalide.")
      setEmail('')
      setPassword('')
      return
    }

    if (password.length < 5) {
      setError('Le mot de passe doit comporter au moins 5 caractères.')
      setEmail('')
      setPassword('')
      return
    }

    fetch(`${process.env.NEXT_PUBLIC_URL}/api/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === false) {
          setError(data.error)
          setEmail('')
          setPassword('')
        } else {
          setSuccess(true)
          console.log(data)
          dispatch(loggedStatus(true))
          dispatch(loggedName(data.name))
          dispatch(loggedSurname(data.surname))
          dispatch(isPro(data.isPro))
          dispatch(loggedEmail(data.email))
          dispatch(userId(data.userId))
          toast({
            title: `Bonjour ${data.surname} ${data.email}`,
            description: 'Vous êtes bien connecté à votre compte',
          })
        }
      })
      .catch((error) => {
        console.error('Error during signin:', error)
      })
  }

  return (
    <Card>
      {!success && (
        <CardHeader>
          <CardTitle>Mon compte</CardTitle>
          <CardDescription>
            Entrez votre email et mot de passe pour vous connecter
          </CardDescription>
        </CardHeader>
      )}

      {!success && (
        <CardContent className="space-y-2">
          {error && <p className="text-red-500">{error}</p>}
          <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                defaultValue="email@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                defaultValue="*******"
                type="password"
              />
            </div>
          </form>
        </CardContent>
      )}
      {!success && (
        <CardFooter>
          <Button onClick={handleSubmit} className="redBtn">
            Connection
          </Button>
        </CardFooter>
      )}

      {success && <SignInSuccess />}
    </Card>
  )
}
