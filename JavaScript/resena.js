document.addEventListener("DOMContentLoaded", function() {
  const estrellas = document.querySelectorAll(".estrella");
  let valorSeleccionado = 0;

  estrellas.forEach((estrella, i) => {
    estrella.addEventListener("click", () => {
      valorSeleccionado = i + 1;

      // pinta las seleccionadas
      estrellas.forEach((e, j) => {
        e.classList.toggle("seleccionada", j < valorSeleccionado);
      });
    });
  });

  const form = document.getElementById("reseñaForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !mensaje || valorSeleccionado === 0) {
      alert("Por favor completá todos los campos y seleccioná una puntuación ⭐");
      return;
    }

    alert(`¡Gracias por tu reseña, ${nombre}! Pusiste ${valorSeleccionado} estrellas.`);
    form.reset();
    estrellas.forEach(e => e.classList.remove("seleccionada"));
    valorSeleccionado = 0;
  });
});
