import { Button } from "@/components/ui/button"
import Link from "next/link"

const HomePageFooter = ({}: {}) => {
    return (
        <div className="flex flex-col items-center">
            <h2>NOS VALEURS</h2>
            <div className="flex flex-wrap justify-between w-2/4">
                <Link className="flex flex-col items-center h-16 w-2/4" href="/excellence">
                    <Button 
                        variant="link"
                    >
                        Excellence
                    </Button>
                </Link>
                <Link className="flex flex-col items-center h-16 w-2/4" href="/creativite">
                    <Button 
                        variant="link"
                    >
                        Créativité
                    </Button>
                </Link>
                <Link className="flex flex-col items-center h-16 w-2/4" href="/integrite">
                    <Button 
                        variant="link"
                    >
                        Intégrité
                    </Button>
                </Link>
                <Link className="flex flex-col items-center h-16 w-2/4" href="/innovation">
                    <Button
                        variant="link"
                    >
                        Innovation
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HomePageFooter