import React from 'react';
import './sousMenu2.css';

function SousMenu2() {
    return (
        <div className='sousMenu2 p-3 m-3 rounded bg-info'>
            <h1>D'où vient-il?</h1>
            <p>
                Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
                simplement du texte aléatoire. Il trouve ses racines dans une
                oeuvre de la littérature latine classique datant de 45 av.
                J.-C., le rendant vieux de 2000 ans. Un professeur du
                Hampden-Sydney College, en Virginie, s'est intéressé à un des
                mots latins les plus obscurs, consectetur, extrait d'un passage
                du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la
                littérature classique, découvrit la source incontestable du
                Lorem Ipsum.
            </p>
        </div>
    );
}
export default React.memo(SousMenu2);
