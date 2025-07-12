
export default function UserAccount({ user }: any) {
  console.log(user)
  return (

    <div>
      <h1>User Account 2</h1>
      <p>{user?.name || 'Nom non disponible'}</p>
    </div>

  )
}