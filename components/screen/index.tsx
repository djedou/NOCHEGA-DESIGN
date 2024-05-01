import { ScreenBody, ScreenFooter, ScreenHeader } from "./commons";

const ScreenLayout = ({
    headerHeight = "42px", 
    footerHeight = "0px", 
    headerComponent, 
    bodyComponent, 
    footerComponent
}: {
    headerHeight?: string, 
    footerHeight?: string, 
    headerComponent?: React.ReactNode, 
    bodyComponent: React.ReactNode, 
    footerComponent?: React.ReactNode
}) => {
    return (
        <main className="h-dvh">
            {headerComponent !== undefined ? <ScreenHeader headerHeight={headerHeight}>{headerComponent}</ScreenHeader> : null}
            <ScreenBody bodyHeight={headerComponent !== undefined ? `calc(100dvh - ${headerHeight} - ${footerHeight})` : `calc(100dvh - ${footerHeight})`}>
                {bodyComponent}
            </ScreenBody>
            {footerComponent !== undefined ? <ScreenFooter footerHeight={footerHeight}>{footerComponent}</ScreenFooter> : null}
        </main>
    )
}


export default ScreenLayout;