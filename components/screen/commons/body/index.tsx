
const ScreenBody = ({
    bodyHeight, 
    children
}: {
    bodyHeight: string,
    children: React.ReactNode
}) => {
    return (
        <main style={{height: `${bodyHeight}`}} className="border border-solid">
            {children}
        </main>
    )
}

export default ScreenBody;