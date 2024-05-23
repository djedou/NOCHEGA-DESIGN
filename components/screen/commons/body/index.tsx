
const ScreenBody = ({
    bodyHeight, 
    children
}: {
    bodyHeight: string,
    children: React.ReactNode
}) => {
    return (
        <main style={{height: `${bodyHeight}`}} className="">
            {children}
        </main>
    )
}

export default ScreenBody;