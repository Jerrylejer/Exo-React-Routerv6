import React from 'react';
import './sousMenu3.css';

function SousMenu3() {
    return (
        <div className='sousMenu3 p-3 m-3 rounded bg-info'>
            <h1>Où puis-je m'en procurer?</h1>
            <p>
                Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou
                là, mais la majeure partie d'entre elles a été altérée par
                l'addition d'humour ou de mots aléatoires qui ne ressemblent pas
                une seconde à du texte standard.
            </p>
        </div>
    );
}
export default React.memo(SousMenu3);
