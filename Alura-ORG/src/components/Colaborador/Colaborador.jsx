/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiFillCloseCircle } from "react-icons/ai";
import './Colaborador.css'

export const Colaborador = (props) =>{
    const {nombre, puesto, foto, equipo } = props.datos
    const { colorPrimario, eliminarColaborador } = props


    return (
        <div className="colaborador">
            <AiFillCloseCircle className="eliminar" onClick={eliminarColaborador}/>
            <div className="encabezado" style={{backgroundColor:colorPrimario}}>
                <img src={foto} alt={nombre}/>
            </div>   
            <div className="info" >
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>    
    )
}