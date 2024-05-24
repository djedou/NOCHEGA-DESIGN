import ScreenLayout from "@/components/screen";
import HomePageBody from "@/components/screen/home/homePageBody";
import HomePageFooter from "@/components/screen/home/homePageFooter";
import HomePageHeader from "@/components/screen/home/homePageHeader";




export default function Home() {
  return (
    <ScreenLayout
        headerHeight = "70px"
        footerHeight = "160px"
        // headerComponent=<HomePageHeader/>
        bodyComponent=<HomePageBody/>
        // footerComponent=<HomePageFooter/>
    />
  );
}
