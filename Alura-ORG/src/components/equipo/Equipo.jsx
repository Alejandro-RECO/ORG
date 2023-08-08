import './Equipo.css'

export const Equipo = (props) => {
    const color = {backgroundColor: props.colorSecundario}
    const lineaColor = {borderColor: props.colorPrimario}
    return(
        
        <section className="Equipo" style={color}>
            <h3 style={lineaColor}>{props.equipo}</h3>
             <div className="colaboradores">

             </div>
        </section>
    )
}