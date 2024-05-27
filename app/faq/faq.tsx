'use client'

import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Faq() {
  const faqs = [
    {
      question: "Comment savoir si mon dispositif apporte des bénéfices ? ",
      answer:
        "Nous sommes là pour vous aider à organiser les programmes d’évaluation nécessaires et mettre en œuvre tous les outils pour décrire au mieux d’éventuels bénéfices.",
    },
    {
      question:
        "Quel est le temps minimal pour une évaluation ou une recherche ?",
      answer:
        "À la validation du protocole, il faut compter environ 3 à 4 mois pour réaliser les différents tests en situation. ",
    },
    {
      question:
        "À partir de quand puis-je recevoir un rapport complet avec les résultats ?",
      answer:
        "Dans la majorité de cas, nous ne dépassons jamais la durée globale de l’étude ou de l’évaluation pour livrer notre rapport, soit 3 mois la plupart du temps.",
    },
    {
      question:
        "Est-ce que le rapport final est délivré en plusieurs langues ?",
      answer:
        "Il est fourni de base en langue française mais il est également souvent réalisé en langue anglaise sur simple demande.",
    },
    {
      question:
        "Est-ce que vous aidez les entreprises à interpréter les résultats issus de vos tests ou de vos recherches ?",
      answer:
        "Oui, nous sommes présents à vos côtés même au-delà des simples résultats liés à notre évaluation. ",
    },
    {
      question:
        "Est-il possible de faire de simples tests au début pour cibler nos hypothèses et orienter les bénéfices liés à notre produit ?",
      answer: "Cela est tout à fait envisageable voire souvent recommandé. ",
    },
    {
      question:
        "Est-il possible d’effectuer des tests de santé mentale dans mon entreprise de plus de 100 salariés et en combien de temps ?",
      answer:
        "Nous avons une unité mobile d’évaluation et nous sommes en mesure de nous déplacer pour évaluer la santé mentale de vos salariés. Pour 100 salariés, il faudra compter environ 3 jours sur place.",
    },
    {
      question:
        "J’ai un produit à tester dans le monde du sport : est-ce que vous vous chargez du recrutement des sportifs ?",
      answer:
        "Oui, nous faisons le recrutement et la pré-sélection en fonction des critères spécifiques et en accord avec votre produit et ses exigences.",
    },
  ];

  return (
    <div className="bg-gray-900 rounded-xl pb-40">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-32 lg:px-8 lg:py-14 ">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <p className="uppercase oswald text-4xl text-white text-center">
            <span className="pr-2 font-semibold">questions</span>
            <span className="font-light">fréquentes</span>
          </p>

          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
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
                      <p className="text-base leading-7 text-gray-300">
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
