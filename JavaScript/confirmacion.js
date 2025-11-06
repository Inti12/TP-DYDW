document.addEventListener("DOMContentLoaded", () => {
  const datosEnvio = JSON.parse(localStorage.getItem("datosEnvio"));
  const pedido = JSON.parse(localStorage.getItem("pedido"));
  const total = localStorage.getItem("totalPedido");

  if (!datosEnvio || !pedido) {
    alert("No se encontró información del pedido.");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("nombreCliente").textContent = datosEnvio.nombre;
  document.getElementById("direccionCliente").textContent = datosEnvio.direccion;
  document.getElementById("telefonoCliente").textContent = datosEnvio.telefono;
  document.getElementById("metodoPagoCliente").textContent = datosEnvio.metodoPago;

  const listaPedido = document.getElementById("listaPedido");
  pedido.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listaPedido.appendChild(li);
  });
  document.getElementById("totalPedido").textContent = total;


  $("#confirmarPedido").on("click", function () {
    $("#mensajePopup")
      .fadeIn(800)
      .delay(2500)
      .fadeOut(800, function () {
        localStorage.removeItem("pedido");
        localStorage.removeItem("totalPedido");
        localStorage.removeItem("datosEnvio");
        window.location.href = "index.html";
      });
  });


  document.getElementById("volverInicio").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
