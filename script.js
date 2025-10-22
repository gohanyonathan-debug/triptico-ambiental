// Seleccionamos todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach(tarjeta => {
  const video = tarjeta.querySelector('video');

  // Al hacer clic en la tarjeta, se activa o desactiva el video
  tarjeta.addEventListener('click', () => {
    if(video) {
      // Ocultar todos los videos
      tarjetas.forEach(t => {
        const v = t.querySelector('video');
        if(v) v.classList.remove('active');
      });

      // Mostrar el video de la tarjeta clickeada
      video.classList.add('active');
      video.play();
    }
  });
});