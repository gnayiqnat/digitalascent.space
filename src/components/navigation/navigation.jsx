import './navigation.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from 'react';




function Nav() {

    return (
        <div id='nav-container'>
            <nav id='nav'>
                <NavLink to={'/'} className="navigation-items">Home</NavLink>
                <NavLink to={'/games'} className="navigation-items">Games</NavLink>
                <NavLink to={'/credit'} className="navigation-items">Credits</NavLink>
                <NavLink to={'/about'} className="navigation-items">About</NavLink>
            </nav>
        </div>)

}

export default Nav;