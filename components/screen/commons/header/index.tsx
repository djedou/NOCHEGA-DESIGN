
const ScreenHeader = ({
    headerHeight, 
    children
}: {
    headerHeight: string,
    children: React.ReactNode
}) => {
    return (
        <header 
            style={{height: `${headerHeight}`}}
            className=""
        >
            {children}
        </header>
    )
}

export default ScreenHeader;