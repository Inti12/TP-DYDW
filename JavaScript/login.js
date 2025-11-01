if (localStorage.getItem("logueado") === "true") {
  window.location.href = "envios.html";
}

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const contrasenia = document.getElementById("contrasenia").value;

  if (usuario === "admin" && contrasenia === "admin") {
    localStorage.setItem("logueado", "true");
    localStorage.setItem("usuario", user);
    window.location.href = "envios.html"; 
  } else {
    const mensajeError = document.getElementById("mensajeError");
    if (mensajeError) {
      mensajeError.textContent = "Usuario o contraseña incorrectos";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      iniciarSesion();
    });
  }
});