import {
    CurrencyDollarIcon,
    GlobeAmericasIcon,
    TruckIcon,
    CreditCardIcon,
    ClockIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/outline'
import { ArrowTrendingDownIcon } from '@heroicons/react/24/outline'

const informations = [
    {
        name: 'Modalités Paiement',
        icon: CreditCardIcon,
        description: `Si vous disposez d’un compte en compte-terme chez Gedimat ou Gedibois, votre commande sera automatiquement intégrée à votre facturation de fin de mois.
        Sinon, un lien sécurisé vous sera envoyé pour effectuer le règlement à distance, avant le lancement en fabrication. \n\n\n\n`,
    },
    {
        name: 'Tarification degressive',
        icon: ArrowTrendingDownIcon,
        description: `Plus vous commandez de pièces d’un même modèle, plus le prix unitaire baisse. \n\n\ Vous commandez plusieurs modèles différents, mais la commande est conséquente ? Une bonne surprise vous attend au moment de valider votre panier : une remise supplémentaire peut s’appliquer automatiquement ! `,
    },
    {
        name: 'Vérification',
        icon: CheckIcon,
        description: `Nous vous confirmons la faisabilité de votre demande ainsi que les délais associés. Si vous ne disposez pas de compte à terme chez nous, nous vous transmettrons un lien sécurisé pour finaliser l’opération. `,
    }
];

export default function Infos3blocks() {

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {informations.map((info) => (
                <div
                    key={info.name}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                >
                    <div>
                        <info.icon className="mx-auto h-8 w-8 flex-shrink-0 text-gray-400" />

                        <p className="mt-4 text-sm font-medium text-gray-900">
                            {info.name}
                        </p>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 text-justify whitespace-pre-line">
                        {info.description}
                    </p>
                </div>
            ))}
        </div>
    )
}