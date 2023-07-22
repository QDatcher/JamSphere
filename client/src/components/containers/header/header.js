import React from 'react';
import "./Header.css";
import Nav from '../../builders/nav/Nav';


const Header = () => {

    return (
        <>
            <header>
                <h1>JamSphere</h1>
                <Nav />
            </header>
            
        </>
    )
}
export default Header;