'use client'

export default function PrintButtonClient() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button
      onClick={handlePrint}
      className="uppercase bg-[#B51B1B] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#AE0027] transition-colors"
    >
      IMPRIMER
    </button>
  )
}

