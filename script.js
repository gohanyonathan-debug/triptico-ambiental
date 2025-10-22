// Selecciona todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach(tarjeta => {
  const video = tarjeta.querySelector('video');

  tarjeta.addEventListener('click', () => {
    if(video) {
      // Oculta todos los videos primero
      tarjetas.forEach(t => {
        const v = t.querySelector('video');
        if(v) {
          v.pause();
          v.currentTime = 0;
          v.classList.remove('active');
        }
      });

      // Activa el video de la tarjeta seleccionada
      video.classList.add('active');
      video.play();

      // Desplaza la tarjeta hacia arriba suavemente
      tarjeta.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});