import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './nestedRoutes.css';

function NestedRoutes() {
    return (
        <div className='nestedRoutes p-3 m-3 rounded bg-info'>
            NestedRoutes
            <nav className="nav pt-3">
                <Link className="nav-link m-3 text-decoration-none" to="Sous-menu-1">Sous-menu-1</Link>
                <Link className="nav-link m-3 text-decoration-none" to="Sous-menu-2">Sous-menu-2</Link>
                <Link className="nav-link m-3 text-decoration-none" to="Sous-menu-3">Sous-menu-3</Link>
            </nav>
            <Outlet />
        </div>
    );
}
export default React.memo(NestedRoutes);