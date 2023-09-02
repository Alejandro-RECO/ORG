/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Colaborador } from '../Colaborador/Colaborador'
import './Equipo.css'

export const Equipo = (props) => {
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props
    const obj = {
        backgroundColor: colorSecundario
    }
    const estiloTitulo = { borderColor: colorPrimario }


    return(
    <>
        { colaboradores.length > 0 && 
            <section className="Equipo" style={obj}>
                <input 
                    type='color'
                    className='input-color'
                    value={props.colorSecundario}
                    onChange={(e)=>{
                        actualizarColor(e.target.value, titulo);
                    }}
                


                />
                <h3 style={estiloTitulo}>{props.equipo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            />)
                            
                    }
                </div>
            </section>
        }       
    </>
    )
}