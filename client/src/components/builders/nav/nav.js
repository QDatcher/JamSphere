import React from 'react';
import "./Nav.css";
const Nav = () => {

    return (
        <nav>
            <ul>
                <a href="*"><li id="home">Home</li></a>
                <a href="/sign-up"><li id="signup">Sign Up</li></a>
                <a href="/log-in"><li id="login">Log In</li></a>
            </ul>
        </nav>
    )
}

export default Nav;