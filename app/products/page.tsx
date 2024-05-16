
// import './db'

export default async function Products() {

  const response = await fetch(`http://localhost:3000/api/products`, { cache: 'force-cache' })
  const products = await response.json()
  //console.log (products)
  

  return (
    <div className="w-full px-12 py-12">
      <h1>Products</h1>
      { products.map((product:any) => <div key={product._id}>{product.name}</div>)

      }
    </div>
  );
}
