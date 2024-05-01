
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
            className="border border-solid"
        >
            {children}
        </header>
    )
}

export default ScreenHeader;