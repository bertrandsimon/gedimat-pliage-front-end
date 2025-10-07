import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'



export default function OrderConfirmation() {

    const customer_id = useSelector((state: any) => state.user.userId)


    return (

        <div className="h-96 flex flex-col justify-center items-center gap-6">
            <h3><strong>Votre commande est confirmée</strong></h3>
            <p>Vous pouvez la retrouver dans votre <Link href={`/dashboard/${customer_id}?section=lists`} className="text-blue-500">espace client</Link>.</p>
        </div>
    )

}