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
import { Mail, ArrowLeft } from 'lucide-react'

export default function SignIn() {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const userConnected = useSelector((state: any) => state.user.userConnected)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [showMagicLink, setShowMagicLink] = useState(false)
  const [isMagicLinkLoading, setIsMagicLinkLoading] = useState(false)
  const [magicLinkSent, setMagicLinkSent] = useState(false)

  const validateEmail = (email: any) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  useEffect(() => { }, [userConnected])

  const handleMagicLinkRequest = async () => {
    if (!email) {
      toast({
        title: 'Erreur',
        description: 'Veuillez saisir votre adresse email',
        variant: 'destructive'
      })
      return
    }

    if (!validateEmail(email)) {
      toast({
        title: 'Erreur',
        description: 'Le format de l\'email est invalide',
        variant: 'destructive'
      })
      return
    }

    setIsMagicLinkLoading(true)

    try {
      const response = await fetch('/api/auth/request-magic-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMagicLinkSent(true)
        toast({
          title: 'Email envoyé',
          description: 'Si cet email existe dans notre système, vous recevrez un lien de connexion.',
        })
      } else {
        toast({
          title: 'Erreur',
          description: data.error || 'Une erreur est survenue',
          variant: 'destructive'
        })
      }
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue lors de l\'envoi de l\'email',
        variant: 'destructive'
      })
    } finally {
      setIsMagicLinkLoading(false)
    }
  }

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

  // Magic Link Success State
  if (magicLinkSent) {
    return (
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
          <CardTitle className="text-xl">Email envoyé !</CardTitle>
          <CardDescription>
            Si cet email existe dans notre système, vous recevrez un lien de connexion dans quelques minutes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-gray-600 text-center">
            <p>Vérifiez votre boîte de réception et vos spams.</p>
            <p>Le lien expire dans 15 minutes.</p>
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setMagicLinkSent(false)
              setShowMagicLink(false)
              setEmail('')
            }}
          >
            Demander un nouveau lien
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={() => {
              setMagicLinkSent(false)
              setShowMagicLink(false)
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la connexion
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Magic Link Request State
  if (showMagicLink) {
    return (
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-xl">Connexion par email</CardTitle>
          <CardDescription>
            Entrez votre adresse email pour recevoir un lien de connexion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => { e.preventDefault(); handleMagicLinkRequest(); }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="magic-email">Adresse email</Label>
              <Input
                id="magic-email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isMagicLinkLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isMagicLinkLoading}
            >
              {isMagicLinkLoading ? 'Envoi en cours...' : 'Envoyer le lien de connexion'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => setShowMagicLink(false)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la connexion
            </Button>
          </div>

          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>Le lien de connexion sera valide pendant 15 minutes.</p>
            <p>Il ne peut être utilisé qu'une seule fois.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Regular Sign In State
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
        <CardFooter className="flex flex-col gap-3">
          <Button onClick={handleSubmit} className="redBtn w-full">
            Connexion
          </Button>
          <div className="text-center py-4">
            <button
              type="button"
              onClick={() => setShowMagicLink(true)}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Mot de passe oublié ? Connexion par email
            </button>
          </div>
        </CardFooter>
      )}

      {success && <SignInSuccess />}
    </Card>
  )
}
