'use client'

import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Faq() {
  const faqs = [
    {
      question: "Comment est calculé mon délai de livraison ?",
      answer: "Le délai de livraison indiqué pour votre commande est donné en fonction du stock de matière et de la charge de l’atelier en temps réel. Nous ajoutons à cela le délai indiqué par notre transporteur pour livrer dans votre région. Le délai indiqué sera toujours celui du produit le plus « pénalisant » de votre commande. Si vous souhaitez recevoir l’un de vos produits plus rapidement sans être pénalisé par le produit ayant un délai de livraison plus élevé, nous vous invitons à scinder votre commande en 2 commandes distinctes.",
    },
    {
      question: "A quoi correspondent les messages d’erreur lorsque je configure une pièce ?",
      answer: "Notre configurateur ne se contente pas de cumuler vos cotes. Il intègre également les limites de faisabilité de nos outils de production et de notre matière première. Ainsi, si la pièce que vous souhaitez configurée n’est pas réalisable à l’atelier, le site vous l’indique directement. C’est un gain de temps pour vous comme pour nous car cela évite de devoir vous contacter plusieurs heures après votre commande pour vous indiquer que votre pièce n’est pas réalisable. Avec cet outil, vous avez l’information en temps réel !",
    },
    {
      question: "Je suis un artisan et je souhaiterais régler sur facture plutôt que par carte bancaire.",
      answer: "Malheureusement, notre politique commerciale est stricte à ce sujet. Nous ne proposons pas de règlement sur facture à nos clients particuliers et artisans.",
    },
    {
      question: "Le site m’indique que le volume de pièces que je souhaite commander est trop important et qu’une étude interne est nécessaire, pourquoi ?",
      answer: "Il y a plusieurs raisons à cela. Tout d’abord, lorsque vous créez un panier, l’atelier vous réserve la matière nécessaire pour réaliser vos pièces. Cela nous permet de vous transmettre un délai de livraison et de vous donner la priorité sur le stock de matière. Ainsi, si une personne crée son panier quelques instants après vous, la matière qui lui sera disponible ne comprendra pas celle que nous avons réservé pour vous. Malheureusement ce système a une limite. Si trop de personnes créent des paniers sans concrétiser leur commande, la matière peut apparaître comme en rupture de stock et donc pénaliser le délai de livraison des autres clients. De la même manière, si le volume d’une commande est trop important, le stock de matière disponible pour les autres clients ne sera plus suffisant. La meilleure solution reste selon nous de gérer votre commande individuellement en consultant nos fournisseurs avec des volumes spécifiques pour votre besoin.",
    },
    {
      question: "J’ai besoin d’une pièce spécifique qui ne rentre pas dans les profils proposés sur le site / Je souhaite dessiner ma propre pièce sans passer par les profils du site.",
      answer: "Malheureusement nous ne proposons pas encore de produits 100% sur-mesure. Les seuls choix possibles sont ceux proposés parmi les profils à configurer. En revanche, rien n’empêche de détourner les usages prévus initialement. Par exemple : un appui de fenêtre pourrait peut-être faire office de plan de travail ?",
    },
    {
      question: "Comment sont conditionnés les produits ?",
      answer: "Nous avons plusieurs façons de conditionner vos produits. Pour les petites pièces, nous les emballons dans un carton que nous cerclons sur une palette qui l’entoure entièrement. Pour les volumes plus importants, nous réalisons des caisses à la commande composées d’un mélange de bois et d’acier pour que vos pièces vous soient livrées dans un état optimal. Retrouvez quelques visuels de conditionnement en cliquant ici.",
    },
    {
      question: "Vos conditionnements sont-ils consignés, pouvons-nous vous les renvoyer ?",
      answer: "Cela n’est pas prévu pour le moment le recyclage des emballages est de votre responsabilité.",
    },
    {
      question: "Il y a un écart de prix important entre une pièce commandée à l’unité et une commande de plusieurs pièces.",
      answer: "En effet, le calcul de nos prix de vente tient compte de l’effet de série de production. Ainsi, lorsque vous commandez plusieurs pièces, les frais fixes de production sont divisés par le nombre de pièces souhaité. Au final, commander plusieurs pièces fait baisser le coût unitaire. Plutôt que de garder les gains pour nous, nous les déduisons du prix de vente. Vous serez donc gagnants à passer une commande complète en une seule fois plutôt que la diviser en plusieurs « petites » commandes.",
    },
    {
      question: "Quel est votre rayon de livraison ?",
      answer: "Nous livrons dans toute la France, ainsi qu’en Belgique. Pour vous faire économiser des frais de livraisons, nous proposons également un retrait par enlèvement à l’atelier 100% gratuit (à Saint-Symphorien-Des-Bruyères – département 61). Cela implique d’avoir un véhiculé adapté au transport de vos pièces car notre équipe a la consigne de ne pas charger les pièces si un problème de sécurité de transport est détecté.",
    },
    {
      question: "Je suis un négoce et je souhaite commander des pièces standards de votre catalogue, comment dois-je m’y prendre ?",
      answer: "Ces pièces ne peuvent pas être commandées directement sur le site internet. Vous devez vous rapprocher de vos contacts commerciaux et ADV habituels qui pourront saisir votre commande.",
    },
    {
      question: "Je suis un négoce et je souhaite créer un compte client sur le site.",
      answer: "Tous les négoces déjà en compte chez Frénéhard ont un compte pré-créé sur le site frenehard-pliage.fr. Vos identifiants vous ont normalement été envoyés par mail. Si vous ne les avez pas reçus, nous vous invitons à contacter votre contact commercial ou ADV pour qu’ils puissent vous les communiquer. Si vous n’êtes pas encore en compte chez Frénéhard, n’hésitez pas à nous contacter afin de procéder à une ouverture de compte.",
    },
    {
      question: "Je souhaite une autre couleur que celles proposées sur le site.",
      answer: "Les couleurs proposées sont celles que nous tenons en stock. En fonction du volume que vous souhaitez commander nous pouvons interroger nos fournisseurs pour un approvisionnement spécifique pour votre besoin. Pour cela, merci de nous contacter par mail ou via le tchat en nous précisant au maximum votre besoin.",
    },
    {
      question: "Comment sont calculés les frais de livraison / d’emballage ?",
      answer: "Les frais de livraison sont calculés en fonction du poids de votre commande et de la distance entre le point de livraison et notre atelier, selon les grilles tarifaires de nos transporteurs. Les frais d’emballage correspondent à un forfait de 40 € HT + 5% de la valeur de votre commande HT. Cela nous permet de vous proposer un emballage de qualité qui garantit la bonne tenue de vos pièces durant le transport.",
    },
    {
      question: "Quels sont les revêtements / alliages des matières proposées ?",
      answer: "Nos aciers prélaqués ont une protection contre la corrosion qualité Z225 (15µm) + revêtement polyester de 25µm. Nos feuilles d’aluminium ont une bonne tenue à la corrosion avec une épaisseur de peinture polyester de 25 à 60µm.",
    },
    {
      question: "Combien dois-je mettre de pattes de fixation sur ma couvertine à clipser ?",
      answer: "En France métropolitaine, il est généralement conseillé de poser une patte de fixation à chaque extrémité de sa couvertine, puis une patte tous les 45 à 60 cm selon son poids. Plus celle-ci est lourde, plus elle nécessitera de pattes de fixation. En revanche, il faudra toujours tenir compte des spécificités de votre chantier, de la région et de l’environnement dans lequel celui-ci se trouve pour déterminer votre besoin exact de pattes de fixation. Les efforts engendrés par la neige et le vent sont des éléments déterminant pour calculer ce besoin. Il faudra donc se référer systématiquement à la norme NF EN 1991-1-4 afin de déterminer son besoin pour chaque chantier. L’entreprise Frénéhard Pliage fournira le nombre de pattes demandé par ses clients mais ne pourra être en aucun cas tenu responsable du sous-dimensionnement du besoin en cas de litige.",
    },
    {
      question: "Comment connaitre la largeur de ma couvertine ?",
      answer: "Nous conseillons généralement le calcul suivant : Largeur du mur + épaisseur d’enduit (de chaque côté du mur) + 25mm (de chaque côté du mur). Exemple pour un mur de 200mm et un enduit de 10mm : 200 + 10 + 10 + 25 +25 = 270mm. Ceci est un conseil général qui doit bien sûr être additionné aux spécificités de votre chantier.",
    },
  ];

  return (
    <div className="greyBg rounded-xl pb-40">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-32 lg:px-8 lg:py-14 ">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <p className="uppercase oswald text-4xl  text-center">
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
                            <MinusIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
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
  );
}
