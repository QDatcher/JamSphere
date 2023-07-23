import React from 'react';
import "./Nav.css";
const Nav = () => {

    return (
        <nav>
            <ul>
                <a href="/home"><li id="home">Home</li></a>
                <a href="/signup"><li id="signup">Sign Up</li></a>
                <a href="/login"><li id="login">Log In</li></a>
            </ul>
        </nav>
    )
}

export default Nav;