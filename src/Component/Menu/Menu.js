import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

function Menu() {
    const navStyle = ({ isActive }) => {
        return {
            borderBottom: isActive && '4px solid red',
        };
    };

    return (
        <nav className='nav d-flex justify-content-between bg-dark text-decoration-none p-3 m-3 rounded'>
            <div className='menu d-flex'>
                <NavLink
                    to='/'
                    className='text-primary text-decoration-none'
                    style={navStyle}
                >
                    Onglet 1
                </NavLink>
                <p className='text text-light ps-5'>
                    Je suis un morceau de texte
                </p>
            </div>

            <div>
            <NavLink
                    to='/Onglet2'
                    // class bootstrap + active class CSS
                    className={navInfo => navInfo.isActive ? 'text-warning text-decoration-non pe-3 active' : 'text-warning text-decoration-none pe-3'}
                >
                    Onglet 2
                </NavLink>
                <NavLink
                    to='/Onglet3'
                    // class bootstrap + active class CSS
                    className={navInfo => navInfo.isActive ? 'text-warning text-decoration-non pe-3 active' : 'text-warning text-decoration-none pe-3'}
                >
                    Onglet 3
                </NavLink>
                <NavLink
                    to='/Onglet4'
                    // class bootstrap + active class CSS
                    className={navInfo => navInfo.isActive ? 'text-warning text-decoration-non pe-3 active' : 'text-warning text-decoration-none  pe-3'}
                >
                    Redirection 1
                </NavLink>
                <NavLink
                    to='/Onglet5'
                    // class bootstrap + active class CSS
                    className={navInfo => navInfo.isActive ? 'text-warning text-decoration-non pe-3 active' : 'text-warning text-decoration-none pe-3'}
                >
                    Redirection 2
                </NavLink>
                <NavLink
                    to='/Onglet6'
                    // class bootstrap + active class CSS
                    className={navInfo => navInfo.isActive ? 'text-warning text-decoration-non pe-3 active' : 'text-warning text-decoration-none pe-3'}
                >
                    Redirection 5s
                </NavLink>
                <NavLink
                    to='/NestedRoutes'
                    // class bootstrap + active class CSS
                    className={navInfo => navInfo.isActive ? 'text-warning text-decoration-non active' : 'text-warning text-decoration-none'}
                >
                    NestedRoutes
                </NavLink>
            </div>
        </nav>
    );
}

export default React.memo(Menu);
