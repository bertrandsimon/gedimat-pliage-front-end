'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { useToast } from '@/hooks/use-toast'
import {
    loggedStatus,
    userId,
    loggedName,
    loggedSurname,
    loggedEmail,
    isPro,
} from '@/app/reducers/user'

export default function MagicLinkSuccessPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const dispatch = useDispatch()
    const { toast } = useToast()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const handleMagicLinkLogin = async () => {
            try {
                // Get the JWT token from cookies
                const response = await fetch('/api/auth/verify-session', {
                    credentials: 'include'
                })

                if (!response.ok) {
                    throw new Error('Session verification failed')
                }

                const userData = await response.json()

                if (userData.user) {
                    // Set Redux values exactly like classic sign-in
                    dispatch(loggedStatus(true))
                    dispatch(loggedName(userData.user.name))
                    dispatch(loggedSurname(userData.user.surname))
                    dispatch(isPro(userData.user.isPro))
                    dispatch(loggedEmail(userData.user.email))
                    dispatch(userId(userData.user.userId))

                    toast({
                        title: `Bonjour ${userData.user.surname} ${userData.user.email}`,
                        description: 'Vous êtes bien connecté à votre compte',
                    })

                    // Redirect to dashboard
                    router.push(`/dashboard/${userData.user.userId}`)
                } else {
                    throw new Error('No user data found')
                }
            } catch (error) {
                console.error('Magic link login error:', error)
                setError('Erreur lors de la connexion')
                setTimeout(() => {
                    router.push('/login')
                }, 2000)
            } finally {
                setLoading(false)
            }
        }

        handleMagicLinkLogin()
    }, [dispatch, router, toast])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B51B1B] mx-auto mb-4"></div>
                    <p>Connexion en cours...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-500 mb-4">❌ {error}</div>
                    <p>Redirection vers la page de connexion...</p>
                </div>
            </div>
        )
    }

    return null
}
