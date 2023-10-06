import './navigation.css'
import { useState } from 'react';




function Nav() {

    return (
        <>
            <nav>
                <button className="navigation-items">Home</button>
                <button className="navigation-items">Our Games</button>
                <button className="navigation-items">Credits</button>
                <button className="navigation-items">About</button>                                    
            </nav>
        </>)

}

export default Nav;