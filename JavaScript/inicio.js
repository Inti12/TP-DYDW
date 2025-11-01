function preguntarLogin() {
  if (localStorage.getItem("logueado") === "true") {
    window.location.href = "envios.html";
  }
  else{
    window.location.href = "login.html"
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const carrito = document.getElementById("carrito");
  
  if (localStorage.getItem("logueado") === "true") {
    carrito.style.display = "inline";
    loginBtn.style.display = "none";
  } else {
    carrito.style.display = "none";
    loginBtn.style.display = "inline";
  }

  loginBtn.addEventListener("click", (e) => {
    window.location.href = "login.html";
  });
});


