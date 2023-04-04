const listaClientes = () =>
  fetch("https://kmn04mx.github.io/crudJS/db.json").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("https://kmn04mx.github.io/crudJS/db.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`https://kmn04mx.github.io/crudJS/db.json/${id}`, {
    method: "DELETE",
  });
};


const detalleCliente  = (id) =>{
  return fetch(`https://kmn04mx.github.io/crudJS/db.json/${id}`).then( (respuesta) => respuesta.json());
}


const actualizarCliente = (nombre, email, id) =>{
  return fetch(`https://kmn04mx.github.io/crudJS/db.json/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email})
  }).then((respuesta) => respuesta ).catch((err) => console.log(err));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
