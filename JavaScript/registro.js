function validarRegistro(event) {
    event.preventDefault();

    let nombre = document.forms["registro"]["nombre"].value;
    let apellido = document.forms["registro"]["apellido"].value;
    let ocupacion = document.forms["registro"]["ocup"].value;
    let aceptar = document.forms["registro"]["acepta"].checked;
    let pais = document.forms["registro"]["pais"].value;

    const mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let email = document.forms["registro"]["email"].value;

    if (nombre == "") {
        alert("El nombre no puede estar en blanco");
        return false;
    }

    if (nombre.length > 20) {
        alert("El nombre es demasiado largo");
        return false;
    }

    if (apellido == "") {
        alert("El apellido no puede estar en blanco");
        return false;
    }

    if (apellido.length > 20) {
        alert("El apellido es demasiado largo");
        return false;
    }

    if (!mail.test(email)) {
        alert("No es un mail válido");
        return false;
    }
    
    if (pais == "") {
        alert("Debe seleccionar una país");
        return false;
    }
    
    if (ocupacion == "") {
        alert("Debe indicar una ocupacion");
        return false;
    }

    if (ocupacion.length > 15) {
        alert("El texto es demasiado largo");
        return false;
    }

    if (!aceptar)
    {
        alert("Debe aceptar los términos y condiciones");
        return false;
    }
    alert("El fomulario fue enviado con éxito");
    form.submit();
   
}

let form = document.querySelector("registroForm");
form.addEventListener("submit", validarRegistro);

function borrar()
{
    let nombre = document.forms["registro"]["nombre"].value;
    let apellido = document.forms["registro"]["apellido"].value;
    let email = document.forms["registro"]["email"].value;
    let ocupacion = document.forms["registro"]["ocup"].value;
    let pais = document.forms["registro"]["pais"].value;
    let aceptar = document.forms["registro"]["acepta"].checked;

      
 
     if(confirm("Está seguro de borrar la información?"))
        document.forms["registro"].reset(); 
        alert("La información se eliminó")
    }


document.querySelector("#Cancelar").addEventListener('click', borrar);
