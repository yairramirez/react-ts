import { useState } from 'react'
import { Timer } from './Timer'

export const TimerPadre = () => {

  const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <div className="mt-3">
      <h3>Milisegundos: { milisegundos }</h3>
      <Timer milisegundos={ milisegundos } />

      <button
        className="btn btn-outline-primary"
        onClick={ () => setMilisegundos( 1000 )}
      >
        1000
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={ () => setMilisegundos( 2000 )}
      >
        2000
      </button>
    </div>
  )
}
