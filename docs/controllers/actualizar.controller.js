import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");




const obtenerInformacion = async () =>{
    const url = new URL(window.location); //Objeto que devuelve dentro de sus parametros la url
    const id = url.searchParams.get("id");

    if(id ===null){
        window.location.href = "/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    try{
        const perfil = await clientServices.detalleCliente(id); // el await remplaza al then 
        console.log(perfil);
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        }else{
            throw new Error();
        }

    }catch(error){
        window.location.href = "/screens/error.html"
    }


    /* clientServices.detalleCliente(id).then((perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    }); */

};



obtenerInformacion();

formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(email, nombre);

    clientServices.actualizarCliente(nombre, email, id).then( () => {
        window.location.href = "/screens/edicion_concluida.html";
    });

    
})


