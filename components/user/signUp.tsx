'use client'
export const dynamic = 'force-dynamic'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignUpSuccess from './signUpSuccess'

export default function SignUp() {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data: any) => {
    setError('')

    // Email and password validation is handled by react-hook-form
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        proNumber: data.proNumber,
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        address: data.address,
        cp: data.cp,
        city: data.city,
        phone: data.phone,
      }),
    })
      .then((response) => response.json())
      .then((dataRes) => {
        if (dataRes.result === true) {
          setSuccess(true)
          // Trigger the registration email API
          fetch(`${process.env.NEXT_PUBLIC_URL}/api/emails/registration`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email, surname: data.surname }),
          })
          reset();
        } else {
          setError(dataRes.error)
        }
      })
      .catch((error) => {
        console.error('Error during signUp:', error)
      })
  }

  return (
    <Card>
      {!success && (
        <CardHeader>
          <CardTitle>Création de compte</CardTitle>
          <CardDescription>
            Entrez votre email et un mot de passe
          </CardDescription>
        </CardHeader>
      )}

      <CardContent className="space-y-2">
        {success && (
          <div>
            <SignUpSuccess />
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {!success && (
          <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name and Surname in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input
                  {...register("name", { required: "Nom requis" })}
                  id="name"
                  type="text"
                  className={errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                />
              </div>
              <div>
                <Label htmlFor="surname">Prénom</Label>
                <Input
                  {...register("surname", { required: "Prénom requis" })}
                  id="surname"
                  type="text"
                  className={errors.surname ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                />
              </div>
            </div>

            {/* Email and Password in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email", {
                    required: "Email requis",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Le format de l'email est invalide."
                    }
                  })}
                  id="email"
                  type="email"
                  className={errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                />
              </div>
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  {...register("password", {
                    required: "Mot de passe requis",
                    minLength: {
                      value: 5,
                      message: "Le mot de passe doit comporter au moins 5 caractères."
                    }
                  })}
                  id="password"
                  type="password"
                  className={errors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                />
              </div>
            </div>

            {/* Address above CP/City */}
            <Label htmlFor="address">Adresse</Label>
            <Input
              {...register("address", { required: "Adresse requise" })}
              id="address"
              type="text"
              className={errors.address ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
            />

            {/* CP and City in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <Label htmlFor="cp">Code postal</Label>
                <Input
                  {...register("cp", { required: "Code postal requis" })}
                  id="cp"
                  type="text"
                  className={errors.cp ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                />
              </div>
              <div>
                <Label htmlFor="city">Ville</Label>
                <Input
                  {...register("city", { required: "Ville requise" })}
                  id="city"
                  type="text"
                  className={errors.city ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                />
              </div>
            </div>

            {/* Numero Pro and Phone in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <Label htmlFor="proNumber">Votre numéro Pro</Label>
                <Input
                  {...register("proNumber")}
                  id="proNumber"
                  type="text"
                  className={errors.proNumber ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                />
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  {...register("phone", { required: "Téléphone requis" })}
                  id="phone"
                  type="text"
                  className={errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
                />
              </div>
            </div>
          </form>
        )}
      </CardContent>

      <CardFooter>
        {!success && (
          <Button type="submit" form="" className="redBtn" onClick={handleSubmit(onSubmit)}>
            Valider inscription
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
