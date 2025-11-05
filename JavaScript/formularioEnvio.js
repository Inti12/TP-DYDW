document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("envioForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const metodoPago = document.getElementById("metodoPago").value;

    if (!nombre || !direccion || !telefono || !metodoPago) {
      alert("Por favor, completá todos los campos antes de continuar.");
      return;
    }

    const datosEnvio = { nombre, direccion, telefono, metodoPago };
    localStorage.setItem("datosEnvio", JSON.stringify(datosEnvio));

    window.location.href = "confirmacion.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const userPresentacion = document.getElementById("userPresentacion");
  const cerrarSesion = document.getElementById("cerrarSesion");
  const menuUsuario = document.getElementById("usuarioMenu");

 if (localStorage.getItem("logueado") === "true") {
    const usuario = localStorage.getItem("usuario");
    userPresentacion.textContent = usuario.toUpperCase();
    menuUsuario.style.display = "inline";
    loginBtn.style.display = "none";
  } else {
    userPresentacion.textContent = ""
    menuUsuario.style.display = "none";
    loginBtn.style.display = "inline";
  }

  cerrarSesion.addEventListener("click", (e) => {
    localStorage.removeItem("logueado");
    localStorage.removeItem("usuario");
    window.location.href = "index.html"; 
  });

  loginBtn.addEventListener("click", () => {
    localStorage.setItem("ultimaPagina", window.location.href);
    window.location.href = "login.html";
  });

});