import { useState } from 'react';

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const incrementar = ( incremento: number = 1 ):void => {
    setCounter( counter + incremento );
  }

  return (
    <div className="mt-3">
      <h3>Counter: { counter }</h3>
      <br/>
      
      <div className=""></div>
      <button
        onClick={ () => incrementar() }
        className="btn btn-outline-primary mt-2"
      >+1</button>
      
      <button
        onClick={ () => incrementar(2) }
        className="btn btn-outline-primary mt-2"
      >+2</button>
      
      <button
        onClick={ () => setCounter(0) }
        className="btn btn-outline-danger mt-2"
      >Reset</button>
    </div>
  )
}
