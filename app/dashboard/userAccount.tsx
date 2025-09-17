
'use client'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function UserAccount({ user }: any) {
  const [isLoading, setIsLoading] = useState(false)
  const [additionalUserData, setAdditionalUserData] = useState<any>(null)
  const { toast } = useToast()
  const customer_id = useSelector((state: any) => state.user.userId)
  const reduxUser = useSelector((state: any) => state.user)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: reduxUser.name || '',
      surname: reduxUser.surname || '',
      email: reduxUser.email || '',
      proNumber: '',
      address: '',
      cp: '',
      city: '',
      phone: ''
    }
  })

  // Fetch additional user data from database
  useEffect(() => {
    const fetchAdditionalUserData = async () => {
      if (!customer_id) return

      try {
        const response = await fetch(`/api/users/${customer_id}`)
        const userData = await response.json()
        setAdditionalUserData(userData)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchAdditionalUserData()
  }, [customer_id])

  // Reset form when Redux user data or additional user data changes
  useEffect(() => {
    reset({
      name: reduxUser.name || '',
      surname: reduxUser.surname || '',
      email: reduxUser.email || '',
      proNumber: additionalUserData?.proNumber || '',
      address: additionalUserData?.address || '',
      cp: additionalUserData?.cp || '',
      city: additionalUserData?.city || '',
      phone: additionalUserData?.phone || ''
    })
  }, [reduxUser, additionalUserData, reset])

  // Input restriction handlers
  const handleNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter, home, end, left, right, up, down
    if ([8, 9, 27, 13, 46, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      (e.keyCode === 88 && e.ctrlKey === true)) {
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

  const handlePhoneInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const value = input.value;

    // Allow: backspace, delete, tab, escape, enter, home, end, left, right, up, down
    if ([8, 9, 27, 13, 46, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      (e.keyCode === 88 && e.ctrlKey === true)) {
      return;
    }

    // Allow + only at the beginning
    if (e.key === '+' && value.length === 0) {
      return;
    }

    // Allow only numbers after + or 0
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/users/${customer_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          proNumber: data.proNumber,
          address: data.address,
          cp: data.cp,
          city: data.city,
          phone: data.phone,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: 'Succès',
          description: 'Vos informations ont été mises à jour avec succès',
        })
      } else {
        toast({
          title: 'Erreur',
          description: result.error || 'Une erreur est survenue',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue lors de la mise à jour',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Mon Compte</CardTitle>
          <CardDescription>
            Modifiez vos informations personnelles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Votre nom"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surname">Prénom</Label>
                <Input
                  id="surname"
                  {...register('surname')}
                  placeholder="Votre prénom"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="votre@email.com"
                readOnly
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="proNumber">Numéro Pro (optionnel)</Label>
              <Input
                id="proNumber"
                {...register('proNumber', {
                  pattern: {
                    value: /^\d{1,12}$/,
                    message: 'Le numéro pro doit contenir uniquement des chiffres (max 12)'
                  }
                })}
                placeholder="Votre numéro professionnel"
                type="tel"
                onKeyDown={handleNumberInput}
                maxLength={12}
              />
              {errors.proNumber && (
                <p className="text-sm text-red-500">{errors.proNumber.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Input
                id="address"
                {...register('address')}
                placeholder="Votre adresse"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cp">Code Postal</Label>
                <Input
                  id="cp"
                  {...register('cp', {
                    pattern: {
                      value: /^\d{1,8}$/,
                      message: 'Le code postal doit contenir uniquement des chiffres (max 8)'
                    }
                  })}
                  placeholder="Code postal"
                  type="tel"
                  onKeyDown={handleNumberInput}
                  maxLength={8}
                />
                {errors.cp && (
                  <p className="text-sm text-red-500">{errors.cp.message}</p>
                )}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="city">Ville</Label>
                <Input
                  id="city"
                  {...register('city')}
                  placeholder="Votre ville"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone', {
                  pattern: {
                    value: /^(?:\+33|0)[1-9](?:[0-9]{8})$/,
                    message: 'Format de téléphone invalide (ex: 0123456789 ou +33123456789)'
                  }
                })}
                placeholder="Votre numéro de téléphone"
                onKeyDown={handlePhoneInput}
                maxLength={12}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Nouveau mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password')}
                  placeholder="Laissez vide pour ne pas changer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword')}
                  placeholder="Confirmez le nouveau mot de passe"
                />
              </div>
            </div> */}

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" disabled={isLoading}>
                Annuler
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}