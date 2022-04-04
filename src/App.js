import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Menu from '../src/Component/Menu/Menu';
import Onglet1 from '../src/Component/Onglet1/Onglet1';
import Onglet2 from '../src/Component/Onglet2/Onglet2';
import Onglet3 from '../src/Component/Onglet3/Onglet3';
import Page404 from '../src/Component/Page404/Page404';
// import Onglet4 from '../src/Component/Onglet4/Onglet4';
import './App.css';
import Onglet5 from './Component/Onglet5/Onglet5';

function App() {

  // CINQUIEME TECHNIQUE DE REDIRECTION
  const [underConst, setUnderConst] = useState( {Onglet1: false, Onglet2: false, Onglet3: false, Onglet4: false, Onglet5: true})

    // const shouldRedirect = true; => PREMIERE TECHNIQUE DE REDIRECTION
    return (
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<Onglet1 />} />
                <Route path='/Onglet2' element={<Onglet2 />} />
                <Route path='/Onglet3' element={<Onglet3 />} />
                {/* SECONDE TECHNIQUE DE REDIRECTION */}
                <Route path='/Onglet4' element={<Navigate to='/' />} />
                {/* PREMIERE TECHNIQUE DE REDIRECTION */}
                {/* <Route path='/Onglet4' element={shouldRedirect ? (<Navigate replace to="/" />) : (<Onglet4 />)} /> */}
                {/* CINQUIEME TECHNIQUE DE REDIRECTION */}
                <Route path='/Onglet5' element={underConst.Onglet5 ? <Navigate to='/Onglet2' /> : <Onglet5 />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    );
}

export default App;
