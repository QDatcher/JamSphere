import React from 'react';
import "./Nav.css";
import Auth from '../../../utils/auth';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

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
                                <Link to="/profile" id="profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={Auth.logout} id="logout">Logout</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/signup" id="signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/login" id="login">Log In</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>

    )
}

export default Nav;