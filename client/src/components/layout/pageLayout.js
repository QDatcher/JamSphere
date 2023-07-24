
import Header from '../containers/Header/Header'

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