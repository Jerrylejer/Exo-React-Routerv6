import React from 'react';
import { useNavigate } from 'react-router-dom';
import './onglet3.css';

function Onglet3 () {
    const navigate = useNavigate();
    return (
        <div className='onglet3 p-3 m-3 rounded bg-success'>
             <button className="btn btn-primary" onClick={() => navigate(-1)}>
                   Vers Onglet2
               </button>

               <button className="btn btn-danger ms-3" onClick={() => navigate(-2)}>
                   Vers Onglet1
               </button>
        </div>
    );
}
export default React.memo(Onglet3);
