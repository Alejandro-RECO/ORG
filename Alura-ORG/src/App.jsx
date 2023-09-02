import { useState } from 'react'
import './App.css'

import { Header } from './components/Header/Header'
import { Formulario } from './components/Formulario/Formulario'
import { MiOrg } from './components/MiOrg/MiOrg'
import { Equipo } from './components/equipo/Equipo'
import { Footer } from './components/Footer/Footer'

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizaColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },

  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const equipos = [
    {titulo: "Programación",         colorPrimario: "#57c278", colorSecundario: "#d9f7e9" },
    {titulo: "Front End",            colorPrimario: "#82CFFA", colorSecundario: "#E8F8FF" },
    {titulo: "Data Science",         colorPrimario: "#A6D157", colorSecundario: "#F0F8E2" },
    {titulo: "Devops",               colorPrimario: "#E06B69", colorSecundario: "#FDE7E8" },
    {titulo: "UX y Diseño",          colorPrimario: "#DB6EBF", colorSecundario: "#FAE9F5" },
    {titulo: "Móvil",                colorPrimario: "#FFBA05", colorSecundario: "#FFEEDF" },
    {titulo: "Innovación y Gestión", colorPrimario: "#FF8A29", colorSecundario: "#FFF5D9" },
]



  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) =>{
    actualizaColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador = ()=>{
    console.log('Eliminar colaborador')
  }

  //Actualizar color para equipos

  const actualizaColor = (color, titulo) =>{
    console.log('Actualizar color ', color, titulo)
  }


  return (
    <>
      <Header />
      { 
        mostrarFormulario === true ? 
        <Formulario 
          equipos={equipos.map((equipo)=>equipo.titulo)}
          registrarColaborador={registrarColaborador}
        
        /> :
        <></>
      }     
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo, index) => {
          return (
            <div key={index}>
              <Equipo 
                datos={equipo} 
                equipo={equipo.titulo} 
                colorPrimario={equipo.colorPrimario} 
                colorSecundario={equipo.colorSecundario}
                colaboradores={colaboradores.filter(colaboradores => colaboradores.equipo===equipo.titulo)}
                eliminarColaborador={eliminarColaborador}
                actualizaColor={actualizaColor}
                />
            </div>
          )
        })
      }

      <Footer />

    </>
  )
}

export default App
