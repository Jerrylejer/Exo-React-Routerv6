import React from 'react';
import { useNavigate } from 'react-router-dom';
import './onglet2.css';

 function Onglet2 () {

    const navigate = useNavigate();

        return (
            <div className="onglet2 p-3 m-3 rounded bg-danger">
                   {/* QUATRIEME TECHNIQUE DE REDIRECTION => LE CHEMIN EST REMPLACE PAR L'ORDRE DE NAVIGATION (-1) */}
                   <button className="btn btn-primary" onClick={() => navigate(-1)}>
                   Vers Onglet1
               </button>

               <button className="btn btn-success ms-3" onClick={() => navigate('/onglet3')}>
                   Vers Onglet3
               </button>
            </div>
        )
}
export default React.memo(Onglet2);