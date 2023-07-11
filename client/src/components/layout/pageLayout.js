


const pageLayout = ({children}) => {
    
    return (
        <>
            <div>
                <header>
                    <h1>JamSphere</h1>
                    <nav>
                        <ul>
                            <a href="*"><li>Home</li></a>
                            <a href="*"><li>Sign Up</li></a>
                            <a href="*"><li>Log In</li></a>
                        </ul>
                    </nav>
                </header>
            </div>

            {children}
        </>
    )
}

export default pageLayout