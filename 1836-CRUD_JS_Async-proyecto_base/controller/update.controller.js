import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[ data-form ]");

const obtenerIfo = async ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");   

    if(id === null){
        console.log("Hacer redireccion");
        window.location.href = "./error.html";
    }

    const nombre = document.querySelector("[ data-nombre ]");
    const email = document.querySelector("[ data-email ]");

    try{
        const perfil = await clientService.detalleCliente(id);

        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        } else{
            throw new Error();
        }
    }catch(e){
        alert("sucedio un error")
        window.location.href = "./error.html";
    }


}

obtenerIfo();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");


    const nombre = document.querySelector("[ data-nombre ]").value;
    const email = document.querySelector("[ data-email ]").value;

    clientService.actualizarCliente(nombre, email, id).then(()=>{
    window.location.href = "./edicion_concluida.html";
    })
})