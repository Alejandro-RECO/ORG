import './MiOrg.css';


export const MiOrg = (props) => {
    return(
        <section className='OrgSection'>
            <h3 className="title">Mi organización</h3>
            <img src='./img/add.png' alt='add' onClick={props.cambiarMostrar} />
        </section>
    )
}