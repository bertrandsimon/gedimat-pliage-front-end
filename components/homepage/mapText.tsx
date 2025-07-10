import Link from 'next/link'
import Image from 'next/image'



export default function MapText() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">


            <div id="col1">
                <div className="flex items-center justify-end gap-2 pb-4">
                    <Image
                        src="/images/map.jpg"
                        width={520}
                        height={447}
                        alt="carte agences pliage-aluminium"
                        className="mt-4"
                    />

                </div>


            </div>
            <div id="col2">
                <div
                    id="line1"
                    className="flex flex-col gap-2 pl-12 justify-center h-full">
                    <p className="font-medium">Nos agences</p>
                    <p className="font-bold text-2xl">Présent à vos côtés </p>
                    <p className="text-md">
                        Notre site a été conçu pour vous faciliter la commande : modélisation des pièces, solutions sur mesure préformées, il vous suffit d’entrer vos dimensions pour éviter les erreurs.
                        <br /><br />
                        Chaque commande est vérifiée par nos spécialistes pliage avant validation, lancement en fabrication et confirmation du délai.
                        <br /><br />
                        Enlèvement et livraison sont possibles depuis toutes les agences indiquées sur la carte.
                    </p>

                </div>
            </div>
        </div>
    )
}
