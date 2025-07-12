
'use client'
import { useForm } from 'react-hook-form'
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

interface FormData {
  name: string
  surname: string
  email: string
  proNumber: string
  address: string
  postalCode: string
  city: string
  phone: string
  password: string
  confirmPassword: string
}

export default function UserAccount({ user }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: user?.name || '',
      surname: user?.surname || '',
      email: user?.email || '',
      proNumber: user?.proNumber || '',
      address: user?.address || '',
      postalCode: user?.postalCode || '',
      city: user?.city || '',
      phone: user?.phone || '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    // Here you would typically send the data to your API
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
                  {...register('name', { required: 'Le nom est requis' })}
                  placeholder="Votre nom"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="surname">Prénom</Label>
                <Input
                  id="surname"
                  {...register('surname', { required: 'Le prénom est requis' })}
                  placeholder="Votre prénom"
                />
                {errors.surname && (
                  <p className="text-sm text-red-500">{errors.surname.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'L\'email est requis',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Format d\'email invalide'
                  }
                })}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="proNumber">Numéro Pro (optionnel)</Label>
              <Input
                id="proNumber"
                {...register('proNumber')}
                placeholder="Votre numéro professionnel"
              />
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
                <Label htmlFor="postalCode">Code Postal</Label>
                <Input
                  id="postalCode"
                  {...register('postalCode')}
                  placeholder="Code postal"
                />
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
                {...register('phone')}
                placeholder="Votre numéro de téléphone"
              />
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
              <Button type="button" variant="outline">
                Annuler
              </Button>
              <Button type="submit">
                Sauvegarder
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}