import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Formulario } from './components/Formulario/Formulario'
import { MiOrg } from './components/MiOrg/MiOrg'

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <>
      <Header />
      { mostrarFormulario === true ? <Formulario /> : <></>}     
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </>
  )
}

export default App
