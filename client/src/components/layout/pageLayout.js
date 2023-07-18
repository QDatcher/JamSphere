import "../containers/header"


const pageLayout = ({ children }) => {

    return (
        <>
            <div>
                <Header></Header>
            </div>

            {children}
        </>
    )
}

export default pageLayout