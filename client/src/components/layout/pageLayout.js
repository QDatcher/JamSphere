
import Header from '../containers/header/header'

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