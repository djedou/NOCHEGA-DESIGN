import { Button } from "@/components/ui/button"
import Link from "next/link"
import Salon from "../../public/images/carou4.jpg";
import Image, { StaticImageData } from "next/image";


const images: {comp: StaticImageData, alt: string, name: string} [] = [
    {
        comp: Salon,
        alt: "kitchen",
        name: "Salon"
    },
    {
        comp: Salon,
        alt: "kitchen",
        name: "Salon"
    },
    {
        comp: Salon,
        alt: "kitchen",
        name: "Salon"
    },
    {
        comp: Salon,
        alt: "kitchen",
        name: "Salon"
    }
]

const SectionProjects = ({}: {}) => {
    return (
        <section className="bg-gray-100">
            <p className="flex flex-col items-center justify-center text-2xl font-black text-lime-900 font-mono py-9">
                Featured Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 px-8">
                {images.map(({comp, alt, name}, i) => (
                    <div key={i}>
                        <Image
                            src={comp}
                            alt={alt}
                            className="w-auto"
                        />
                        <p className="flex flex-col items-center justify-center">{name}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center justify-center">
                <Button
                    className="mb-6 bg-black hover:border-2 hover:border-solid hover:border-black"
                >
                    <Link className="" href="/login">
                        <h2 className="text-2xl text-white hover:text-black">SEE FULL PORTFOLIO</h2>
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default SectionProjects