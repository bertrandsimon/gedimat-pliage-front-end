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
        name: 'Délais de fabrication',
        icon: ClockIcon,
        description: `0 jour pour les produits en stock.\n\nSous 5 jours ouvrés si fabrication < 50 pièces. + de 50 pièces : on vous contacte sous 24 h.`,
    },
    {
        name: 'Commande urgente',
        icon: ExclamationTriangleIcon,
        description: `Besoins express : appelez-nous au ..., nous ferons le maximum pour trouver une solution rapide.`,
    },
    {
        name: 'Retrait / Livraison',
        icon: TruckIcon,
        description: `Retrait et livraison possible depuis toutes les agences indiquées sur la carte. Un SMS vous sera envoyé dés que c'est prêt : cliquez ici pour connaître les horaires d’ouverture.`,
    },
    {
        name: 'Paiement',
        icon: CreditCardIcon,
        description: `Vous avez un compte terme Gedimat / Gedibois : facturation fin de mois.\n\nSans compte : paiement sécurisé avant fabrication.`,
    }
];

export default function Infos() {

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {informations.map((info) => (
                <div
                    key={info.name}
                    className="rounded-lg bg-[#F2F5F6] p-6 text-center"
                >
                    <div>
                        <div className="mx-auto w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <info.icon className="h-8 w-8 flex-shrink-0 text-black" />
                        </div>

                        <p className="mt-4 text-sm font-medium text-black">
                            {info.name}
                        </p>
                    </div>
                    <p className="mt-4 text-sm text-black text-justify whitespace-pre-line">
                        {info.description}
                    </p>
                </div>
            ))}
        </div>
    )
}