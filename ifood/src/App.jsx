import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/ifood.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <img src= {logo} alt="" />
    </div>
    <div className="cabecario"></div>
      <div className="card">
        <h1>Login</h1>
        <h2>Usuário</h2>
        <input type="usuario" id='usuario'/>
        <h3>Senha</h3>
        <input type="senha" id='senha'/>
        <br />
        <input type="checkbox" name="" id="checkbox" /> <p>Mostrar Senha</p>
        <button>
          ENTRAR
        </button>
      </div>
    </>
  )
}

export default App
