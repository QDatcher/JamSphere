
import Header from '../containers/header/Header'

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