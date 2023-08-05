import './Formulario.css';

export const Formulario = ()=>{

    const manejarEnvio = (e) => {
        e.preventDefault();

        console.log('manejarEnvio');
    }

    return(
        <section className='Formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellene el formulario para crear al colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required />
                <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required />
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
                <ListaOpciones />
                <Boton texto="Crear colaborador"/>
            </form>
        </section>

    )
}

const CampoTexto = ( props ) =>{
    const placeholderModificado = `${props.placeholder}...`; 
    return(
        <div className='Campo-Texto'>
            <label>{props.titulo}</label>
            <input type="text" placeholder={placeholderModificado} required={props.required}/>
        </div>

    )
}

const ListaOpciones = ()=>{

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return(
        <div className='Lista-Opciones'>
            <label>Equipos</label>
            <select>
                { equipos.map( (equipos, index) => {
                    return(
                        <option key={index}>{equipos}</option>
                    )
                }) }
            </select>
        </div>
    )
}

const Boton = (props) => {
    return(
        <div>
            <button className='Boton'>{props.texto}</button>
        </div>
    )
}  

