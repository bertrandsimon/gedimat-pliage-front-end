import { CheckCircleIcon } from "@heroicons/react/24/solid"
import SignIn from "./signIn"

export default function SignInSuccess (){

    return (
        <>
        <div className="flex items-center justify-center gap-4 h-24">
            <CheckCircleIcon className="h-5 w-5 text-green-900" aria-hidden="true" />
            <span>Vous êtes connecté !</span>
        </div>

        
        </>
    )
   

}