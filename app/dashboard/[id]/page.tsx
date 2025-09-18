
// Force dynamic rendering and disable all caching
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
export const runtime = 'nodejs'

import { Dashboard } from '../dashboard'


//   http://localhost:3000/dashboard/66a1fd40412ecec228ca63dd

export default async function Page({ params }: any) {

  // Add timestamp to ensure fresh data on every request
  const timestamp = Date.now()

  // Fetch orders and user data in parallel for better performance
  const [ordersResponse, userResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/orders/ordersByUser/${params.id}?t=${timestamp}`, {
      cache: 'no-store', // Force no cache
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    }),
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/${params.id}?t=${timestamp}`, {
      cache: 'no-store', // Force no cache
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  ])

  const [orders, connectedUser] = await Promise.all([
    ordersResponse.json(),
    userResponse.json()
  ])

  //console.log("orders in Lists", orders)
  //console.log("connectedUser :", connectedUser)

  return (
    <>
      <Dashboard orders={orders} connectedUser={connectedUser} />
    </>
  )
}
