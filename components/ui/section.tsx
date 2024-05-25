import { Button } from "@/components/ui/button"
import Link from "next/link"

const SectionValeurs = ({}: {}) => {
    return (
        <section className="bg-gray-100 h-dvh">
            <div className="columns-1 md:columns-2">
                <div className="flex flex-col items-center justify-center h-80 border-solid">
                    <article className="text-wrap px-4">
                        <Button 
                            variant="link"
                            className="mb-6"
                        >
                            <Link className="" href="/excellence">
                                <h2 className="text-2xl">Excellence</h2>
                            </Link>
                        </Button>
                        <p className="break-normal text-left leading-normal font-normal indent-2">
                            Nous offrons la haute qualité de services, selon les normes 
                            les plus élevés en nous améliorant continuellement.
                        </p>
                    </article>
                </div>
                <div className="flex flex-col items-center justify-center h-80 border-solid">
                    <article className="text-wrap px-4">
                        <Button 
                            variant="link"
                            className="mb-6"
                        >
                            <Link className="" href="/excellence">
                                <h2 className="text-2xl">Créativité</h2>
                            </Link>
                        </Button>
                        <p className="break-normal text-left leading-normal font-normal indent-2">
                            Nous mettons en place notre imagination pour des nouvelles 
                            choses afin d’apporter une solution originale à un problème. Nous voulons 
                            réaliser la maison de vos rêves dans laquelle vous passeriez du temps.
                        </p>
                    </article>
                </div>

            </div>
            <div className="columns-1 md:columns-2">
                <div className="flex flex-col items-center justify-center h-80 border-solid">
                    <article className="text-wrap px-4">
                        <Button 
                            variant="link"
                            className="mb-6"
                        >
                            <Link className="" href="/excellence">
                                <h2 className="text-2xl">Intégrité</h2>
                            </Link>
                        </Button>
                        <p className="break-normal text-left leading-normal font-normal indent-2">
                            Nous sommes fidèles à nos engagements et respectons toutes 
                            vos décisions. Nous abordons chaque problème qui se présente, pour que 
                            vous n’ayez pas à le faire. Une communication claire, ouverte est honnête 
                            est assurée à chaque interaction.
                        </p>

                    </article>
                </div>
                <div className="flex flex-col items-center justify-center h-80 border-solid">
                    <article className="text-wrap px-4">
                        <Button 
                            variant="link"
                            className="mb-6"
                        >
                            <Link className="" href="/excellence">
                                <h2 className="text-2xl">Innovation</h2>
                            </Link>
                        </Button>
                        <p className="break-normal text-left leading-normal font-normal indent-2">
                            Nous anticipons chaque changements de vos besoins, tout 
                            en améliorant nos services. Les technologies révolutionnaires qui changent 
                            des espaces de vie plus belle en harmonie avec son style de vie.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default SectionValeurs