import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import './users.css';

function Users() {

  const users = ['Jérôme', 'Félix', 'Hélène', 'Zoé', 'Fantin']

  const [searchParams, setSearchParams] = useSearchParams();
  // Récupération de name dans le searchParams (2)
  const searchName = searchParams.get('name') || '';
  console.log(searchName);

  // Méthode filter qui filtre selon les lettres tapées (3)
  const usersToLowerCase = users.map(name => name.toLowerCase())
  const filteredName = usersToLowerCase.filter((user) => user.includes(searchName))

  return (
    <div className="bg-secondary users p-3 m-3 rounded">
        <h1>Users</h1>
        <nav className="nav pt-3">
                <Link className="nav-link m-3 text-decoration-none text-dark" to="Sous-menu-1">Profil</Link>
                <Link className="nav-link m-3 text-decoration-none text-dark" to="Sous-menu-2">NoteUsers</Link>
            </nav>
            <Outlet />
            <hr />
            <input type="text" onChange={(e) => {const name = e.target.value;
              if (name) {
                // Lettres passées dans l'input => name (1)
                setSearchParams({name})
              } else {
                setSearchParams({})
              }
            }
            } 
            />
            <ul className="mt-3">
              {
                // Méthode Map qui crée un nouveau tableau et reçoit les résultats filtrés (4)
                filteredName.map((usersItem, index) => 
                    <li key={index}>{usersItem}</li>
                )
              }
            </ul>
    </div>
  )
}
export default Users;

