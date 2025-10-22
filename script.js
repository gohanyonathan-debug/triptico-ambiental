function abrirSeccion(num) {
  const secciones = {
    1: {
      html: `<h2><img src='icons/planeta.png' width='35'> ¿Qué son los valores ambientales?</h2>
      <p>Los valores ambientales son principios que orientan nuestras decisiones para cuidar la naturaleza. Representan respeto, responsabilidad y empatía hacia todos los seres vivos. Adoptar estos valores nos impulsa a actuar pensando en el bienestar común, en las generaciones futuras y en la salud del planeta. 🌍</p>
      <p>Ejemplo: respetar la vida, cuidar el agua y reducir el consumo innecesario. Estos valores construyen una sociedad más consciente y solidaria.</p>`,
      video: "videos/valores.mp4"
    },
    2: {
      html: `<h2><img src='icons/hoja.png' width='35'> Actitudes que transforman</h2>
      <p>Las actitudes son la manera en que expresamos nuestros valores en el día a día. Una actitud positiva hacia el ambiente se refleja en pequeñas acciones: recoger basura, usar bicicleta o enseñar a otros a cuidar su entorno.</p>
      <p>Cuando actuamos con empatía y compromiso, inspiramos cambios reales. Las actitudes transforman la intención en acción. 💚</p>`,
      video: "videos/actitudes.mp4"
    },
    3: {
      html: `<h2><img src='icons/reciclaje.png' width='35'> Creencias que impulsan el cambio</h2>
      <p>Las creencias son las ideas que tenemos sobre la naturaleza y su valor. Creer que “cada acción cuenta” o que “el planeta es nuestro hogar” impulsa comportamientos positivos y sostenibles. Estas creencias moldean nuestra forma de pensar y actuar frente al medio ambiente.</p>
      <p>Visualmente, podemos representarlas como un mandala que muestra cómo una idea se expande hacia valores y acciones colectivas ♻️.</p>`,
      video: "videos/creencias.mp4"
    },
    4: {
      html: `<h2><img src='icons/bombilla.png' width='35'> Del pensamiento a la acción</h2>
      <p>Cada acción nace de una idea. Si creemos que “el agua es vida”, desarrollamos respeto, luego actitud de cuidado, y finalmente acciones concretas como cerrar el grifo o reutilizar el agua.</p>
      <p>Este proceso mental y emocional nos muestra que pensar ecológicamente se traduce en actuar ecológicamente 💧.</p>`,
      video: "videos/pensamiento.mp4"
    },
    5: {
      html: `<h2><img src='icons/flor.png' width='35'> Comportamientos sostenibles</h2>
      <p>Los comportamientos sostenibles son acciones conscientes que reducen el impacto ambiental. Separar residuos, usar transporte público, plantar árboles y comprar local son ejemplos claros.</p>
      <p>Estas conductas reflejan coherencia entre lo que creemos y lo que hacemos. 🌸</p>`,
      video: "videos/sostenibles.mp4"
    },
    6: {
      html: `<h2><img src='icons/balanza.png' width='35'> Obstáculos y oportunidades</h2>
      <p>En el camino hacia una cultura ambiental surgen retos como la desinformación, el desinterés o la falta de recursos. Pero también existen oportunidades: la educación ambiental, la tecnología verde y el trabajo colaborativo.</p>
      <p>Representar esta dualidad en una balanza ayuda a reflexionar sobre cómo superar los desafíos y aprovechar los recursos disponibles ⚖️.</p>`,
      video: "videos/obstaculos.mp4"
    },
    7: {
      html: `<h2><img src='icons/corazon.png' width='35'> Educación emocional y ambiental</h2>
      <p>La educación ambiental con enfoque emocional busca conectar sentimientos con acciones ecológicas. La tristeza ante la contaminación o la alegría al cuidar un jardín pueden convertirse en motores de cambio.</p>
      <p>Educar desde la emoción fortalece el vínculo con la naturaleza y motiva una relación más sana con el entorno 💚.</p>`,
      video: "videos/emocional.mp4"
    },
    8: {
      html: `<h2><img src='icons/huella.png' width='35'> Tu huella simbólica</h2>
      <p>Tu huella simbólica es una representación de tu compromiso ambiental. Puede ser un mandala, un dibujo, o una frase que exprese tus valores ecológicos.</p>
      <p>Esta huella se convierte en tu “firma verde”, una forma de decirle al mundo: “Yo también cuido mi planeta” 🌎.</p>`,
      video: "videos/huella.mp4"
    }
  };

  const { html, video } = secciones[num];
  document.getElementById("texto").innerHTML = html;
  document.getElementById("video").src = video;
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("video").pause();
}