import './Formulario.css';
import { useState } from 'react';
import { CampoTexto } from '../campoTexto/CampoTexto';
import { ListaOpciones } from '../listaEquipos/ListaEquipos';
import { Boton } from '../boton/Boton';

export const Formulario = ()=>{

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('manejarEnvio');
        let datosEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        console.log(datosEnviar);
    }

    return(
        <section className='Formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellene el formulario para crear al colaborador.</h2>
                <CampoTexto 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required
                    valor = {nombre}
                    setValor = {setNombre}
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    valor ={puesto}
                    setValor = {setPuesto}
                />
                <CampoTexto 
                    titulo="Foto" 
                    placeholder="Ingresar enlace de foto" 
                    valor ={foto}
                    setValor = {setFoto}                       
                />
                <ListaOpciones 
                    valor ={equipo}
                    setEquipo = {setEquipo}
                />
                <Boton texto="Crear colaborador"/>
            </form>
        </section>

    )
}




