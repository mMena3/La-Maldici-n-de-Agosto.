// Agrega aquí las estrofas de tu soneto (usa <br> para los saltos de línea)
const estrofas = [
  "El lirio blanco, puro y excepcional:<br>Para mí, amor, tú eres esa pureza.<br>Pétalos claros y redondos, sin mal.<br>Tallo fuerte, lejos de la maleza.",
  "Segunda estrofa del soneto aquí,<br>continúa el ritmo con elegancia,<br>palabras dulces que guardé para ti,<br>llenas de calma y de resonancia.",
  "Tercera estrofa que empieza a cerrar,<br>con sentimiento firme y profundo,<br>un verso claro para recordar.",
  "Y en el último verso de este mundo,<br>dejar la huella que no ha de borrar,<br>este secreto sutil y fecundo."
];

const contenedor = document.getElementById("contenedor-poema");
let indiceEstrofa = 0;

function escribirEstrofa() {
  if (indiceEstrofa < estrofas.length) {
    const p = document.createElement("p");
    p.classList.add("estrofa-tipeando");
    contenedor.appendChild(p);

    let textoHTML = estrofas[indiceEstrofa];
    let i = 0;

    function escribirLetra() {
      // Si encontramos una etiqueta <br>, la insertamos completa de golpe
      if (textoHTML.substring(i, i + 4) === "<br>") {
        p.innerHTML += "<br>";
        i += 4;
      } else {
        p.innerHTML += textoHTML.charAt(i);
        i++;
      }

      if (i < textoHTML.length) {
        setTimeout(escribirLetra, 40); // Velocidad de escritura (40ms por letra)
      } else {
        p.classList.remove("estrofa-tipeando"); // Quitamos el cursor al terminar la estrofa
        indiceEstrofa++;
        setTimeout(escribirEstrofa, 600); // Pausa de 600ms antes de empezar la siguiente estrofa
      }
    }

    escribirLetra();
  }
}

// Inicia el efecto cuando la página carga
window.onload = () => {
  setTimeout(escribirEstrofa, 500);
};