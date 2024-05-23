
const ScreenFooter = ({
    footerHeight, 
    children
}: {
    footerHeight: string,
    children: React.ReactNode
}) => {
    return (
        <footer 
            style={{height: `${footerHeight}`}} 
            className=""
        >
            {children}
        </footer>
    )
}

export default ScreenFooter;