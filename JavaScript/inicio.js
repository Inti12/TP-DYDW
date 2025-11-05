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

document.addEventListener("DOMContentLoaded", function() {
  const reseñas = document.querySelectorAll(".reseña");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  let index = 0;

  function mostrarReseña(nueva) {
    reseñas[index].classList.remove("visible");
    index = (nueva + reseñas.length) % reseñas.length;
    reseñas[index].classList.add("visible");
  }

  prev.addEventListener("click", () => mostrarReseña(index - 1));
  next.addEventListener("click", () => mostrarReseña(index + 1));

  setInterval(() => mostrarReseña(index + 1), 6000);
});
