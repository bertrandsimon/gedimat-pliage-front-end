import Image from 'next/image'
import PrintButtonClient from './PrintButtonClient'

export const dynamic = 'force-dynamic'

export default async function PrintPage({ params }: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/orders/${params.id}`,
    { cache: 'no-store' }
  )

  const singleOrder = await response.json()

  const listOfItems = singleOrder.products.map((item: any, index: number) => (
    <tr key={index} className="border-b">
      <td className="p-2 max-w-[300px]">
        {item.schema_img ? (
          <div className="w-[300px] h-[300px] relative">
            <Image
              alt="Schéma produit"
              className="rounded object-contain"
              fill
              src={`/images/products/schemas/${item.schema_img}`}
            />
          </div>
        ) : (
          <div className="w-[300px] h-[300px] rounded border border-black flex items-center justify-center text-xs text-center">
            Pas de schéma
          </div>
        )}
      </td>
      <td className="p-2 font-medium max-w-[150px] break-words">
        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase">{item.name}</p>
          {item.material && item.variation && (
            <ul className="list-disc pl-3 text-sm">
              <li>{item.material.name}</li>
              <li>{item.variation.name}</li>
            </ul>
          )}
        </div>
      </td>
      <td className="p-2 align-middle text-sm">
        <ul className="flex flex-col gap-1 list-disc text-xs pl-4">
          {item.measures.A !== 0 && <li>A: {item.measures.A}mm</li>}
          {item.measures.B !== 0 && <li>B: {item.measures.B}mm</li>}
          {item.measures.C !== 0 && <li>C: {item.measures.C}mm</li>}
          {item.measures.D !== 0 && <li>D: {item.measures.D}mm</li>}
          {item.measures.E !== 0 && <li>E: {item.measures.E}mm</li>}
          {item.measures.F !== 0 && <li>F: {item.measures.F}mm</li>}
          {item.angles.angle1 !== 0 && <li>Angle 1: {item.angles.angle1}°</li>}
          {item.angles.angle2 !== 0 && <li>Angle 2: {item.angles.angle2}°</li>}
          {item.angles.angle3 !== 0 && <li>Angle 3: {item.angles.angle3}°</li>}
          {item.angles.angle4 !== 0 && <li>Angle 4: {item.angles.angle4}°</li>}
          {item.length !== 0 && <li>Longueur: {item.length}mm</li>}
        </ul>
      </td>
      <td className="p-2 text-left font-bold text-red-600 max-w-[100px] break-words">{item.price_ht_single_unit} €</td>
      <td className="p-2 text-center">{item.quantity}</td>
      <td className="p-2 text-left">{(item.price_ht_single_unit * item.quantity).toFixed(2)} €</td>
      <td className="p-2 text-left font-bold">{(item.price_ht_single_unit * 1.2 * item.quantity).toFixed(2)} €</td>
    </tr>
  ))

  return (
    <div className="min-h-screen bg-white p-8 print:p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Votre commande N° {singleOrder._id}</h1>
            {singleOrder.created_at && (
              <p className="text-gray-600">
                Date commande : {new Date(singleOrder.created_at).toLocaleDateString('fr-FR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
              </p>
            )}
            <p className="text-gray-600">Statut de la commande : <span className="font-semibold">à payer en magasin</span></p>
          </div>
          <div className="print:hidden">
            <PrintButtonClient />
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300 mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left max-w-[300px]">Schéma</th>
              <th className="border border-gray-300 p-2 text-left w-[150px]">Nom</th>
              <th className="border border-gray-300 p-2 text-left">Mesures</th>
              <th className="border border-gray-300 p-2 text-left w-[100px] break-words">Prix unit. HT</th>
              <th className="border border-gray-300 p-2 text-center">Qté</th>
              <th className="border border-gray-300 p-2 text-left">Prix HT</th>
              <th className="border border-gray-300 p-2 text-left">Prix TTC</th>
            </tr>
          </thead>
          <tbody>
            {listOfItems}
          </tbody>
        </table>

        {/* Total */}
        <div className="mt-8 border-t-2 pt-4 flex justify-between items-start gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Votre total</h2>
            <p className="text-gray-600 mb-4">Montant de votre commande</p>
            <table className="w-full max-w-md border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Prix HT</th>
                  <th className="border border-gray-300 p-2 text-left">TVA</th>
                  <th className="border border-gray-300 p-2 text-left">Prix TTC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold">{singleOrder.total_amount_HT} €</td>
                  <td className="border border-gray-300 p-2">20 %</td>
                  <td className="border border-gray-300 p-2 font-bold">{singleOrder.total_amount_TTC} €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center gap-4">
            <div className='flex flex-col items-center justify-center'>   <p className="text-sm font-medium whitespace-nowrap">Signature client</p>
              <p className="text-center text-sm">(bon pour accord)</p></div>

            <div className="w-[300px] h-[200px] border-2 border-gray-300 rounded-md flex items-center justify-center p-4">

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

