import {
    CurrencyDollarIcon,
    GlobeAmericasIcon,
    TruckIcon,
    CreditCardIcon,
    ClockIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const informations = [
    {
        name: 'Retrait / Livraison',
        icon: TruckIcon,
        description: `Retrait à l'atelier de XXXX sur nos horaires. SMS dès que c’est prêt.\n\nLivraison gratuite sur votre Gedimat XXXX (navette 1 fois/semaine).\n\nLivraison possible sur chantier, atelier ou domicile : nous vous contactons pour valider les détails et le tarif.`,
    },
    {
        name: 'Paiement',
        icon: CreditCardIcon,
        description: `En compte "terme" : facturation classique.\n\nSans compte : paiement à la validation du panier.\n\nEn cas de doute sur votre statut, contactez-nous avant de finaliser votre commande.`,
    },
    {
        name: 'Délais de fabrication',
        icon: ClockIcon,
        description: `En stock : dispo sous 5 jours ouvrés si < 50 pièces.\n\nSi + de 50 pièces, nous vous contactons sous 24 h.\n\nHors stock : prévoir 10 jours de plus. `,
    },
    {
        name: 'Commande urgente',
        icon: ExclamationTriangleIcon,
        description: `Donnez nous votre numéro de téléphone, nous vous contactons sous 24 h.\n\nNous ferons notre maximum pour trouver une solution.`,
    }
];

export default function Infos() {

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
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