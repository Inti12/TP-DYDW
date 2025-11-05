document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.item');
  const carritoLista = document.getElementById('carrito-lista');
  const totalElemento = document.getElementById('total');
  const vaciarBtn = document.getElementById('vaciar');
  let carrito = {};

  items.forEach((item) => {
    const nombre = item.querySelector('h3').textContent;
    const precio = parseInt(item.querySelector('p').textContent.replace('$', ''));
    const plus = item.querySelector('.plus');
    const minus = item.querySelector('.minus');
    const cantidadSpan = item.querySelector('.cantidad');

    plus.addEventListener('click', () => {
      carrito[nombre] = carrito[nombre] ? carrito[nombre] + 1 : 1;
      cantidadSpan.textContent = carrito[nombre];
      actualizarCarrito();
    });

    minus.addEventListener('click', () => {
      if (carrito[nombre]) {
        carrito[nombre]--;
        cantidadSpan.textContent = carrito[nombre] || 0;
        if (carrito[nombre] === 0) delete carrito[nombre];
        actualizarCarrito();
      }
    });
  });

  function actualizarCarrito() {
    carritoLista.innerHTML = '';
    let total = 0;
    for (const nombre in carrito) {
      const item = Array.from(items).find(it => it.querySelector('h3').textContent === nombre);
      const precio = parseInt(item.querySelector('p').textContent.replace('$', ''));
      const cantidad = carrito[nombre];
      total += precio * cantidad;

      const li = document.createElement('li');
      li.textContent = `${nombre} x${cantidad} = $${precio * cantidad}`;
      carritoLista.appendChild(li);
    }
    totalElemento.textContent = total;
  }

  vaciarBtn.addEventListener('click', () => {
    carrito = {};
    totalElemento.textContent = 0;
    carritoLista.innerHTML = '';
    document.querySelectorAll('.cantidad').forEach((el) => el.textContent = 0);
  });

  document.getElementById("pagar").addEventListener("click", preguntarAccion);
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


function preguntarAccion() {
  const total = parseInt(document.getElementById("total").textContent);

  if (total === 0) {
    alert("El carrito está vacío. Agregá al menos un producto antes de continuar.");
    return; 
  }

  const respuesta = confirm("¿Querés iniciar sesión?\nSi elegís 'Cancelar', te llevará al formulario de envío.");

  if (respuesta) {
    window.location.href = "login.html";
  } else {
    window.location.href = "formularioEnvio.html";
  }
}

