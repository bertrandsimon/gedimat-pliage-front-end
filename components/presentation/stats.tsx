export default function Stats() {
  const stats = [
    { id: 1, name: 'Projets avec pliage aluminium', value: '85 %' },
    { id: 2, name: 'Réduction des déchets', value: '30 %' },
    { id: 3, name: 'Entreprises utilisant l’alu', value: '12 500' },
    { id: 4, name: 'Temps moyen pliage (min)', value: '5' },
    { id: 5, name: 'Tonnes aluminium pliées/an', value: '20 000' },
    { id: 6, name: 'Proportion matériaux recyclés', value: '60 %' },
  ]
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center">
          <h2 className="font-medium text-2xl tracking-tight sm:text-2xl">
            Quelques chiffres
          </h2>
          <p className=" text-md leading-8 text-gray-500 font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <dl className="my-4 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col greyBg p-8 items-center justify-center"
            >
              <dt className="text-sm font-normal leading-6 text-gray-500">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-black pb-2">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
