export const ListaOpciones = (props)=>{

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

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
                {equipos.map( 
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