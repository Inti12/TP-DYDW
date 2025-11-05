document.addEventListener("DOMContentLoaded", () => {
      const datosEnvio = JSON.parse(localStorage.getItem("datosEnvio"));
      const pedido = JSON.parse(localStorage.getItem("pedido"));
      const total = localStorage.getItem("totalPedido");

      // Si no hay datos, redirigir al inicio
      if (!datosEnvio || !pedido) {
        alert("No se encontró información del pedido.");
        window.location.href = "index.html";
        return;
      }

      // Mostrar datos del cliente
      document.getElementById("nombreCliente").textContent = datosEnvio.nombre;
      document.getElementById("direccionCliente").textContent = datosEnvio.direccion;
      document.getElementById("telefonoCliente").textContent = datosEnvio.telefono;
      document.getElementById("metodoPagoCliente").textContent = datosEnvio.metodoPago;

      // Mostrar detalle del pedido
      const listaPedido = document.getElementById("listaPedido");
      pedido.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        listaPedido.appendChild(li);
      });
      document.getElementById("totalPedido").textContent = total;


      document.getElementById("confirmarPedido").addEventListener("click", () => {
        alert("Pedido confirmado.\nGracias por confiar en NoTilt Burgers 🍔");
        localStorage.removeItem("pedido");
        localStorage.removeItem("totalPedido");
        localStorage.removeItem("datosEnvio");
        window.location.href = "index.html";
      });


      document.getElementById("volverInicio").addEventListener("click", () => {
        window.location.href = "index.html";
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