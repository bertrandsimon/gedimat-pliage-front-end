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
        description: `0 jour pour les produits en stock.\n\nSous 5 jours ouvrés si fabrication < 50 pièces. \n\nPlus de 50 pièces : nous appeler  pour valider ensemble le délai de mise à disposition. 
`,
    },
    {
        name: 'Commande urgente',
        icon: ExclamationTriangleIcon,
        description: `Nous appeler pour convenir du délai.  Nous ferons notre maximum pour  trouver ensemble une solution.`,
    },
    {
        name: 'Retrait / Livraison',
        icon: TruckIcon,
        description: `Retrait et livraison possible depuis toutes les agences indiquées sur la carte. Un SMS vous sera envoyé dés que c'est prêt : cliquez ici pour connaître les horaires d’ouverture.`,
    },
    {
        name: 'Paiement',
        icon: CreditCardIcon,
        description: `Vous êtes client en compte "terme": vous serez facturé et paierez avec votre facture fin de mois.\n\nVous n'avez pas de compte "terme" : vous payez au moment de la validation de votre panier.`,
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