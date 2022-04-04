import React from 'react';
import { useNavigate } from 'react-router-dom';
import './onglet1.css';

 function Onglet1 () {

    const navigate = useNavigate();

        return (
            <div className="onglet1 p-3 m-3 rounded bg-info">
                {/* TROISIEME TECHNIQUE DE REDIRECTION */}
               <button className="btn btn-primary align-items-start" onClick={() => navigate('/onglet2')}>
                   Vers Onglet2
               </button>
            </div>
        )
}
export default React.memo(Onglet1);