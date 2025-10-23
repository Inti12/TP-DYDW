function preguntarLogin() {
  const tieneCuenta = confirm("¿Ya tenés cuenta?\nPresioná 'Aceptar' si sí, o 'Cancelar' si no.");

  if (tieneCuenta) {
    // Tiene cuenta -> ir al login
    window.location.href = "../html/login.html";
  } else {
    // No tiene cuenta -> ir al registro
    window.location.href = "../html/registro.html";
  }
}