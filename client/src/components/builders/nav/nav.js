import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav>
            <ul>
                <a href="*"><li>Home</li></a>
                <Link to="/sign-up">Sign Up</Link>
                <br />
                <Link to="/log-in">Log In</Link>
            </ul>
        </nav>
    )
}

export default Nav;