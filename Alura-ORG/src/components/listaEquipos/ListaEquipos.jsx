/* eslint-disable react/prop-types */
export const ListaOpciones = (props)=>{


    const manejarCambio = (e) => {
        props.setEquipo(e.target.value)
        console.log(e.target.value)
    }

    return(
        <div className='Lista-Opciones'>
            <label>Equipos</label>
            <select 
                value={props.valor} 
                onChange={manejarCambio}
            >
                <option 
                    value="" 
                    disabled defaultValue=""
                    hidden
                    >
                    Seleccionar equipo
                </option>
                {props.equipos.map( 
                    (equipos, index) => {
                        return(
                            <option 
                                key={index}
                                value={equipos}
                                >   
                                    {equipos}
                            </option>
                        )
                    }
                  ) 
                }
            </select>
        </div>
    )
}