
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("registroForm").addEventListener("submit", validarRegistro);
});


function validarRegistro(event) {
  event.preventDefault();

  const form = document.getElementById("registroForm");
  const nombre = form["nombre"].value.trim();
  const dni = form["dni"].value.trim();
  const email = form["email"].value.trim();
  const direccion = form["direccion"].value.trim();
  const telefono = form["telefono"].value.trim();
  const password = form["password"].value.trim();

  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (nombre === "") {
    alert("El nombre no puede estar en blanco");
    return;
  }
  if (nombre.length > 20) {
    alert("El nombre es demasiado largo (máx. 20 caracteres)");
    return;
  }

  if (dni === "" || isNaN(dni)) {
    alert("Debe ingresar un DNI válido (solo números)");
    return;
  }

  if (!mailRegex.test(email)) {
    alert("No es un mail válido");
    return;
  }

  if (direccion === "") {
    alert("La dirección no puede estar vacía");
    return;
  }

  if (telefono === "" || isNaN(telefono)) {
    alert("Debe ingresar un teléfono válido (solo números)");
    return;
  }

  if (password === "") {
    alert("La contraseña no puede estar vacía");
    return;
  }

  alert("¡Registro completado con éxito! Bienvenido a NoTilt Burgers 🍔");
  window.location.href = "login.html";
}
