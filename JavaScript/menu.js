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
});
