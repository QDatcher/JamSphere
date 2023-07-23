import React from 'react';
import "./Nav.css";
import Auth from '../../../utils/auth';

const Nav = () => {

    const isLoggedIn = Auth.loggedIn();

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/home" id="home">Home</a>
                    </li>

                    {isLoggedIn ? (
                        <li>
                            <a href="/profile" id="profile">Profile</a>
                        </li>
                    ) : (
                        <>
                            <li>
                                <a href="/signup" id="signup">Sign Up</a>
                            </li>
                            <li>
                                <a href="/login" id="login">Log In</a>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>

    )
}

export default Nav;