import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'
import Top from '@/components/presentation/top'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata('cgv')

export default function cgvPage() {
    return (
        <div>
            <DynamicBreadcrumb />
            <div className="px-4 sm:px-12 py-6 sm:py-12">
                <Top
                    title="CGV"
                    subtitle="Conditions générales de vente"
                    sliderOn={true}
                    imageTop="man.png"
                ></Top>
            </div>
            <div className="p-4 sm:p-12 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente (CGV)</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">1. Informations légales</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Raison sociale : <span className="font-medium text-gray-600">[● Raison sociale de la société]</span></li>
                        <li>Forme juridique : <span className="font-medium text-gray-600">[● SAS, SARL, Auto-entrepreneur…]</span></li>
                        <li>Adresse du siège social : <span className="font-medium text-gray-600">[● Adresse complète]</span></li>
                        <li>SIRET / RCS : <span className="font-medium text-gray-600">[● Numéro SIRET ou RCS]</span></li>
                        <li>Nom du représentant légal : <span className="font-medium text-gray-600">[● Nom]</span></li>
                        <li>Téléphone : <span className="font-medium text-gray-600">[● Numéro]</span></li>
                        <li>Email : <span className="font-medium text-gray-600">[● Adresse email de contact]</span></li>
                        <li>Site web : <span className="font-medium text-gray-600">[● URL de la web app]</span></li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">2. Objet</h2>
                    <p>
                        Les présentes conditions générales régissent l’utilisation et la vente des services proposés via le site
                        <span className="font-medium text-gray-600"> [● URL]</span>, application web de
                        <strong> modélisation, calcul et commande de pièces en aluminium pliées sur mesure</strong>.
                    </p>
                </section>

                {[
                    {
                        title: "3. Acceptation des CGV",
                        content:
                            "Toute commande passée via la plateforme vaut acceptation sans réserve des présentes CGV par l'utilisateur.",
                    },
                    {
                        title: "4. Description des services",
                        content: (
                            <ul className="list-disc list-inside space-y-1">
                                <li>Créer des pièces pliées en aluminium via une interface en ligne ;</li>
                                <li>Obtenir un devis en temps réel ;</li>
                                <li>Commander les pièces selon les spécifications fournies ;</li>
                                <li>Suivre l’avancement de la fabrication et de la livraison.</li>
                            </ul>
                        ),
                    },
                    {
                        title: "5. Commande",
                        content: (
                            <>
                                <p className="mb-2 font-semibold">5.1 Modalités</p>
                                <p className="mb-2">
                                    Le client valide sa commande via l'interface web après avoir complété les informations techniques
                                    (dimensions, angles, matière, quantité, etc.).
                                </p>
                                <p className="mb-2 font-semibold">5.2 Vérification</p>
                                <p className="mb-2">
                                    Le client est seul responsable des données techniques saisies. Il est invité à les vérifier avant validation définitive.
                                </p>
                                <p className="mb-2 font-semibold">5.3 Paiement</p>
                                <p>
                                    Le paiement s’effectue via
                                    <span className="font-medium text-gray-600"> [● mode de paiement utilisé]</span>,
                                    au moment de la commande.
                                </p>
                            </>
                        ),
                    },
                    {
                        title: "6. Prix",
                        content:
                            "Les prix sont indiqués en euros hors taxes (HT) et toutes taxes comprises (TTC). Des frais de livraison peuvent s’ajouter : [● politique d’expédition].",
                    },
                    {
                        title: "7. Délais de fabrication et de livraison",
                        content:
                            "Le délai moyen de fabrication est de [● nombre de jours] jours ouvrés, auquel s’ajoute le délai de livraison estimé à [● nombre de jours].",
                    },
                    {
                        title: "8. Livraison",
                        content:
                            "En cas de colis détérioré ou manquant, une réserve doit être formulée auprès du transporteur et signalée dans un délai de 48h à [● adresse email].",
                    },
                    {
                        title: "9. Droit de rétractation",
                        content:
                            "Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas aux produits fabriqués sur mesure.",
                    },
                    {
                        title: "10. Garantie et réclamations",
                        content:
                            "Le client dispose d’un délai de [● nombre de jours] jours après réception pour faire une réclamation écrite à [● adresse email].",
                    },
                    {
                        title: "11. Responsabilité",
                        content:
                            "La société ne saurait être tenue responsable des erreurs de saisie, d’une mauvaise utilisation ou de dommages indirects.",
                    },
                    {
                        title: "12. Propriété intellectuelle",
                        content:
                            "Tous les éléments du site sont la propriété exclusive de [● raison sociale], sauf contenu généré par les utilisateurs.",
                    },
                    {
                        title: "13. Données personnelles",
                        content:
                            "Les données collectées sont nécessaires à la gestion des commandes. Vous disposez d’un droit d’accès, de rectification et de suppression sur simple demande à [● adresse email].",
                    },
                    {
                        title: "14. Droit applicable et litiges",
                        content:
                            "Les CGV sont soumises au droit français. En cas de litige, compétence est attribuée au tribunal de commerce de [● ville].",
                    },
                ].map((section, idx) => (
                    <section key={idx} className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                        <div className="text-gray-800">{section.content}</div>
                    </section>
                ))}
            </div>
        </div>
    )

}