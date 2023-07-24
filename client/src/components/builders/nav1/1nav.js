import React from 'react';
import "./Nav.css";
import Auth from '../../../utils/auth';
import { useMutation } from '@apollo/client';

const Nav = () => {

    const isLoggedIn = Auth.loggedIn();


    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/" id="home">Home</a>
                    </li>

                    {isLoggedIn ? (
                        <>
                            <li>
                                <a href="/profile" id="profile">Profile</a>
                            </li>
                            <li>
                                <button onClick={Auth.logout} id="logout">Logout</button>
                            </li>
                        </>
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