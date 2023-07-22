
import Header from '../containers/header/Header'

const PageLayout = ({ children }) => {

    return (
        <>
            <div>
                <Header />
            </div>

            {children}
        </>
    )
}

export default PageLayout;