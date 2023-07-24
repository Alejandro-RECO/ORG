import { clientService } from "../service/client-service.js";

const createNewLine = (nombre, email, id)=>{
    const line = document.createElement('tr');
    const content = `
        <td class="td" data-td>
        ${nombre}
        </td>
        <td>
        ${email}
        </td>
        <td>
            <ul class="table__button-control">
            <li>
                <a
                href="../screens/editar_cliente.html?id=${id}"
                class="simple-button simple-button--edit"
                >Editar</a
                >
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button" id="${id}">
                Eliminar
                </button>
            </li>
            </ul>
        </td>
        `;
        line.innerHTML = content;

        const btn = line.querySelector('button');

        btn.addEventListener('click', () => {
            const id = btn.id;
            clientService.eliminarCliente(id).then( respuesta =>{
                console.log(respuesta);
            }).catch( err => console.error(err));
        });
        return line;
}

const table = document.querySelector('[data-table]');

clientService.listaClientes()
.then((data) => {
    data.forEach(({nombre,email,id}) => {
            const newline = createNewLine(nombre,email,id);
            table.appendChild(newline);
        });
}).catch((err) => alert("Error"));

