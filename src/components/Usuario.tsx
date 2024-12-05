import { useState } from 'react';

interface User {
  uuid: string;
  name: string;
}

export const Usuario = () => {

  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uuid: 'ABC123',
      name: 'Yair Ramirez'
    })
  }

  return (
    <div className="mt-5">
      <h3>Usuario: { (!user) ? 'No hay usuario' : JSON.stringify( user ) }</h3>

      <button
        className="btn btn-outline-success"
        onClick={ login }
      >
        Login
      </button>
    </div>
  )
}
