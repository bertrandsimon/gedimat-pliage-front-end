
// dynamic loading (no cache)
export const dynamic = 'force-dynamic'

import { Dashboard } from '../dashboard'


//   http://localhost:3000/dashboard/66a1fd40412ecec228ca63dd

export default async function Page({ params }: any) {

  const response1 = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/orders/ordersByUser/${params.id}`
  )
  const orders = await response1.json()

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/${params.id}`)

  const connectedUser = await response2.json()

  //console.log("orders in Lists", orders)
  console.log("connectedUser :", connectedUser)

  return (
    <>
      <Dashboard orders={orders} connectedUser={connectedUser} />
    </>
  )
}
