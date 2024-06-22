import { Button } from "@/components/ui/button"
import Link from "next/link"
import Salon from "../../public/images/carou4.jpg";
import Image, { StaticImageData } from "next/image";


const images: {comp: StaticImageData, alt: string, titre: string, message: string} [] = [
    {
        comp: Salon,
        alt: "kitchen",
        titre: "AUDIT : Identification de vos besoins sur l’existant",
        message: `Du  concept à  la réalisation :  la vision est un premier pas, mais ce premier pas peut se heurter au mur de la réalité si tous les paramètres ne sont pas pris en 
                compte. Nous avons à cœur de  faire de cette première étape du projet quelque 
                chose  qui  vous  ressemble  et  qui  vous  correspond.  Lors  de  ce  rendez-vous 
                gratuit,  notre priorité,  lorsque nous démarrons notre collaboration, est de bien 
                analyser et comprendre vos besoins. L’existant  communique  ses  principales 
                recommandations.  Cela passe par votre vision de  l’agencement  et de design 
                d’intérieur, mais également la prise en compte de votre budget et de votre espace 
                habitable. Si  les  besoins  des  clients  s’accordent  aux  idées  de  Nochega 
                Design, nous soumettons une proposition commerciale.`
    },
    {
        comp: Salon,
        alt: "kitchen",
        titre: "DOSSIER D’ETUDE : Devis validé et plans",
        message: `Succédant à l’audit, c’est la deuxième étape d’une réalisation. Une fois 
                tous les paramètres pris en compte, nous sommes en mesure de vous fournir un
                devis détaillé et co-construit avec vous.  le  dossier  d’étude  requiert  deux  à 
                six  semaines  d’élaboration.  Ce devis vous permet de visualiser clairement 
                l’ensemble  des  travaux  à  réaliser  et  vous  permet  de  ne  pas  avoir  la moindre 
                surprise  au moment de  la  facture. Les  plans  sont  effectués  par  nos  architectes 
                d’intérieur  spécialisés.  À  l’issue  de  cette  étude,  une estimation  du  coût  des 
                travaux (estimation donnée à titre indicatif) est établie.`
    },
    {
        comp: Salon,
        alt: "kitchen",
        titre: "PROPOSITION TRAVAUX : Gros œuvre",
        message: `Le  dossier  d’étude  finalisé,  l’architecte  d’intérieur  élabore  la 
                proposition  commerciale des  travaux,  en  concordance  avec  celui-ci. 
                Le  devis  est  scindé  en  deux  parties  :  la  première  est  consacrée  aux 
                produits  utilisés,  la  seconde  à  la  main  d’œuvre  nécessaire.  Nous 
                commençons donc par toutes les actions ayant un impact au niveau de la structure 
                du  bâtiment  :  fondations,  poutres,  murs  porteurs,  etc.  Les  descriptifs  sont 
                détaillés,  chiffrés  et  s’accompagnent  d’un  rétro  planning  ; 
                conformément au budget et aux délais ajustés.`
    },
    {
        comp: Salon,
        alt: "kitchen",
        titre: "REALISATION DE L’OUVRAGE:",
        message: `La dernière étape est la réalisation du projet. Nochega Design exécute 
                l’ensemble des travaux en partenariat avec des sous-traitants, tels que 
                des artisans et des entreprises du bâtiment, ainsi qu’avec des fabricants 
                et des distributeurs. Nous finissons les travaux par le parachèvement, c’est-à-
                dire  les  actions  qui  n’ont  pas  d’impact  sur  la  stabilité  ni  la  solidité  du  bâti  : 
                isolation  thermique,  revêtements  des  sols,  cloisons  murales,  électricité, 
                plomberie, mobilier d’intérieur, chauffage, extraction d’air, etc. Ayant établi de 
                solides  relations de confiance avec nos sous-traitant , nous assurons un 
                ouvrage en parfaite cohésion avec  les attentes de ses clients,  le budget 
                et les délais préétablis`
    },
    {
        comp: Salon,
        alt: "kitchen",
        titre: "PRESTATION SUR MESURE ET APPROCHE BUDGETAIRE",
        message: `L’agence  d’architecture  d’intérieur Nochega Design  vous  propose  une 
            gamme  complète  de  prestations  en  aménagement,  architecture 
            d’intérieur,  relooking,  décoration  de  votre  projet  de  rénovation. 
            Pour une approche budgétaire détaillée prenant en considération toutes 
            les  contraintes  architecturales  et  techniques,  consultez nos pr estations 
            et réalisation de travaux.`
    }
]

const SectionProcess = ({}: {}) => {
    return (
        <section className="bg-gray-100 pt-8">
            <p className="flex flex-col items-center justify-center text-2xl font-black text-lime-900 font-mono py-9">
                Featured Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 px-8">
                {images.map(({comp, alt, titre, message}, i) => (
                    <div key={i} className="relative h-80">
                        <Image
                            src={comp}
                            alt={alt}
                            className="w-40 h-36 contrast-[0.15]"
                        />
                        <div className="absolute top-16 left-16">
                            <p className="pb-3 text-lg font-semibold">{titre}</p>
                            <p className="">{message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SectionProcess