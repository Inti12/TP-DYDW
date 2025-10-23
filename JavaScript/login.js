const usuarios = [
    { nombre: "admin", pass: "admin" },
    { nombre: "matias", pass: "1234" }
];

let usuarioLogueado = null;

const form = document.getElementById("loginForm");
const mensajeError = document.getElementById("mensajeError");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const nombre = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    const encontrado = usuarios.find(u => u.nombre === nombre && u.pass === password);

    if (encontrado) {
       usuarioLogueado = encontrado.nombre;
       mostrarBienvenida();
    } else {
       mensajeError.textContent = "Usuario o contraseña incorrectos";
    }
    });


    function mostrarBienvenida() {
      alert(`Bienvenido ${usuarioLogueado}!`)
      window.location.href = "../html/envios.html";
    }