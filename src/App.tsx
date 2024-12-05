import { Counter } from './components/Counter'
import { Usuario } from './components/Usuario'

import { TimerPadre } from './components/TimerPadre'
import { CounterRed } from './components/CounterRed'

import { Formulario } from './components/Formulario'

function App() {
  return (
    <>
      <h1>Vite + React + Typescript</h1>

      <hr/>

      <h3 className="text-center">UseState</h3>
      <Counter />
      <Usuario />

      <hr />

      <h3 className="text-center">UseEffect</h3>
      <TimerPadre />

      <hr />
      <h3 className="text-center">UseReducer</h3>
      <CounterRed />

      <hr />
      <h3 className="text-center">Custom Hooks</h3>
      <Formulario />
    </>
  )
}

export default App
