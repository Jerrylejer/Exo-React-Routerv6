import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Menu from '../src/Component/Menu/Menu';
import Onglet1 from '../src/Component/Onglet1/Onglet1';
import Onglet2 from '../src/Component/Onglet2/Onglet2';
import Onglet3 from '../src/Component/Onglet3/Onglet3';
import Page404 from '../src/Component/Page404/Page404';
// import Onglet4 from '../src/Component/Onglet4/Onglet4';

import Onglet5 from './Component/Onglet5/Onglet5';
import Onglet6 from './Component/Onglet6/Onglet6';
import NestedRoutes from './Component/Sous menu/NestedRoutes';
import SousMenu1 from './Component/Sous-menu-1/Sous-menu-1';
import SousMenu2 from './Component/Sous-menu-2/Sous-menu-2';
import SousMenu3 from './Component/Sous-menu-3/Sous-menu-3';
import Users from './Component/Users/Users';
import Profil from './Component/Profil/Profil';
import './App.css';
import NoteUsers from './Component/NoteUsers/NoteUsers';

function App() {
    // CINQUIEME TECHNIQUE DE REDIRECTION
    const [underConst, setUnderConst] = useState({
        Onglet1: false,
        Onglet2: false,
        Onglet3: false,
        Onglet4: false,
        Onglet5: true,
    });

    // const shouldRedirect = true; => PREMIERE TECHNIQUE DE REDIRECTION
    return (
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<Onglet1 />} />
                <Route path='Onglet2' element={<Onglet2 />} />
                <Route path='Onglet3' element={<Onglet3 />} />
                {/* SECONDE TECHNIQUE DE REDIRECTION */}
                <Route path='Onglet4' element={<Navigate to='/' />} />
                {/* PREMIERE TECHNIQUE DE REDIRECTION */}
                {/* <Route path='/Onglet4' element={shouldRedirect ? (<Navigate replace to="/" />) : (<Onglet4 />)} /> */}
                {/* CINQUIEME TECHNIQUE DE REDIRECTION */}
                <Route
                    path='Onglet5'
                    element={
                        underConst.Onglet5 ? (
                            <Navigate to='/Onglet2' />
                        ) : (
                            <Onglet5 />
                        )
                    }
                />
                <Route path='Onglet6' element={<Onglet6 />} />
                <Route path='NestedRoutes' element={<NestedRoutes />}>
                    {/* index => affichage du contenu du sous-menu lors du landing parent */}
                    <Route index element={<SousMenu1 />} />
                    <Route path='Sous-menu-1' element={<SousMenu1 />} />
                    <Route path='Sous-menu-2' element={<SousMenu2 />} />
                    <Route path='Sous-menu-3' element={<SousMenu3 />} />
                </Route>
                {/* Chemin paramétré (params & récupération la data dans l'URL) */}
                <Route path='Users' element={<Users />}>
                    <Route index element={<Profil />} />
                    <Route path=':id' element={<Profil />} />
                    <Route path='noteUsers' element={<NoteUsers />} />
                </Route>
                <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    );
}

export default App;
