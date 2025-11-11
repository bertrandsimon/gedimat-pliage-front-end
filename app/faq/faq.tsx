'use client'

import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Faq() {
  const faqs = [
    {
      question: 'Vos emballages sont-ils consignés ou réutilisables ?',
      answer:
        'Nous ne proposons pas de consigne pour le moment. Le recyclage des emballages reste à votre charge.',
    },
    {
      question: 'Comment commander des pièces standards en tant que négoce ?',
      answer:
        'Les pièces standards du catalogue ne sont pas proposées en ligne. Pour commander, contactez vos interlocuteurs commerciaux habituels.',
    },
    {
      question:
        'Pourquoi des messages d’erreur s’affichent-ils lors de la configuration d’une pièce ?',
      answer:
        'Le configurateur prend en compte les limites techniques de nos outils et matériaux, en plus des dimensions saisies. Si une pièce n’est pas réalisable, le système vous en informe immédiatement pour éviter corrections ou annulations après validation. Vous obtenez ainsi une information instantanée.',
    },
    {
      question:
        'Combien de pattes de fixation dois-je prévoir pour une couvertine à clipser ?',
      answer:
        'Il est conseillé de placer une patte à chaque extrémité, puis une tous les 45 à 60 cm selon le poids de la pièce. Les caractéristiques du site, notamment en zone ventée ou enneigée, doivent également être prises en compte selon la norme NF EN 1991-1-4.',
    },
    {
      question:
        'Pourquoi une étude interne est-elle nécessaire pour une commande volumineuse ?',
      answer:
        'Lors de la création du panier, la matière première est réservée afin d’assurer le délai. Pour de gros volumes, cela peut impacter la disponibilité pour d’autres clients. Une étude interne permet d’anticiper ces cas et d’optimiser l’approvisionnement auprès de nos fournisseurs.',
    },
    {
      question: 'Quelle est la méthode de conditionnement de vos produits ?',
      answer:
        'Les petites pièces sont protégées dans des cartons sécurisés sur palette. Pour les volumes importants, nous utilisons des caisses sur-mesure en bois et acier garantissant une livraison optimale. Des exemples sont visibles en ligne.',
    },
    {
      question:
        'Est-il possible de régler ma commande sur facture plutôt que par carte bancaire ?',
      answer:
        'Notre politique est claire : le paiement sur facture n’est pas proposé pour les particuliers ni les artisans.',
    },
    {
      question:
        'Puis-je commander une pièce qui ne correspond pas aux profils proposés sur le site ?',
      answer:
        'Nous ne proposons pas de pièces entièrement sur-mesure pour le moment. Seuls les profils configurables du site sont disponibles. Vous pouvez toutefois envisager d’autres usages, par exemple transformer un appui de fenêtre en plan de travail.',
    },
    {
      question: 'Comment déterminer la largeur idéale de ma couvertine ?',
      answer:
        'La largeur recommandée correspond à la largeur du mur, à l’épaisseur d’enduit de chaque côté, plus 25 mm supplémentaires de chaque côté. Exemple : pour un mur de 200 mm avec 10 mm d’enduit, la largeur idéale est 200 + 10 + 10 + 25 + 25 = 270 mm.',
    },
    {
      question: 'Puis-je commander une couleur non disponible sur le site ?',
      answer:
        'Les couleurs affichées sont celles en stock. Pour de grosses quantités, nous pouvons consulter nos fournisseurs pour un approvisionnement spécifique. Contactez-nous par mail ou via le chat en précisant vos besoins.',
    },
    {
      question:
        'Quels types de revêtements ou alliages proposez-vous pour vos matériaux ?',
      answer:
        'Nos aciers prélaqués disposent d’une protection anticorrosion Z225 (15µm) et d’un revêtement polyester 25µm. Les feuilles d’aluminium sont dotées d’une peinture polyester de 25 à 60µm, assurant une excellente tenue.',
    },
    {
      question:
        'Pourquoi le coût d’une pièce diminue-t-il pour une commande en grande quantité ?',
      answer:
        'Nos prix tiennent compte des économies réalisées en production série. Commander plusieurs pièces réduit les coûts fixes par unité. Ces gains permettent de proposer un tarif unitaire plus avantageux pour les commandes groupées.',
    },
    {
      question:
        'Comment calculez-vous les frais de livraison et d’emballage ?',
      answer:
        'Les frais de livraison dépendent du poids total et de la distance avec notre atelier, selon les grilles de nos transporteurs. Les frais d’emballage incluent un forfait fixe de 40 € HT et 5 % de la valeur de commande HT pour garantir un conditionnement de qualité.',
    },
    {
      question:
        'Comment le délai de livraison de ma commande est-il déterminé ?',
      answer:
        'Le délai indiqué est calculé selon la disponibilité des matières et la charge actuelle de l’atelier, auquel s’ajoute le temps de transport selon votre région. Le délai affiché correspond toujours à l’article le plus long de votre panier. Si vous souhaitez recevoir certains éléments plus vite, il est conseillé de séparer la commande en deux.',
    },
    {
      question: 'Comment créer un compte client sur le site en tant que négoce ?',
      answer:
        'Si vous êtes déjà en compte, vos identifiants vous ont été envoyés par mail. Si vous ne les avez pas reçus, contactez votre conseiller commercial ou l’ADV. Si vous n’avez pas encore de compte, nous pouvons en ouvrir un sur demande.',
    },
  ]


  return (
    <div className="greyBg rounded-xl pb-20">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-32 lg:px-8 lg:py-14 ">
        <div className="mx-auto  divide-y divide-white/10">
          {/* <p className="uppercase oswald text-2xl text-center">
            <span className="pr-2 font-semibold">questions</span>
            <span className="font-light">fréquentes</span>
          </p> */}

          <dl className="mt-10 space-y-6 divide-y divide-black/20">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-black-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
