import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientService.crearClientes(name, email)
    .then(() => {
        window.location.href = "./registro_completado.html";   
    })
    .catch (err => console.log("error"))

});