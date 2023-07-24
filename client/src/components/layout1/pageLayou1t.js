
import Header from '../containers/header1/header1'

const PageLayout = ({ children }) => {

    return (
        <>
            <div id="Header">
                <Header />
            </div>

            {children}
        </>
    )
}

export default PageLayout;