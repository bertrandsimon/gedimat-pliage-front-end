
// import './db'

export default async function Products() {

  const response = await fetch(`http://localhost:3000/api/products`, { cache: 'force-cache' })
  const products = await response.json()
  console.log (products)
  

  return (
    <div>
      Test produits

    </div>
  );
}

// export default async function Products() {

//   const staticData = await fetch(`http://localhost:3000/api/products`, { cache: 'force-cache' })

//   return (
//     <div>
//       Test produits

//     </div>
//   );
// }
