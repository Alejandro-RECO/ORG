import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Formulario } from './components/Formulario/Formulario'
import { MiOrg } from './components/MiOrg/MiOrg'
import { Equipo } from './components/equipo/Equipo'

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  const equipos = [
    {titulo: "Programación",         colorPrimario: "#57c278", colorSecundario: "#d9f7e9" },
    {titulo: "Front End ",           colorPrimario: "#82CFFA", colorSecundario: "#E8F8FF" },
    {titulo: "Data Science",         colorPrimario: "#A6D157", colorSecundario: "#F0F8E2" },
    {titulo: "Devops",               colorPrimario: "#E06B69", colorSecundario: "#FDE7E8" },
    {titulo: "UX y Diseño",          colorPrimario: "#DB6EBF", colorSecundario: "#FAE9F5" },
    {titulo: "Móvil",                colorPrimario: "#FFBA05", colorSecundario: "#FFEEDF" },
    {titulo: "Innovación y Gestión", colorPrimario: "#FF8A29", colorSecundario: "#FFF5D9" },
]

  return (
    <>
      <Header />
      { mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)} /> : <></>}     
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo, index) => {
          return (
            <div key={index}>
              <Equipo equipo={equipo.titulo} colorPrimario={equipo.colorPrimario} colorSecundario={equipo.colorSecundario}/>
            </div>
          )
        })
      }

    </>
  )
}

export default App
