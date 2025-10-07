'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function MagicLinkRequest() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email) {
            toast({
                title: 'Erreur',
                description: 'Veuillez saisir votre adresse email',
                variant: 'destructive'
            })
            return
        }

        setIsLoading(true)

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
                setIsSent(true)
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
            setIsLoading(false)
        }
    }

    if (isSent) {
        return (
            <Card className="w-full max-w-md mx-auto">
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
                            setIsSent(false)
                            setEmail('')
                        }}
                    >
                        Demander un nouveau lien
                    </Button>
                    <Link href="/login">
                        <Button variant="ghost" className="w-full">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Retour à la connexion
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-md mx-auto">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Adresse email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="votre@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Envoi en cours...' : 'Envoyer le lien de connexion'}
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <Link href="/login">
                        <Button variant="ghost" className="w-full">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Retour à la connexion
                        </Button>
                    </Link>
                </div>

                <div className="mt-4 text-xs text-gray-500 text-center">
                    <p>Le lien de connexion sera valide pendant 15 minutes.</p>
                    <p>Il ne peut être utilisé qu'une seule fois.</p>
                </div>
            </CardContent>
        </Card>
    )
}
