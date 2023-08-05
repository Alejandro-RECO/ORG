import { useState } from 'react';
import './MiOrg.css';


export const MiOrg = (props) => {

    // console.log(props)

    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () =>{
    //     console.log('click', !mostrar);
    //     actualizarMostrar(!mostrar) 
    // }

    return(
        <section className='OrgSection'>
            <h3 className="title">Mi organización</h3>
            <img src='./img/add.png' alt='add' onClick={props.cambiarMostrar} />
        </section>
    )
}