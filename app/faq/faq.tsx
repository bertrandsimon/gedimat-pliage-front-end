'use client'

import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Faq() {
  const faqs = [
    {
      question:
        'Comment le délai de livraison de ma commande est-il déterminé ?',
      answer:
        'Le délai de livraison affiché pour votre commande est calculé en tenant compte du stock de matière disponible et de la charge actuelle de l’atelier. À cela s’ajoute le délai de transport en fonction de votre région. Le délai indiqué correspond toujours au produit ayant le délai le plus long dans votre commande. Si vous souhaitez recevoir certains produits plus rapidement, il est conseillé de scinder votre commande en deux commandes distinctes.',
    },
    {
      question:
        'Pourquoi des messages d’erreur s’affichent-ils lors de la configuration d’une pièce ?',
      answer:
        'Notre configurateur prend en compte les limites de faisabilité de nos outils de production et des matériaux utilisés, en plus des dimensions que vous fournissez. Si une pièce n’est pas réalisable, le site vous en informe immédiatement, évitant ainsi des modifications ou annulations après votre commande. Vous bénéficiez ainsi d’une information en temps réel.',
    },
    {
      question:
        'Est-il possible de régler ma commande sur facture plutôt que par carte bancaire ?',
      answer:
        'Notre politique commerciale est claire à ce sujet : nous n’offrons pas la possibilité de régler sur facture pour les particuliers ou artisans.',
    },
    {
      question:
        'Pourquoi une étude interne est-elle nécessaire pour une commande volumineuse ?',
      answer:
        'Lorsque vous créez un panier, la matière nécessaire est réservée afin de vous garantir un délai de livraison. Cependant, pour des volumes importants, cela peut impacter la disponibilité pour d’autres clients. Une étude interne permet de gérer ces cas spécifiques et d’optimiser l’approvisionnement auprès de nos fournisseurs pour répondre à votre besoin.',
    },
    {
      question:
        'Puis-je commander une pièce qui ne correspond pas aux profils proposés sur le site ?',
      answer:
        'Nous ne proposons pas de produits entièrement sur-mesure pour le moment. Les options disponibles sont celles des profils configurables sur le site. Cependant, vous pouvez envisager des usages alternatifs pour certaines pièces, comme transformer un appui de fenêtre en plan de travail.',
    },
    {
      question: 'Quelle est la méthode de conditionnement de vos produits ?',
      answer:
        'Les petites pièces sont emballées dans des cartons sécurisés sur une palette. Pour les commandes volumineuses, des caisses sur-mesure en bois et acier sont utilisées, garantissant une livraison dans des conditions optimales. Des exemples de conditionnement sont disponibles en ligne.',
    },
    {
      question: 'Vos emballages sont-ils consignés ou réutilisables ?',
      answer:
        'Pour l’instant, nous ne proposons pas de système de consigne. Le recyclage des emballages reste à votre charge.',
    },
    {
      question:
        'Pourquoi le coût d’une pièce diminue-t-il pour une commande en grande quantité ?',
      answer:
        'Nos tarifs tiennent compte des économies réalisées en production série. Commander plusieurs pièces réduit les coûts fixes par unité. Ces économies sont répercutées sur le prix, vous permettant d’obtenir un tarif unitaire plus avantageux pour des commandes groupées.',
    },
    {
      question: 'Dans quelles zones livrez-vous vos produits ?',
      answer:
        'Nous livrons partout en France et en Belgique. Vous pouvez également retirer vos commandes gratuitement à notre atelier de Saint-Symphorien-Des-Bruyères (61), à condition d’avoir un véhicule adapté au transport de vos pièces.',
    },
    {
      question: 'Comment commander des pièces standards en tant que négoce ?',
      answer:
        'Les pièces standards de notre catalogue ne sont pas disponibles en ligne. Veuillez contacter vos interlocuteurs commerciaux habituels pour effectuer une commande.',
    },
    {
      question:
        'Comment créer un compte client sur le site en tant que négoce ?',
      answer:
        'Si vous êtes déjà en compte chez Frénéhard, vos identifiants de connexion vous ont été envoyés par mail. En cas de non-réception, contactez votre interlocuteur commercial ou ADV. Si vous n’avez pas encore de compte, contactez-nous pour une ouverture.',
    },
    {
      question: 'Puis-je commander une couleur non disponible sur le site ?',
      answer:
        'Les couleurs proposées sont celles disponibles en stock. Pour des volumes importants, nous pouvons interroger nos fournisseurs pour un approvisionnement spécifique. Contactez-nous par mail ou via le chat en précisant vos besoins.',
    },
    {
      question: 'Comment calculez-vous les frais de livraison et d’emballage ?',
      answer:
        'Les frais de livraison dépendent du poids de votre commande et de la distance avec notre atelier, selon les grilles de nos transporteurs. Les frais d’emballage comprennent un forfait fixe de 40 € HT et 5 % de la valeur de la commande HT, assurant un conditionnement de qualité.',
    },
    {
      question:
        'Quels types de revêtements ou alliages proposez-vous pour vos matériaux ?',
      answer:
        'Nos aciers prélaqués offrent une protection anticorrosion Z225 (15µm) avec un revêtement polyester de 25µm. Les feuilles d’aluminium disposent d’une peinture polyester de 25 à 60µm, garantissant une bonne tenue.',
    },
    {
      question:
        'Combien de pattes de fixation dois-je prévoir pour une couvertine à clipser ?',
      answer:
        'Il est recommandé de placer une patte de fixation à chaque extrémité, puis une tous les 45 à 60 cm selon le poids de la couvertine. Les spécificités de votre chantier, notamment en région ventée ou enneigée, doivent également être prises en compte conformément à la norme NF EN 1991-1-4.',
    },
    {
      question: 'Comment déterminer la largeur idéale de ma couvertine ?',
      answer:
        'La largeur conseillée est la somme de la largeur du mur, de l’épaisseur d’enduit de chaque côté, et de 25 mm supplémentaires de chaque côté. Exemple : pour un mur de 200 mm avec un enduit de 10 mm, la largeur est de 200 + 10 + 10 + 25 + 25 = 270 mm.',
    },
  ]

  return (
    <div className="greyBg rounded-xl pb-20">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-32 lg:px-8 lg:py-14 ">
        <div className="mx-auto  divide-y divide-white/10">
          <p className="uppercase oswald text-2xl text-center">
            <span className="pr-2 font-semibold">questions</span>
            <span className="font-light">fréquentes</span>
          </p>

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
