export const CampoTexto = ( props ) =>{

    const placeholderModificado = `${props.placeholder}...`;
    
    const manejarCambio = ( e ) =>{ 
        props.setValor(e.target.value)
    }
    return(
        <div className='Campo-Texto'>
            <label>{props.titulo}</label>
            <input 
                value={props.valor} 
                type="text" 
                placeholder={placeholderModificado} 
                required={props.required}
                onChange={manejarCambio}
                />
                
        </div>

    )
}
