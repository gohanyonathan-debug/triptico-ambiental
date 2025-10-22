// Selecciona todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

// Animación de videos al click
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

// Generar hojas flotando aleatorias
function crearHojas() {
  const body = document.body;
  for(let i=0; i<15; i++){
    let hoja = document.createElement('div');
    hoja.classList.add('hoja');
    hoja.style.left = Math.random() * window.innerWidth + 'px';
    hoja.style.animationDuration = 5 + Math.random() * 5 + 's';
    hoja.style.animationDelay = Math.random() * 5 + 's';
    body.appendChild(hoja);
  }
}

crearHojas();