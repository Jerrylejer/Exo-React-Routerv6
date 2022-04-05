import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './onglet6.css';

function Onglet6() {

    // SIXIEME TECHNIQUE DE REDIRECTION => REDIRIGER EN TENANT COMPTE D'UN DELAI
    const [underConst, setUnderConst] = useState({Onglet1: false, Onglet2: false, Onglet3: false, Onglet4: false, Onglet5: false, Onglet6: true})

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/')
    }, 5000)

    return (
        <>
        {
            underConst.Onglet6 ? (<div className="alert alert-warning alert-dismissible fade show m-3" role="alert">
            <strong>Désolé !</strong> Cette page sera prochainement en ligne, Vous êtes redirigés à la page d'accueil dans 5 secondes !
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>) : ('Onglet6')
        }
        </>
    );
}
export default React.memo(Onglet6);