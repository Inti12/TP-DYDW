document.addEventListener("DOMContentLoaded", () => {
  // --- BLOQUE 1: formulario de envío ---
  const form = document.getElementById("envioForm");
  const inciarSesionPago = localStorage.getItem("iniciarSesionPago");

  if (inciarSesionPago) {
    const nombreInput = document.getElementById("nombre");
    const direccionInput = document.getElementById("direccion");
    const telefonoInput = document.getElementById("telefono");

    nombreInput.value = "Admin";
    direccionInput.value = "Av. Mi Casa 123";
    telefonoInput.value = "1122334455";

    nombreInput.readOnly = true;
  }
  else {
    const nombreInput = document.getElementById("nombre");
    const direccionInput = document.getElementById("direccion");
    const telefonoInput = document.getElementById("telefono");

    nombreInput.value = "";
    direccionInput.value = "";
    telefonoInput.value = "";

    nombreInput.readOnly = false;
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const direccion = document.getElementById("direccion").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const metodoPago = document.getElementById("metodoPago").value;

      if (nombre === "") {
        alert("El nombre no puede estar en blanco");
        return;
      }
      if (nombre.length > 20) {
        alert("El nombre es demasiado largo (máx. 20 caracteres)");
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
      if (metodoPago === "") {
        alert("El metodo de pago no puede estar en blanco");
        return;
      }

      const datosEnvio = { nombre, direccion, telefono, metodoPago };
      localStorage.setItem("datosEnvio", JSON.stringify(datosEnvio));

      window.location.href = "confirmarPedido.html";
    });
  }
});

