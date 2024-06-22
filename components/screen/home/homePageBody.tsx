import SectionValeurs from "@/components/ui/sectionValeurs"
import { Caroussel } from "../caroussel";
import SectionProjects from "@/components/ui/sectionProjects";
import SectionProcess from "@/components/ui/sectionProcess";

const HomePageBody = ({}: {}) => {
    return (
        <div>
            <Caroussel />
            <SectionValeurs/>
            <SectionProjects/>
            <SectionProcess/>
        </div>
    )
}


export default HomePageBody;
