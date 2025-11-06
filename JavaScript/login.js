document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      iniciarSesion();
    });
  }
});

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const contrasenia = document.getElementById("contrasenia").value;

  if (usuario === "admin" && contrasenia === "admin") {
    localStorage.setItem("logueado", "true");
    localStorage.setItem("usuario", usuario);
    const ultimaPagina = localStorage.getItem("ultimaPagina");
    const inciarSesionPago = localStorage.getItem("iniciarSesionPago");
    if (inciarSesionPago)
    {
      window.location.href = "formularioEnvio.html";
    }
    else{
      if (ultimaPagina) {
      window.location.href = ultimaPagina;
      localStorage.removeItem("ultimaPagina"); 
      } else {
      window.location.href = "index.html"; 
      }
    }
    
  } else {
    const mensajeError = document.getElementById("mensajeError");
    if (mensajeError) {
      mensajeError.textContent = "Usuario o contraseña incorrectos";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
}

